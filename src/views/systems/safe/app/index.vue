<template>
  <div class="platform-container">
    <app-banner-layout :img="bannerImg">
      <div class="message-box">
        <div class="title">煤炭安全监管专员app</div>
        <div class="text">
          <div class="line">
            依托“时代云煤炭数据中台+安全生产工业互联网平台”实现了“煤矿企业安全生产主体责任到人
          </div>
          <div class="line">
            政府安全监管主体责任到人”的安全生产共治模式创新和技术创新。
          </div>
        </div>
      </div>
    </app-banner-layout>
    <div class="tabs-box">
      <app-content-layout>
        <div
          v-for="(item, idx) in functionList"
          :key="item.name"
          class="tab-box"
          :class="{ 'is-active': activeName === item.name }"
          @click="scrollTo(item, idx)"
        >
          <div class="text">{{ item.name }}</div>
        </div>
      </app-content-layout>
    </div>

    <div class="outer-content">
      <div class="block" ref="block1">
        <div class="title whole">
          <app-content-layout>平台介绍</app-content-layout>
        </div>
        <app-content-layout>
          <div class="inner-content">
            <div class="img-box">
              <img src="~@/assets/images/safe_app_img1.png" alt="" />
            </div>
            <div class="sub">
              <div class="sub-title">1.安全生产信息</div>
              <div class="text">
                亮点：煤矿基础信息、煤矿安全生产动态信息、煤矿领导带班信息、煤矿安全监察专员井下值班信息、井下环境监测信息、设备运行信息、关键位置视频监控信息和报警处置反馈信息等；
              </div>
            </div>
            <div class="sub">
              <div class="sub-title">2.煤矿安全管理数据</div>
              <div class="text">
                煤矿双预防体系建设和运行情况、区域煤矿安全生产责任保险体系建设和应用情况；
              </div>
            </div>
            <div class="sub">
              <div class="sub-title">3.可视化通信工具</div>
              <div class="text">
                可一键直接连通煤矿调度室，也可转安全生产现场；
              </div>
            </div>
          </div>
        </app-content-layout>
      </div>
      <app-content-layout>
        <div ref="block2" class="block">
          <div class="title">产品亮点</div>
          <div class="inner-content">
            <div class="text">
              依托“时代云煤炭数据中台+安全生产工业互联网平台”实现了“煤矿企业安全生产主体责任到人，政府安全监管主体责任到人”的安全生产共治模式创新和技术创新。
            </div>
          </div>
        </div>
        <div ref="block3" class="block">
          <div class="title">产品目标</div>
          <div class="inner-content">
            <div class="text">
              煤矿安全监管专员、煤矿安全管理人员通过使用移动APP系统，可以实时掌握煤矿安全生产情况，实现减少煤矿隐患数量，降低安全生产事故的目标。
            </div>
            <div class="text">
              实现“现场检查”向“现场检查+移动APP远程检查”相结合转变，“一次性检查”向“持续监测”转变，为政府、煤矿企业远程常态化监管和管理提供了有效的管理工具。
            </div>
          </div>
        </div>
      </app-content-layout>
    </div>
  </div>
</template>

<script>
const bannerImg = require("@/assets/images/safe_app_banner.png");

export default {
  data() {
    return {
      bannerImg,
      functionList: [
        { name: "产品介绍" },
        { name: "产品亮点" },
        { name: "产品目标" }
      ],
      activeName: "产品介绍"
    };
  },
  mounted() {
    const fn = () => {
      let visibleIdx = this.functionList.findIndex((f, i) => this.isEleTopVisible(this.$refs["block" + (i + 1)]));
      if (visibleIdx < 0) {
        visibleIdx = this.functionList.findIndex((f, i) => this.isEleBottomVisible(this.$refs["block" + (i + 1)]));
      }
      if (visibleIdx < 0) {
        visibleIdx = 0;
      }
      this.activeName = this.functionList[visibleIdx].name;
    };
    window.addEventListener("scroll", fn);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("scroll", fn);
    });
  },
  methods: {
    scrollTo(item, idx) {
      this.activeName = item.name;
      this.$refs["block" + (idx + 1)].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    },
    isEleTopVisible(ele) {
      const { top } = ele.getBoundingClientRect();
      const h = window.innerHeight;
      if (top < 95 || top > h) {
        // y 轴方向
        return false;
      }
      return true;
    },
    isEleBottomVisible(ele) {
      const { bottom } = ele.getBoundingClientRect();
      const h = window.innerHeight;
      if (bottom < 95 || bottom > h) {
        // y 轴方向
        return false;
      }
      return true;
    },
    goToSystem() {
      window.open(
        "http://172.21.1.25/#/login?username=12222222222&password=Jykj@222222",
        "_blank"
      );
    }
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
}
.message-box {
  .title {
    height: 36px;
    font-size: 36px;
    font-weight: bold;
    color: #318fee;
    line-height: 36px;
  }
  .text {
    font-size: 16px;
    color: #606266;
    margin: 53px 0 56px 0;
    .line {
      margin-bottom: 16px;
      line-height: 16px;
    }
  }
  .btn {
    width: 160px;
  }
}
.tabs-box {
  width: 100%;
  height: 55px;
  background: #ffffff;
  box-shadow: 2px 3px 8px -4px rgb(0 0 0 / 20%);
}
.tab-box {
  position: relative;
  display: inline-block;
  color: #303133;
  font-size: 18px;
  line-height: 55px;
  margin-right: 32px;
  cursor: pointer;
  &:hover:after,
  &.is-active:after {
    content: "";
    position: absolute;
    width: 90%;
    height: 2px;
    bottom: 6px;
    left: 5%;
    background: #3f85ed;
  }
}
.title {
  height: 30px;
  font-size: 30px;
  font-weight: 500;
  color: #303133;
  line-height: 30px;
  &.whole {
    padding-bottom: 21px;
    padding-top: 74px;
    background: #fff;
    margin-bottom: 0 !important;
  }
}
.outer-content {
  padding-bottom: 98px;
  background: #f6faff;
  margin-bottom: 57px;
}
.block {
  margin-bottom: 48px;
  &:first-child .inner-content {
    padding-top: 55px;
  }
  .title {
    margin-bottom: 24px;
  }
  .img-box {
    text-align: center;
    img {
      max-width: 100%;
    }
  }
  .sub {
    margin-bottom: 24px;
  }
  .sub-title {
    font-size: 21px;
    font-weight: 500;
    color: #303133;
    line-height: 21px;
    margin-bottom: 24px;
  }
  .text {
    font-size: 18px;
    color: #606266;
    line-height: 47px;
    text-indent: 36px;
  }
}
</style>
