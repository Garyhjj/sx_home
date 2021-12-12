<template>
  <div class="top">
    <img :src="img" alt="" />
    <div class="text-box">
      <app-content-layout>
        <slot />
      </app-content-layout>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String
  }
};
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
  .text-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .page-content-box {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
}
</style>
