<template>
  <app-content-layout>
    <div class="block">
      <div class="title">
        <img src="~@/assets/images/home_title4.png" alt="" />
      </div>
      <div class="content-box">
        <div class="line two">
          <div class="item">
            <div class="img">
              <img src="~@/assets/images/home_statistics1.png" alt="" />
            </div>
            <div class="text">
              8,848
              <div class="type">注册用户</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="~@/assets/images/home_statistics2.png" alt="" />
            </div>
            <div class="text">
              1,648
              <div class="type">平台开发者</div>
            </div>
          </div>
        </div>
        <div class="line three">
          <div class="item">
            <div class="img">
              <img src="~@/assets/images/home_statistics3.png" alt="" />
            </div>
            <div class="text">
              1,024
              <div class="type">服务企业数量</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="~@/assets/images/home_statistics4.png" alt="" />
            </div>
            <div class="text">
              18,648
              <div class="type">连接设备数</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="~@/assets/images/home_statistics5.png" alt="" />
            </div>
            <div class="text">
              35PB
              <div class="type">平台数据总量</div>
            </div>
          </div>
        </div>
        <div class="line two">
          <div class="item">
            <div class="img">
              <img src="~@/assets/images/home_statistics6.png" alt="" />
            </div>
            <div class="text">
              11 <span class="sub">地市</span> 4 <span class="sub">大集团</span>
              <div class="type">覆盖区域</div>
            </div>
          </div>
          <div class="item last">
            <div class="img">
              <img src="~@/assets/images/home_statistics7.png" alt="" />
            </div>
            <div class="text">
              13
              <div class="type">工业APP总数</div>
            </div>
          </div>
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
.block {
  margin-top: 60px;
}
.content-box {
  width: 100%;
  margin-top: 40px;
  padding: 38px 20px;
  background: #f4f5fa;
  box-sizing: border-box;
  .line {
    display: flex;
    .item {
      display: flex;
      align-items: center;
      .img {
        margin-right: 23px;
      }
      .text {
        position: relative;
        height: 40px;
        font-size: 40px;
        font-family: Roboto;
        color: #3f85ed;
        line-height: 40px;
        .sub {
          font-size: 28px;
        }
        .type {
          position: absolute;
          color: #000;
          font-size: 14px;
          height: 14px;
          line-height: 14px;
          top: 56px;
          white-space: nowrap;
        }
      }
    }
    &.two {
      .item {
        &:nth-child(1) {
          width: 56%;
          justify-content: center;
        }
        &:nth-child(2) {
          width: 44%;
        }
      }
      .last {
        padding-left: 48px;
        box-sizing: border-box;
      }
    }
    &.three {
      .item {
        &:nth-child(1) {
          width: 38%;
        }
        &:nth-child(2) {
          width: 38%;
        }
        &:nth-child(3) {
          width: 24%;
        }
      }
    }
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
}
</style>
