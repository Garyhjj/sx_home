<template>
  <div class="home-container">
    <div class="banner-box">
      <div class="page-title">
        <div class="line">争当能源革命排头兵</div>
        <div class="line">谱写山西能源新篇章</div>
        <div class="underline"></div>
      </div>
      <el-carousel height="calc(100vh - 310px)" class="banner" :interval="6000" arrow="never">
        <el-carousel-item>
          <img src="~@/assets/images/home_banner_bg1.png" alt="" />
          <div class="first-block">first-block</div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="~@/assets/images/home_banner_bg2.png" alt="" />
          <div class="first-block">second-block</div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="~@/assets/images/home_banner_bg3.png" alt="" />
          <div class="first-block">third-block</div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <introduction-block />
    <platform-block />
  </div>
</template>

<script>
import introductionBlock from "./components/introduction-block.vue";
import platformBlock from "./components/platform-block.vue";

export default {
  name: "Home",
  components: {
    introductionBlock,
    platformBlock
  },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.banner-box {
  position: relative;
  .page-title {
    position: absolute;
    left: 20%;
    top: 50%;
    color: #4882D9;
    margin-top: -60px;
    font-size: 40px;
    z-index: 99;
    .line {
      margin-bottom: 12px;
    }
    .underline {
      width: 40px;
      height: 6px;
      background: linear-gradient(90deg, #4882D9 0%, #5AD5F8 100%);
      border-radius: 5px;
      margin-top: 18px;
    }
  }
}
.first-block {
  line-height: 300px;
}
.el-carousel__item {
  // &.is-active {
  //   img {
  //     transition: all 2s;
  //     transform: scale(1.05);
  //   }
  // }
  img {
    width: 100%;
    // height: 100%;
  }
}

.banner {
  ::v-deep .el-carousel__container {
    max-height: 696px;
    // .el-carousel__item {
    //   transform: none!important;
    // }
  }
  ::v-deep .el-carousel__indicators {
      .el-carousel__indicator {
        &.is-active .el-carousel__button {
          opacity: 1;
        }
        .el-carousel__button {
        height: 4px;
        background: #4882D9;
        opacity: 0.2;
        }
      }
    }
}
</style>
