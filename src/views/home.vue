<template>
  <div class="home-container">
    <el-carousel height="100vh" direction="vertical" :autoplay="false" @change="i => currentIndex = i">
    <el-carousel-item>
      <div class="first-block">first-block <app-animate-number :data="456" /></div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="first-block">second-block</div>
    </el-carousel-item>
    <el-carousel-item>
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
      currentIndex: 0
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>

</style>
