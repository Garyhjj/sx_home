<template>
  <div class="menu-dropdown-container" :style="{ height: data ? height + 'px' : 0, borderWidth: data? '1px': '0' }">
    <i class="el-icon-close" @click="$emit('close')" />
    <div class="content">
      <div class="left" :style="{ display: noSider ? 'none' : 'block'}">
        <div
          class="line"
          v-for="item in data"
          :key="item.name"
          @mouseenter="activeTopMenuName = item.name"
          :class="{ active: activeTopMenuName === item.name }"
        >
          {{ item.name }} <i class="el-icon-arrow-right" />
        </div>
      </div>
      <div class="right">
        <div class="sub-content">
          <div v-for="item in subMenus" :key="item.name" class="sub-menu-item" :class="{disabled: !item.routeName}">
            <div class="sub-menu-name" @click="goToDetail(item)">
              {{item.name}}
              <i class="el-icon-arrow-right" />
            </div>
            <div class="sub-menu-description">
              {{item.description}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    height: {
      type: Number,
      default: 240
    },
    noSider: Boolean
  },
  data() {
    return {
      activeTopMenuName: ""
    };
  },
  computed: {
    subMenus() {
      const target = (this.data || []).find(m => m.name === this.activeTopMenuName);
      return target ? target.children : [];
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(ls) {
        if (!ls || ls.length === 0) return;
        if (!this.activeTopMenuName || !ls.some(l => l.name === this.activeTopMenuName)) {
          this.activeTopMenuName = ls[0].name;
        }
      }
    }
  },
  methods: {
    goToDetail({ routeName }) {
      if (!routeName) return;
      const routeUrl = this.$router.resolve({ name: routeName });
      window.open(routeUrl.href, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-dropdown-container {
  position: absolute;
  left: 0;
  top: 95px;
  width: 100%;
  color: #000;
  padding: 0 32px;
  border-top: 1px solid $primaryColor;
  box-sizing: border-box;
  background-color: #fff;
  transition: height 0.4s ease-in-out;
  overflow: hidden;
  .el-icon-close {
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 24px;
    color: $fontColorLevel4;
    cursor: pointer;
    z-index: 999;
  }
  .content {
    display: flex;
    height: 100%;
    .left {
      width: 180px;
      height: 100%;
      font-size: 18px;
      font-weight: 600;
      padding: 35px 20px 24px 20px;
      border-right: 1px solid $borderColor;
      .line {
        width: 100%;
        margin-bottom: 16px;
        cursor: pointer;
        &:hover, &.active {
          color: $primaryColor;
        }
        &.active .el-icon-arrow-right {
          display: block;
        }
        .el-icon-arrow-right {
          display: none;
          float: right;
          transform: translateY(3px);
        }
      }
    }
    .right {
      height: 100%;
      flex: 1;
      max-width: calc(100% - 220px);
      padding-top: 40px;
      padding-left: 55px;
      padding-bottom: 16px;
      .sub-content {
        display: flex;
        flex-wrap: wrap;
        .sub-menu-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 56px;
          width: 33%;
          padding-left: 24px;
          padding-bottom: 16px;
          margin-bottom: 8px;
          box-sizing: border-box;
          &.disabled {
            .sub-menu-name {
              cursor: not-allowed;
              &:hover {
                color: #000;
              }
            }
          }
          .sub-menu-name {
            font-weight: 600;
            cursor: pointer;
            &:hover {
              color: $primaryColor;
            }
            .el-icon-arrow-right {
              margin-left: 16px;
            }
          }
          .sub-menu-description {
            color: $fontColorLevel3;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
