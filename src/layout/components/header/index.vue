<template>
  <div class="header">
    <div class="logo-box">
      山西省煤炭信息监管服务平台
    </div>
    <app-menu />
    <header-user />
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
.header {
  position: fixed;
  width: 100%;
  height: 80px;
  padding: 0 16px;
  left: 0;
  right: 0;
  top: 0;
  background: #eee;
  box-sizing: border-box;
  vertical-align: top;
  z-index: 99;

  .logo-box {
    display: inline-flex;
    align-items: center;
    height: 100%;
    width: max-content;
  }
}
</style>
