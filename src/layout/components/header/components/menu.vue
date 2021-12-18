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
    <menuDropdown class="dropdown" :no-sider="hoverMenu && hoverMenu.noSider" :data="hoverMenu && hoverMenu.children" :height="hoverMenu && hoverMenu.dropdownHeight"  @close="hoverMenu = null" />
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
    handleClickMenu({ routeName }) {
      if (!routeName) return;
      const routeUrl = this.$router.resolve({ name: routeName });
      window.open(routeUrl.href, "_blank");
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
  color: #667F97;
  font-size: 16px;
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
        background: #3660C9;
      }
    }
  }
}
@media (min-width: 1900px) {
  .menu-box {
    margin-left: 115px;
    .list .item {
      margin-right: 55px;
    }
  }
}
@media (max-width: 1899px) and (min-width: 1700px) {
  .menu-box {
    margin-left: 100px;
    .list .item {
      margin-right: 42px;
    }
  }
}
@media (max-width: 1699px) and (min-width: 1500px) {
  .menu-box {
    margin-left: 85px;
    .list .item {
      margin-right: 32px;
    }
  }
}
@media (max-width: 1499px) and (min-width: 1300px) {
  .menu-box {
    margin-left: 70px;
    .list .item {
      margin-right: 22px;
    }
  }
}

@media (max-width: 1299px) and (min-width: 1100px)  {
  .menu-box {
    margin-left: 30px;
    .list .item {
      margin-right: 8px;
    }
  }
}

@media (max-width: 1099px) {
  .menu-box {
    margin-left: 20px;
    .list .item {
      margin-right: 4px;
    }
  }
}
</style>
