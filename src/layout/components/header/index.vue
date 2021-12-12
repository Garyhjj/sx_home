<template>
  <div class="header-contaner">
    <div class="header-top">
      <span class="link" @click="openWindow('http://www.shanxi.gov.cn/')">山西省政府</span
      >
      <span class="line"></span>
      <span class="link" @click="openWindow('http://nyj.shanxi.gov.cn/')">山西省能源局</span
      >
      <div class="right-content">
        <span class="link doc">文档中心</span>
        <span class="link">运营中心</span>
        <span class="link login"  @click="goToLogin">登录</span>
        <span class="line"></span>
        <span class="link">注册</span>
      </div>
    </div>
    <div class="header-bottom">
      <div class="logo-box" @click="goToHome"><img src="~@/assets/images/logo.png" alt=""></div>
      <app-menu />
      <div class="search">
        <el-input v-model="searchText" size="medium">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    appMenu: () => import("./components/menu.vue")
  },
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    openWindow(url) {
      window.open(url, "_blank");
    },
    goToHome() {
      this.$router.push({ name: "index" });
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    }
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
  line-height: 40px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #2260a5;
  padding: 0 66px 0 40px;
  background: #fff;
  .line {
    display: inline-block;
    width: 2px;
    height: 20px;
    background: #e6e4e2;
    vertical-align: text-bottom;
    margin: 0 14px;
  }
  .link {
    cursor: pointer;
  }
  .right-content {
    float: right;
    .doc {
      margin-right: 21px;
    }
    .login {
      margin-left: 76px;
    }
  }
}
.header-bottom {
  height: 55px;
  padding: 0 50px 0 40px;
  background: #3f85ed;
  box-sizing: border-box;
  vertical-align: top;

  .logo-box {
    display: inline-flex;
    align-items: center;
    height: 100%;
    width: max-content;
    cursor: pointer;
  }
}
.search {
  float: right;
  display: flex;
  align-items: center;
  height: 100%;
  width: 280px;
  ::v-deep .el-input__inner {
    border-radius: 36px;
  }
}
</style>
