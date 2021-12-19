<template>
  <div class="header-contaner">
    <div class="header-top">
      <span class="link" @click="openWindow('http://www.shanxi.gov.cn/')">山西省人民政府</span
      >
      <span class="line"></span>
      <span class="link" @click="openWindow('http://nyj.shanxi.gov.cn/')">山西省能源局</span
      >
      <div class="right-content">
        <span class="link doc" @click="goToDoc">文档中心</span>
        <span class="link" @click="goToDataScreen">运营中心</span>
        <img src="~@/assets/images/user_default.png" alt="">
        <span>管理员</span>
        <!-- <span class="link login"  @click="goToLogin">登录</span>
        <span class="line"></span>
        <span class="link">注册</span> -->
      </div>
    </div>
    <div class="header-bottom">
      <div class="logo-box" @click="goToHome"><img src="~@/assets/images/logo.png" alt=""></div>
      <app-menu />
      <div class="search">
        <el-input v-model="searchText" size="small" @keyup.enter.native="onQuerySearch()">
        </el-input>

        <div class="search-btn" @click="onQuerySearch"><i class="el-icon-search"></i></div>
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
    },
    onQuerySearch() {
      if (!this.searchText) return;
      this.$router.push({ name: "search", query: { text: this.searchText }});
    },
    goToDoc() {
      this.$router.push({ name: "doc" });
    },
    goToDataScreen() {
      window.open("http://111.53.212.59:28000/", "_blank");
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
  max-width: 1920px;
  margin: 0 auto;
  z-index: 99;
}
.header-top {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  padding: 0 66px 0 40px;
  background: #3660C9;
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
    img {
      height: 18px;
      margin-left: 76px;
      margin-right: 8px;
      vertical-align: middle;
    }
  }
}
.header-bottom {
  height: 55px;
  padding: 0 50px 0 40px;
  background: #FFF;
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
  .search-btn {
    width: 38px;
    height: 31px;
    color: #FFF;
    font-size: 20px;
    padding-top: 2px;
    padding-left: 4.5px;
    background: #667F97;
    border: 1px solid #667F97;
    border-radius: 2px;
    margin-left: 5px;
    box-sizing: border-box;
    cursor: pointer;
  }
  ::v-deep .el-input__inner {
    border: 1px solid #667F97;
    border-radius: 2px;
  }
}

@media (min-width: 1900px) {
  .search {
    width: 280px;
  }
}
@media (max-width: 1899px) and (min-width: 1700px) {
  .search {
    width: 240px;
  }
}
@media (max-width: 1699px) and (min-width: 1500px) {
  .search {
    width: 200px;
  }
}
@media (max-width: 1499px) and (min-width: 1300px) {
  .search {
    width: 180px;
  }
}

@media (max-width: 1299px) and (min-width: 1100px)  {
  .search {
    width: 140px;
  }
}

@media (max-width: 1099px) {
  .search {
    width: 100px;
  }
}
</style>
