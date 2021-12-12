<template>
  <app-content-layout>
    <div class="block">
      <div class="title">
        <img src="~@/assets/images/home_title3.png" alt="" />
      </div>
      <div class="content-box">
        <div class="item">
          <app-svg-icon name="slogan1" />
          <div class="slogan-text">统一平台</div>
        </div>
        <div class="item">
          <app-svg-icon name="slogan2" />
          <div class="slogan-text">统一数据库</div>
        </div>
        <div class="item">
          <app-svg-icon name="slogan3" />
          <div class="slogan-text">统一技术标准</div>
        </div>
        <div class="item">
          <app-svg-icon name="slogan4" />
          <div class="slogan-text">统一工作机制</div>
        </div>
      </div>
    </div>
  </app-content-layout>
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
.content-box {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
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
</style>
