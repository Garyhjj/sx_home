<template>
  <div class="home-container">
    <div class="banner-box">
      <el-carousel height="calc(100vh - 310px)" class="banner" :interval="6000" arrow="never">
        <el-carousel-item>
          <app-banner-layout :img="banner1">
            <div class="page-title">
              <div class="line">争当能源革命排头兵</div>
              <div class="line">谱写山西能源新篇章</div>
              <div class="underline"></div>
            </div>
          </app-banner-layout>
        </el-carousel-item>
        <el-carousel-item>
          <app-banner-layout :img="banner2">
            <div class="page-title">
              <div class="line">争当能源革命排头兵</div>
              <div class="line">谱写山西能源新篇章</div>
              <div class="underline"></div>
            </div>
          </app-banner-layout>
        </el-carousel-item>
        <el-carousel-item>
          <app-banner-layout :img="banner3">
            <div class="page-title">
              <div class="line">争当能源革命排头兵</div>
              <div class="line">谱写山西能源新篇章</div>
              <div class="underline"></div>
            </div>
          </app-banner-layout>
        </el-carousel-item>
      </el-carousel>
    </div>
    <introduction-block />
    <platform-block />
    <news-block />
    <slogan-block />
    <statistics-block />
    <build-block />
    <map-block />
  </div>
</template>

<script>
import introductionBlock from "./components/introduction-block.vue";
import platformBlock from "./components/platform-block.vue";
import newsBlock from "./components/news-block.vue";
import sloganBlock from "./components/slogan-block.vue";
import statisticsBlock from "./components/statistics-block.vue";
import buildBlock from "./components/build-block";
import mapBlock from "./components/map-block";

const banner1 = require("@/assets/images/home_banner_bg1.png");
const banner2 = require("@/assets/images/home_banner_bg1.png");
const banner3 = require("@/assets/images/home_banner_bg1.png");

export default {
  name: "Home",
  components: {
    introductionBlock,
    platformBlock,
    newsBlock,
    sloganBlock,
    statisticsBlock,
    buildBlock,
    mapBlock
  },
  data() {
    return {
      banner1,
      banner2,
      banner3
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
    color: #4882D9;
    font-size: 24px;
    z-index: 99;
    overflow: hidden;
    .line {
      margin-bottom: 12px;
      opacity: 0;
      transform: translateY(100%);
      transition: all 0.8s;
    }
    .underline {
      width: 40px;
      height: 6px;
      background: linear-gradient(90deg, #4882D9 0%, #5AD5F8 100%);
      border-radius: 5px;
      margin-top: 18px;
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.8s;
    }
  }
}
@media (min-width: 1900px) {
  .banner-box .page-title {
    font-size: 46px;
  }
}
@media (max-width: 1899px) and (min-width: 1700px) {
  .banner-box .page-title {
    font-size: 42px;
  }
}
@media (max-width: 1699px) and (min-width: 1500px) {
  .banner-box .page-title {
    font-size: 38px;
  }
}
@media (max-width: 1499px) and (min-width: 1300px) {
  .banner-box .page-title {
    font-size: 34px;
  }
}
@media (max-width: 1299px) and (min-width: 1100px) {
  .banner-box .page-title {
    font-size: 30px;
  }
}
@media (max-width: 1099px) and (min-width: 900px) {
  .banner-box .page-title {
    font-size: 26px;
  }
}
.first-block {
  line-height: 300px;
}
.el-carousel__item {
  &.is-active {
    // img {
    //   transition: all 2s;
    //   transform: scale(1.05);
    // }
    .page-title {
      .line, .underline {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  img {
    width: 100%;
    // height: 100%;
  }
}

.banner {
  ::v-deep .el-carousel__container {
    max-height: 696px;
    .el-carousel__item {
      transform: none!important;
    }
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
