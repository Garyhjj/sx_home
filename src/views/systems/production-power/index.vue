<template>
  <div class="platform-container">
    <app-banner-layout :img="bannerImg">
      <div class="message-box">
        <div class="title">产业赋能</div>
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

    <div ref="block1" class="block first">
      <app-content-layout>
        <div class="title">方案描述</div>
        <div class="block-text">
          综合信息化平台：接入安全相关系统、信息化相关系统数据，融合综合自动化平台数据。通过对各子系统的综合集成、纵向贯通、横向关联、融合创新，形成企业的安全、生产、经营、管理的综合性管控平台。
          综合自动化平台：实现生产及生产辅助系统的接入、展示、控制、分析联动、数据转发等功能。实现在矿井调度指挥中心进行集中监控、集中调度指挥，并实现管控一体化。
        </div>
      </app-content-layout>
    </div>

    <div ref="block2" class="block second">
      <app-content-layout>
        <div class="title">方案优势</div>
        <div class="block-text">
          充分发掘和利用企业信息资源，以“一张图”为纽带高度集成各类系统
        </div>

        <div class="card-box">
          <div v-for="item in cardData1" :key="item.key" class="card-item">
            <div class="inner_card">
              <div class="name">{{ item.name }}</div>
              <div class="line"></div>
              <div class="card-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </app-content-layout>
    </div>

    <div ref="block3" class="block third">
      <app-content-layout>
        <div class="title">方案架构</div>
        <div class="block-text">
          技术架构
        </div>

        <div class="img-box">
          <img src="~@/assets/images/production_power_img1.png" alt="" />
        </div>
      </app-content-layout>
    </div>

    <div ref="block4" class="block fourth">
      <app-content-layout>
        <div class="title">业务场景</div>
        <div class="block-text">技术架构</div>

        <div class="card-box">
          <div v-for="item in cardData2" :key="item.key" class="card-item">
            <div class="inner_card card2">
              <div class="name2">{{ item.name }}</div>
              <img :src="item.img" alt="" />
              <div class="card-text2">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </app-content-layout>
    </div>
  </div>
</template>

<script>
const bannerImg = require("@/assets/images/production_power_banner.png");

export default {
  data() {
    return {
      bannerImg,
      functionList: [
        { name: "概览" },
        { name: "方案优势" },
        { name: "方案架构" },
        { name: "业务场景" }
      ],
      activeName: "概览",
      cardData1: [
        {
          name: "再造流程，管理创新",
          text: "借助信息化手段提高企业核心竞争力。以智能化矿井建设发展目标和管理转型目标为指导，进一步围绕安全生产、经营管理等核心业务开展流程优化再造，充分利用信息技术，实现煤矿的全面全程可控管理，减少管理层次，缩短反应时间，降低生产成本，提高管理效率，增强分析决策能力，提升企业核心竞争力。"
        },
        {
          name: "建立集成平台，打破信息孤岛",
          text: "建立信息资源的交换体系、共享体系和服务体系；通过对矿井综合信息化平台、综合自动化平台的建设，打通各业务系统，实现矿井各生产单位的数据集中、数据整合。"
        },
        {
          name: "形成决策支持依据",
          text: "利用大数据技术，为矿井领导和管理层科学决策、经营预测、风险管控、调度指挥提供数据支撑。建立数据中心，打造数据仓库，建立管理驾驶舱，提取财务、销售、采供、人资、生产、安全、质量分析等关键数据为煤业分公司及生产矿井领导提供决策应用依据。"
        }
      ],
      cardData2: [
        {
          name: "矿井全息“一张图”",
          text: "矿井全息“一张图”将自动化、监测监控、各专业业务管理等数据和信息，以空间位置为桥梁进行综合集成和融合，并以“一张图”的方式进行综合展示和分析，为矿井安全生产提供可视化查询、统计、分析和决策工具。",
          img: require("@/assets/images/production_power_img2.png")
        },
        {
          name: "系统集成融合与展示",
          text: "矿井全息“一张图”将自动化、监测监控、各专业业务管理等数据和信息，以空间位置为桥梁进行综合集成和融合，并以“一张图”的方式进行综合展示和分析，为矿井安全生产提供可视化查询、统计、分析和决策工具。",
          img: require("@/assets/images/production_power_img3.png")
        },
        {
          name: "业务协同管理",
          text: "业务协同管理包括地测防治水、采掘、生产调度、安全、一通三防、机电运输等各专业的业务进行协同管理，并对运营效能进行统一管理。",
          img: require("@/assets/images/production_power_img4.png")
        }
      ]
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
  &.first {
    padding-bottom: 90px;
    box-shadow: 2px 3px 8px -4px rgb(0 0 0 / 20%);
  }
  &.second {
    .title {
      margin-top: 40px;
      margin-bottom: 30px;
      text-indent: 0;
    }
    .block-text {
      width: 100%;
      text-align: center;
      text-indent: 0;
    }
  }
  &.third {
    margin-top: 85px;
    .block-text {
      width: 100%;
      text-align: center;
      text-indent: 0;
    }
  }
  &.fourth {
    margin-top: 153px;
    margin-bottom: 60px;
    .block-text {
      width: 100%;
      text-align: center;
      text-indent: 0;
    }
  }
  .title {
    height: 30px;
    font-size: 30px;
    color: #303133;
    text-align: center;
    line-height: 30px;
    margin-bottom: 51px;
  }
  .block-text {
    width: 868px;
    font-size: 18px;
    color: #606266;
    line-height: 47px;
    text-indent: 36px;
    margin: 0 auto;
  }
}

.card-box {
  display: flex;
  margin-top: 61px;
  .card-item {
    width: 33.3%;
    padding: 0 10px;
    box-sizing: border-box;
    .inner_card {
      height: 417px;
      box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.13);
      padding: 104px 35px 0 25px;
      box-sizing: border-box;
      &.card2 {
        padding: 35px 25px 0 25px;
        img {
            width: 100%;
        }
      }
      .name2 {
        height: 18px;
        font-size: 18px;
        font-weight: 400;
        color: #606266;
        line-height: 18px;
        text-align: center;
        margin-bottom: 12px;
      }
      .card-text2 {
        font-size: 14px;
        font-weight: 400;
        color: #606266;
        line-height: 24px;
        margin-top: 24px;
      }
      .name {
        height: 24px;
        font-size: 24px;
        font-weight: bold;
        color: #606266;
        line-height: 24px;
        text-align: center;
      }
      .card-text {
        font-size: 16px;
        color: #606266;
        line-height: 30px;
        margin-top: 26px;
      }
      .line {
        width: 40px;
        height: 4px;
        background: linear-gradient(30deg, #09bbfe 0%, #5a42ec 100%);
        border-radius: 2px;
        margin: 0 auto;
        margin-top: 8px;
      }
    }
  }
}

.img-box {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 38px 2px rgba(0, 0, 0, 0.13);
  padding: 45px 69px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 45px;
  img {
    width: 100%;
  }
}
</style>
