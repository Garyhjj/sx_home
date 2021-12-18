<template>
  <div class="platform-container">
    <app-banner-layout :img="bannerImg">
      <div class="message-box">
        <div class="title">企业服务</div>
        <div class="text">
          <div class="line">
            以全面、稳定的实时采集设备,紧密监管煤矿企业的数据,保证真实准确的产销,通过精准的AI分析
          </div>
          <div class="line">
            解决企业生产数据“上报不实、应统尽统”入库不全、“跑冒滴漏”企业税收漏洞等问题
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

    <div ref="block1" class="block">
      <app-content-layout>
        <div class="title">
          <img src="~@/assets/images/company_service_title_icon.png" alt="" />
          掘进工作面智能管控系统
        </div>
        <div class="content-box">
          <div class="sub-title">
            产品介绍
            <div class="line"></div>
          </div>

          <div class="two-part-box">
            <div class="left content-text">
              该系统采用人工智能、物联网技术，赋能装备智能化升级，服务于掘进面生产的综合管控一体化系统。系统实现掘进过程中集人机环数据智能感知、数据融合分析智能决策、设备联动控制、维检修人员违章时闭锁停机等智能调度为一体的管控模式，同时记录事件，指挥作业，
              完成安全管理闭环。
            </div>
            <div class="right img">
              <img src="~@/assets/images/company_service_img1.png" alt="" />
            </div>
          </div>
          <div class="two-part-box">
            <div class="left">
              <div class="img-two">
                <img src="~@/assets/images/company_service_img2.png" alt="" />
                <img src="~@/assets/images/company_service_img3.png" alt="" />
              </div>
              <img src="~@/assets/images/company_service_img4.png" alt="" />
            </div>
            <div class="right">
              <div class="sub-title">
                产品亮点
                <div class="line"></div>
              </div>

              <div class="detail-box">
                <div class="detail-item">
                  <span class="type">智能感知：</span
                  >运用人工智能、大数据、物联网等新一代信息技术赋能装备智能化升级，智能感知掘进工作面异常状态；
                </div>
                <div class="detail-item">
                  <span class="type">智能决策：</span
                  >对工程设计数据、生产过程人机环智能感知数据进行融合分析，实现异常状态智能识别、自动报警，设备联动控制的智能决策；
                </div>
                <div class="detail-item">
                  <span class="type">自动报警：</span
                  >结合矿井劳动组织结构以及岗位职责，将智能决策形成的报警信息推送给作业人员以及各级管理人员；
                </div>
                <div class="detail-item">
                  <span class="type">联动控制：</span>基于 AI+IOT
                  技术，与设备控制系统有效结合，实现设备的联动控制，辅助人员远程操作；
                </div>
                <div class="detail-item">
                  <span class="type">维检修人员智能调度：</span
                  >基于智能决策结果以及人员岗位职责，向维检修人员自动推送维检修工单，实现为维检修人员智能调度。
                </div>
              </div>
            </div>
          </div>
        </div>
      </app-content-layout>
    </div>

    <div ref="block2" class="block second">
      <app-content-layout>
        <div class="title">
          <img src="~@/assets/images/company_service_title_icon.png" alt="" />
          煤流运输智能管控系统
        </div>
        <div class="content-box">
          <div class="sub-title">
            产品介绍
            <div class="line"></div>
          </div>

          <div class="two-part-box">
            <div class="left content-text">
              该系统以煤炭生产主要流程为切入点，将采掘运各系统生产状态、各系统设备运行状态、设备控制系统、井下作业人员进行有效结合，实现煤流系统运行过程中异常状态智能监控、人员与设备的智能保护、维检修作业的智能排程排班、满足了煤矿管理人员和井下工作人员对数据监视与自动控制系统的智能化需求，全面提升了煤矿企业的安全生产管理水平，达到减人增效、安全生产、连续生产、节能降耗的效果。
            </div>
            <div class="right img">
              <img src="~@/assets/images/company_service_img5.png" alt="" />
            </div>
          </div>
          <div class="img-three">
            <img src="~@/assets/images/company_service_img6.png" alt="" />
            <img src="~@/assets/images/company_service_img7.png" alt="" />
            <img src="~@/assets/images/company_service_img8.png" alt="" />
          </div>

          <div class="sub-title">
            产品亮点
            <div class="line"></div>
          </div>
          <div class="content-text text2">
            该系统以煤炭生产主要流程为切入点，将采掘运各系统生产状态、各系统设备运行状态、设备控制系统、井下作业人员进行有效结合，实现煤流系统运行过程中异常状态智能监控、人员与设备的智能保护、维检修作业的智能排程排班、满足了煤矿管理人员和井下工作人员对数据监视与自动控制系统的智能化需求，全面提升了煤矿企业的安全生产管理水平，达到减人增效、安全生产、连续生产、节能降耗的效果。
          </div>
        </div>
      </app-content-layout>
    </div>

    <div ref="block3" class="block third">
      <app-content-layout>
        <div class="title">
          <img src="~@/assets/images/company_service_title_icon.png" alt="" />
          综采工作面智能管控系统
        </div>
        <div class="content-box">
          <div class="sub-title">
            产品介绍
            <div class="line"></div>
          </div>
          <div class="content-text text2">
            该系统采用人工智能、物联网技术，赋能装备智能化升级，服务于掘进面生产的综合管控一体化系统。系统实现掘进过程中集人机环数据智能感知、数据融合分析智能决策、设备联动控制、维检修人员违章时闭锁停机等智能调度为一体的管控模式，同时记录事件，指挥作业，完成安全管理闭环。
          </div>

          <div class="img-two two-line">
            <img src="~@/assets/images/company_service_img9.png" alt="" />
            <img src="~@/assets/images/company_service_img10.png" alt="" />
          </div>

          <div class="img-two">
            <img src="~@/assets/images/company_service_img11.png" alt="" />
            <img src="~@/assets/images/company_service_img12.png" alt="" />
          </div>

          <div class="sub-title">
            产品亮点
            <div class="line"></div>
          </div>
          <div class="content-text text2">
            该系统采用人工智能、物联网、三维 GIS 等技术以及手机
            APP、智能安全帽等单兵装备，实现集综采工作面回采进尺计划、完成情况、物资能耗智能管理，工作面两巷一面动态展示，生产过程人机环状态动态展示、生产过程异常状态智能识别、预测预警、设备联动停机、人员智能调度、标准化作业指引以及应急联动为一体的综采工作面安全生产全过程管理的智能管控系统。
          </div>
          <div class="content-text">
            两巷一面生产过程人机环数据动态展示，为相关领导对综采工作面安全生产管理提供支撑;
          </div>
          <div class="content-text">
            综采工作面回采计划、物资材料能耗智能管理，为综采队组控制物资消耗，相关领导制定材料物资购买计划，统计材料物资使用情况提供数据支撑;
          </div>
          <div class="content-text">

           综采工作面生产过程协同控制，使用 AI、IOT
            技术实现人、机、环状态智能感知、分析，异常状态自动报警、辅助操作人员操作，并可联动综采工作面集控系统，对相关设备联动停机;
          </div>
          <div class="content-text">
            综采工作面设备维检修智能管理，基于综采工作面设备日常检修计划、异常状态智能识别结果，自动生成设备维检修工单并派发给对应维检修人员，实现设备维检修智能管理;
            实现综采工作面关键岗位标准化作业指引，作业过程中不安全行为的智能识别、自动报警、联动停机，
            并形成作业过程记录。
          </div>
          <div class="content-text">
            实现综采工作面关键岗位标准化作业指引，作业过程中不安全行为的智能识别、自动报警、联动停机，
            并形成作业过程记录。
          </div>
        </div>
      </app-content-layout>
    </div>
  </div>
</template>

<script>
const bannerImg = require("@/assets/images/company_service_banner.png");

export default {
  data() {
    return {
      bannerImg,
      functionList: [
        { name: "掘进工作面智能管控系统" },
        { name: "煤流运输智能管控系统" },
        { name: "综采工作面智能管控系统" }
      ],
      activeName: "掘进工作面智能管控系统"
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
        block: "nearest",
        inline: "center"
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
      window.open("http://111.53.212.59:28180/#/", "_blank");
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
    color: #fff;
    line-height: 36px;
  }
  .text {
    font-size: 16px;
    color: #d9dee8;
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
  margin-bottom: 69px;
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

.block {
  &.second {
    margin-top: 32px;
    margin-bottom: 112px;
  }
  &.third {
      padding-bottom: 125px;
  }
  .title {
    height: 30px;
    font-size: 30px;
    font-weight: bold;
    color: #303133;
    line-height: 30px;
    margin-bottom: 50px;
    img {
      width: 44px;
      margin-right: 16px;
      vertical-align: middle;
    }
  }
  .sub-title {
    height: 24px;
    font-size: 24px;
    font-weight: 500;
    color: #303133;
    line-height: 24px;
    .line {
      width: 20px;
      height: 6px;
      background: linear-gradient(90deg, #0dccff 0%, #4760ff 100%);
      border-radius: 3px;
      margin-top: 10px;
    }
  }
}

.two-part-box {
  display: flex;
  margin-top: 38px;
  .left,
  .right {
    width: 50%;
  }
  .left {
    padding-right: 40px;
    box-sizing: border-box;
  }
}

.content-text {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #303133;
  line-height: 48px;
  padding-right: 33px;
  box-sizing: border-box;
}

.img-two {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  img {
    width: calc(50% - 14px);
  }
}
.img-three {
  display: flex;
  justify-content: space-between;
  margin-bottom: 38px;
  margin-top: 46px;
  img {
    width: calc((100% - 68px) / 3);
  }
}

img {
  width: 100%;
}

.detail-box {
  margin-top: 40px;
  .detail-item {
    font-size: 24px;
    font-weight: bold;
    color: #303133;
    line-height: 30px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    .type {
      color: #3f85ed;
    }
  }
}
.content-box {
  padding-left: 68px;
}

.text2 {
  margin-top: 32px;
}

.two-line {
    margin-top: 47px;
}
</style>
