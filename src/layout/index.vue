<template>
  <div class="main-container">
    <app-header></app-header>
    <div class="content">
        <router-view />
    </div>
    <fixed-sider />
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  components: {
    appHeader: () => import("./components/header/index.vue"),
    appFooter: () => import("./components/footer/index.vue"),
    fixedSider: () => import("./components/fixed-sider/index.vue")
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  padding-top: 95px;
  // padding-bottom: 75px;
  background: #FFF;

}
</style>
