<template>
  <div class="block">
    <div class="title">
      <img src="~@/assets/images/home_title6.png" alt="" />
    </div>
    <div class="content-box">
      <app-content-layout>
        <img src="~@/assets/images/home_map.png" alt="" />
      </app-content-layout>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.block {
  > .title {
    text-align: center;
  }
  margin-bottom: 59px;
}
.block {
  margin-top: 60px;
}
.content-box {
  width: 100%;
  margin-top: 56px;
  img {
    width: 100%;
  }
}
</style>
