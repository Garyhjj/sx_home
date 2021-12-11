<template>
  <div class="menu-box" @mouseleave="hoverMenu = null">
    <div class="list">
      <span
        v-for="item in menus"
        :key="item.name"
        class="item"
        @click="handleClickMenu(item)"
        @mouseenter="hoverMenu = item"
      >
        {{ item.name }}
      </span>
    </div>
    <menuDropdown class="dropdown" :data="hoverMenu && hoverMenu.children" :height="hoverMenu && hoverMenu.dropdownHeight"  @close="hoverMenu = null" />
  </div>
</template>

<script>
import { menuList } from "@/config";

export default {
  components: {
    menuDropdown: () => import("./menu-dropdown.vue")
  },
  data() {
    return {
      menus: menuList,
      hoverMenu: null
    };
  },
  computed: {
    activeMenuName() {
      const target = this.menus.find((m) =>
        this.$route.path.startsWith(m.path)
      );
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
.menu-box {
  display: inline-flex;
  height: 100%;
  align-items: center;
  color: #fff;
  font-size: 14px;
  vertical-align: top;
  margin-left: 65px;
  .list {
    height: 100%;
    line-height: 55px;
    .item {
      position: relative;
      display: inline-block;
      width: max-content;
      margin-right: 12px;
      cursor: pointer;
      &:hover:after {
        content: "";
        position: absolute;
        width: 90%;
        height: 3px;
        bottom: 0px;
        left: 5%;
        background: #FFF
      }
    }
  }
}
</style>
