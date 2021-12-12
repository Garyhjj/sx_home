<template>
  <div class="block">
    <div class="title">
      <img src="~@/assets/images/home_title5.png" alt="" />
    </div>
    <div class="content-box">
      <img src="~@/assets/images/home_block_bg1.png" alt="" />
      <div class="inner-content">
        <app-content-layout>
          <div class="text-box">
            <div class="text">科技开采绿色经济新发展</div>
            <div class="text">全力打造现代化产业建设</div>
            <div class="line"></div>
          </div>
        </app-content-layout>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.block {
  > .title {
    text-align: center;
  }
}
.block {
  margin-top: 54px;
}
.content-box {
  position: relative;
  width: 100%;
  margin-top: 40px;
  img {
    width: 100%;
  }
  .inner-content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .page-content-box {
        display: flex;
        align-items: center;
        height: 100%;
    }
    .text-box {
      font-size: 36px;
      font-weight: bold;
      color: #ffffff;
      .text {
        height: 36px;
        line-height: 36px;
        margin-bottom: 20px;
      }
      .line {
          width: 141px;
          height: 11px;
          background: #FFFFFF;
          opacity: 0.43;
          margin-top: 40px;
      }
    }
  }
}
</style>
