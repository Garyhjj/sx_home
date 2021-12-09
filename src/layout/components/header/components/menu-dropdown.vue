<template>
  <div class="menu-dropdown-container" :style="{ height: data ? '240px' : 0, borderWidth: data? '1px': '0' }">
    <i class="el-icon-close" @click="$emit('close')" />
    <div class="content">
      <div class="left">
        <div
          class="line"
          v-for="item in menus"
          :key="item.name"
          @mouseenter="activeTopMenuName = item.name"
          :class="{ active: activeTopMenuName === item.name }"
        >
          {{ item.name }} <i class="el-icon-arrow-right" />
        </div>
      </div>
      <div class="right">
        <div class="sub-content">
          <div v-for="item in subMenus" :key="item.name" class="sub-menu-item">
            <div class="sub-menu-name">
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
      type: Object
    }
  },
  data() {
    return {
      menus: [
        { name: "热门产品", children: [
          { name: "智能制造", description: "评估智能制造能力" },
          { name: "物联平台1", description: "以物联技术提升多个场景的数字化" },
          { name: "物联平台2", description: "以物联技术提升多个场景的数字化" },
          { name: "物联平台3", description: "以物联技术提升多个场景的数字化" },
          { name: "物联平台4", description: "以物联技术提升多个场景的数字化" },
          { name: "物联平台5", description: "以物联技术提升多个场景的数字化" }
        ] },
        { name: "软硬集成产品", children: [{ name: "智能制造2", description: "评估智能制造能力" }, { name: "物联平台", description: "以物联技术提升多个场景的数字化" }] },
        { name: "平台级产品", children: [{ name: "智能制造3", description: "评估智能制造能力" }, { name: "物联平台", description: "以物联技术提升多个场景的数字化" }] },
        { name: "行业级产品", children: [{ name: "智能制造4", description: "评估智能制造能力" }, { name: "物联平台", description: "以物联技术提升多个场景的数字化" }] }
      ],
      activeTopMenuName: "热门产品"
    };
  },
  computed: {
    subMenus() {
      const target = this.menus.find(m => m.name === this.activeTopMenuName);
      return target ? target.children : [];
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-dropdown-container {
  position: absolute;
  left: 0;
  top: 80px;
  width: 100%;
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
          height: 64px;
          width: 33%;
          padding-left: 24px;
          padding-bottom: 16px;
          margin-bottom: 8px;
          box-sizing: border-box;
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
          }
        }
      }
    }
  }
}
</style>
