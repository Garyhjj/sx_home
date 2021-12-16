<template>
  <div class="platform-container">
    <app-banner-layout :img="bannerImg">
      <div class="message-box">
        <div class="title">生产经营信息管理平台</div>
        <div class="text">
          <div class="line">
            以全面、稳定的实时采集设备,紧密监管煤矿企业的数据,保证真实准确的产销,通过精准的AI分析
          </div>
          <div class="line">
            解决企业生产数据“上报不实、应统尽统”入库不全、“跑冒滴漏”企业税收漏洞等问题
          </div>
        </div>
        <el-button type="primary" round class="btn">立即进入</el-button>
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

    <div ref="block1" class="title whole">
      <app-content-layout>平台介绍</app-content-layout>
    </div>

    <div class="outer-content">
      <app-content-layout>
        <div class="block">
          <div class="inner-content">
            <div class="img-box">
              <img
                src="~@/assets/images/production_management_img1.png"
                alt=""
              />
            </div>
            <div class="text last">
              生产经营信息管理平台通过比对上报数据与采集数据，
              利用大数据分析技术，对多数据源进行差异化比对，
              利用采集数据的实时性和准确性，确保得到真实准确的产销存数据。
              平台通过采集煤矿的产量、销量、库存、煤种、煤价等数据，
              分区分类进行统计。根据煤种分类，统计不同煤种价格和销量，
              进一步预测不同煤种的价格。根据煤炭运输路线，分析出全省煤炭流向，
              分析出各地区的煤炭流向。根据煤矿的储量和生产能力，结合保供需求，
              为实现保供解决提供数据支撑
            </div>
          </div>
        </div>
        <div ref="block2" class="block">
          <div class="title">平台特点</div>
          <div class="inner-content">
            <div class="text">
              通过采集煤矿的内采数据，如产量监控数据、井下电力数据、磅房销售数据、
              视频数据，煤矿的外采数据，如煤矿用电数据、车辆GPS数据，采用内采数
              据和外采数据相结合，保证数据源的真实可靠，利用大数据分析技术和视频
              AI分析技术，采用神经网络算法和梯度提升树算法，对煤矿多元数据进行分
              析比对，结合上报数据，计算出煤矿各数据源之间的差异，最终分析出煤矿
              上报数据的真实性
            </div>
            <div class="img-box last">
              <img
                src="~@/assets/images/production_management_img2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div ref="block3" class="block">
          <div class="title">功能模块</div>
          <div class="list">
            <div v-for="item in menus" :key="item.name" class="item">
              <div class="type">{{ item.name }}</div>
              <div class="details">
                <div
                  v-for="sub in item.children"
                  :key="sub.name"
                  class="detail-item"
                >
                  {{ sub.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref="block4" class="block">
          <div class="title">核心优势</div>
          <div class="content">
            <img src="~@/assets/images/production_management_img3.png" alt="" />
            <div class="text-outter-box">
              <div class="line">
                既有省级信息化平台数据，向上接入国家级平台数据，
              </div>
              <div class="line">
                通过与煤炭交易、税收、物流、银行等服务平台数据共享，形成全省煤炭产、运、储、销全产业链数据池，
              </div>
              <div class="line">
                通过算法模型进行多维数据比对，有效整合分析全省煤炭企业物流、人流、资金流、信息流
              </div>
            </div>
          </div>
        </div>
      </app-content-layout>
    </div>
  </div>
</template>

<script>
const bannerImg = require("@/assets/images/production_management_banner.png");

export default {
  data() {
    return {
      bannerImg,
      functionList: [
        { name: "平台介绍" },
        { name: "平台特点" },
        { name: "功能模块" },
        { name: "核心优势" }
      ],
      activeName: "平台介绍",
      menus: [
        {
          name: "企业基本信息管理",
          children: [
            { name: "涉煤企业基本信息" },
            { name: "运输企业基本信息" },
            { name: "与征信系统对接" }
          ]
        },
        {
          name: "煤炭产量监测",
          children: [{ name: "井工矿井监测" }, { name: "露天矿井监测" }]
        },
        {
          name: "煤炭储备管理",
          children: [{ name: "库存信息预警" }, { name: "储备点检" }]
        },
        {
          name: "煤炭销售监测",
          children: [
            { name: "企业购销合同数据采集" },
            { name: "现场装运信息采集分析" },
            { name: "轨道衡计量信息采集" },
            { name: "统计分析" }
          ]
        },
        {
          name: "煤炭物流监测",
          children: [
            { name: "信息对接采集分析" },
            { name: "物流企业信用信息评价体系" }
          ]
        }
      ]
    };
  },
  mounted() {
    const fn = () => {
      const visibleIdx = this.functionList.findIndex((f, i) => this.isEleVisible(this.$refs["block" + (i + 1)])) || 1;
      this.activeName = this.functionList[visibleIdx - 1].name;
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
    isEleVisible(ele) {
      const { top, bottom } = ele.getBoundingClientRect();
      const h = window.innerHeight;
      const header = 95;
      const footer = 73;
      if (bottom < 0 || top > (h - footer) || top < header) {
        // y 轴方向
        return false;
      }
      return true;
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
    color: #303133;
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
  margin-bottom: 64px;
  &.whole {
    margin-bottom: 21px;
    margin-top: 74px;
  }
}
.outer-content {
  padding: 55px 0 98px 0;
  background: #f6faff;
  margin-bottom: 57px;
}
.block {
  .inner-content {
    display: flex;
    align-items: center;
  }

  &:not(:last-child) {
    margin-bottom: 77px;
  }
  .img-box {
    flex: 1;
    width: 50%;
    img {
      width: 100%;
    }
  }
  .text {
    width: 50%;
    font-size: 18px;
    color: #606266;
    line-height: 47px;
  }
  .last {
    padding-left: 40px;
    box-sizing: border-box;
  }
}
.list {
  .item {
    display: flex;
    align-items: center;
    height: 95px;
    width: 100%;
    background: url("~@/assets/images/function_bg.png") no-repeat;
    background-size: 100% 100%;
    &:not(:last-child) {
      margin-bottom: 19px;
    }
    .type {
      width: 23%;
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      color: #ffffff;
    }
    .details {
      display: flex;
      width: 77%;
      padding-left: 16px;
      box-sizing: border-box;
      .detail-item {
        width: 25%;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #303133;
        cursor: pointer;
      }
    }
  }
}
.content {
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
  .text-outter-box {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-left: 48px;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    line-height: 60px;
    text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.57);
  }
}
</style>
