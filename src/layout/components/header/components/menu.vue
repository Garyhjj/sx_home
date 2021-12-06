<template>
  <div class="menu-box">
    <div class="list">
      <span
        v-for="item in menus"
        :key="item.name"
        class="item"
        @click="handleClickMenu(item)"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: "生产经营系统", path: "/index" },
        { name: "经营管理系统", path: "/index2" },
        { name: "监管信息平台", path: "/index3" },
        { name: "行业平台", path: "/index4" },
        { name: "运营中心", path: "/index5" }
      ]
    };
  },
  computed: {
    activeMenuName() {
      const target = this.menus.find((m) =>
        this.$route.path.startsWith(m.path)
      );
      console.log(target);
      return target ? target.name : "";
    }
  },
  created() {},
  methods: {
    handleClickMenu(item) {
      this.$router.push({ path: item.path });
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.menu-box {
  display: inline-flex;
  height: 100%;
  align-items: center;
  color: #000;
  font-size: 18px;
  vertical-align: top;
  margin-left: 24px;
  .list {
    height: 18px;
    line-height: 18px;
    .item {
      position: relative;
      display: inline-block;
      width: max-content;
      margin-right: 12px;
      cursor: pointer;
      &:hover {
          color: $linkHoverColor;
      }
      &:hover:after {
        content: "";
        position: absolute;
        width: 90%;
        height: 3px;
        bottom: -30px;
        left: 5%;
        background: $linkHoverColor;
      }
    }
  }
}
</style>
