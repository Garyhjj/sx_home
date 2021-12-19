<template>
  <div class="block">
    <div class="title">
      <img src="~@/assets/images/home_title3.png" alt="" />
    </div>
    <div class="outer-content">
      <app-content-layout>
        <div class="content-box" @mouseleave="play = true">
          <div class="item" @mouseenter="enterSlogan(0)">
            <app-svg-icon name="slogan1" />
            <div class="slogan-text">统一平台</div>
          </div>
          <div class="item" @mouseenter="enterSlogan(1)">
            <app-svg-icon name="slogan2" />
            <div class="slogan-text">统一数据库</div>
          </div>
          <div class="item" @mouseenter="enterSlogan(2)">
            <app-svg-icon name="slogan3" />
            <div class="slogan-text">统一技术标准</div>
          </div>
          <div class="item" @mouseenter="enterSlogan(3)">
            <app-svg-icon name="slogan4" />
            <div class="slogan-text">统一工作机制</div>
          </div>
        </div>

        <div class="banner-box">
          <el-carousel
            height="400px"
            ref="carousel"
            :autoplay="play"
            class="banner"
            :interval="6000"
            arrow="never"
          >
            <el-carousel-item>
              <img src="~@/assets/images/slogan_banner1.png" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="~@/assets/images/slogan_banner2.png" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="~@/assets/images/slogan_banner3.png" alt="" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="~@/assets/images/slogan_banner4.png" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </app-content-layout>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      play: true
    };
  },
  methods: {
    enterSlogan(idx) {
      this.$refs.carousel.setActiveItem(idx);
      this.play = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  > .title {
    text-align: center;
  }
}
.outer-content {
  padding-bottom: 16px;
  background: #f4f5fa;
}
.content-box {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding-top: 16px;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    cursor: pointer;
  }
  .slogan-text {
    height: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #1e1e1e;
    line-height: 24px;
    margin-top: 24px;
  }
  svg {
    width: 60px;
    height: 60px;
  }
}
.banner-box {
  width: 100%;
  margin: 0 auto;
  margin-top: 32px;
}
</style>
