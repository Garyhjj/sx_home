<template>
  <div class="contact-container">
    <app-banner-layout :img="bg">
      <div class="message-box">
        <div class="title">联系我们</div>
        <div class="line"></div>
      </div>
    </app-banner-layout>
    <app-content-layout>
      <div class="breadcrumb-box">
        <div class="breadcrumb-content">
          <span class="start">您的位置：</span>
          <span class="middle">首页 > 帮助与支持 > </span>
          <span class="last">联系我们</span>
        </div>
      </div>

      <div class="content-box">
        <div class="title">
          <img src="~@/assets/images/contact_title.png" alt="" />
        </div>

        <div class="company">山西云时代技术有限公司</div>

        <div class="site">地址：山西示范区太原学府园区长治路345号</div>

        <div class="location">
          <img src="~@/assets/images/contact_location.png" alt="" />
        </div>

        <div class="block">
          <div class="line">技术服务热线：服务热线：4000351811（政府）</div>
          <div class="line">服务时间：全天候7*24h</div>
        </div>
        <div class="block">
          <div class="line">客户投诉热线：投诉热线：4000351811请选择0</div>
          <div class="line">服务时间：周一至周五 8:30-17:30</div>
        </div>
        <div class="block">
          <div class="line">其他联系方式：收文电话：0351-5221910</div>
          <div class="line">
            传 真：0351-5221911服务时间：周一至周五 8:30-17:30
          </div>
        </div>

        <div class="qr-code">
            <img src="~@/assets/images/wechat_qr_code.png" alt="" />
        </div>
      </div>
    </app-content-layout>
  </div>
</template>

<script>
const bg = require("@/assets/images/contact_bg.png");

export default {
  data() {
    return {
      bg
    };
  }
};
</script>

<style lang="scss" scoped>
.message-box {
  .title {
    height: 55px;
    font-size: 55px;
    font-weight: bold;
    color: #318fee;
    line-height: 55px;
  }
  .line {
    width: 33px;
    height: 7px;
    background: #3f85ed;
    opacity: 0.35;
    margin-top: 26px;
  }
}
.breadcrumb-box {
  padding: 15px 8px 17px 8px;
  border-bottom: 1px solid #e4e7ed;
  .breadcrumb-content {
    height: 16px;
    font-size: 16px;
    color: #c0c4cc;
    line-height: 16px;
    .start {
      margin-right: 8px;
    }
    .last {
      color: #909399;
    }
  }
}

.content-box {
  margin-top: 60px;
  text-align: center;
  margin-bottom: 70px;
  border-bottom: 1px solid #e4e7ed;

  .company {
    height: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #1e1e1e;
    line-height: 24px;
    margin-top: 58px;
  }

  .site {
    height: 16px;
    font-size: 16px;
    color: #909399;
    line-height: 16px;
    margin: 22px 0 31px 0;
  }

  .location {
      margin-bottom: 42px;
  }

  .block {
    font-size: 18px;
    font-weight: bold;
    color: #909399;
    line-height: 36px;
    margin-bottom: 30px;
  }
  .qr-code {
      margin-top: 58px;
      margin-bottom: 88px;
  }
}
</style>
