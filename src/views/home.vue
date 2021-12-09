<template>
  <div class="home-container">
    <el-carousel height="533px" :interval="6000" arrow="never">
      <el-carousel-item>
        <img src="~@/assets/images/home_banner_bg1.jpg" alt="" />
        <div class="first-block">first-block</div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="~@/assets/images/home_banner_bg2.jpg" alt="" />
        <div class="first-block">second-block</div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="~@/assets/images/home_banner_bg3.jpg" alt="" />
        <div class="first-block">third-block</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Home",
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
.first-block {
  line-height: 300px;
}
.el-carousel__item {
  &.is-active {
    img {
      transition: all 2s;
      transform: scale(1.1);
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
