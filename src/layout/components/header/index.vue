<template>
  <div class="header-contaner">
    <div class="header-top"></div>
    <div class="header-bottom">
      <div class="logo-box">山西省煤炭信息监管服务平台</div>
      <app-menu />
      <header-user />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    appMenu: () => import("./components/menu.vue"),
    headerUser: () => import("./components/user.vue")
  }
};
</script>

<style lang="scss" scoped>
.header-contaner {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 99;
}
.header-top {
  height: 40px;
  background: #333;
}
.header-bottom {
  height: 80px;
  padding: 0 16px;
  background: #fff;
  box-sizing: border-box;
  vertical-align: top;

  .logo-box {
    display: inline-flex;
    align-items: center;
    height: 100%;
    width: max-content;
  }
}
</style>
