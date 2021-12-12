<template>
  <div class="small-sider-box">
    <div class="sider-content">
      <div class="item">
        <div class="img-box">
          <img src="~@/assets/images/wechat.png" alt="" />
        </div>
        <div class="name">微信</div>
        <div class="code-box">
          <img src="~@/assets/images/wechat_qr_code.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="img-box">
          <img src="~@/assets/images/feedback.png" alt="" />
        </div>
        <div class="name">意见反馈</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.small-sider-box {
  position: fixed;
  z-index: 9999;
  top: 50%;
  right: 47px;
  margin-top: -35px;
  width: 69px;
  height: 141px;
  padding: 0 10px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.33) 0px 0px 10px;
  .sider-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    .item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 50%;
      cursor: pointer;
      &:not(:last-child) {
        border-bottom: 1px solid #d5d5d5;
      }
      .img-box {
        text-align: center;
      }
      .name {
        height: 14px;
        font-size: 14px;
        color: #5080c8;
        line-height: 14px;
        text-align: center;
        margin-top: 4px;
      }
      &:hover {
        .code-box {
          left: -90px;
          opacity: 1;
        }
      }
    }
  }
}
.code-box {
  position: absolute;
  top: 1px;
  left: 0;
  opacity: 0;
  transition: all 0.3s;
  img {
    height: 70px;
  }
}
</style>
