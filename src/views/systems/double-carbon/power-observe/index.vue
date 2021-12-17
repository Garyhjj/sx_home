<template>
  <div class="platform-container">
    <app-banner-layout :img="bannerImg">
      <div class="message-box">
        <div class="title">能耗在线监测系统</div>
        <div class="text">
          <div class="line">
            以全面、稳定的实时采集设备,紧密监管煤矿企业的数据,保证真实准确的产销,通过精准的AI分析
          </div>
          <div class="line">
            解决企业生产数据“上报不实、应统尽统”入库不全、“跑冒滴漏”企业税收漏洞等问题
          </div>
        </div>
        <el-button type="primary" round class="btn" @click="goToSystem">立即进入</el-button
        >
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
              <img src="~@/assets/images/power_observe_img1.png" alt="" />
            </div>
            <div class="text">
              能耗在线监测系统按省、市（县）、企业三级架构进行规划建设，涵盖全省重点用能企业，依托山西省大数据中心建设。省级能耗在线监测系统包含能耗监测、能效分析、节能管理、在线数据质量管理功能等模块。能耗监测提供对重点用能单位的能耗数据进行采集、监测和统计分析功能；能效分析提供从宏观监测、地区、行业及产品的角度进行能效的统计分析功能；节能管理支撑节能管理工作，具备总量及强度控制、节能业务管理、节能标准法规等模块；在线数据质量管理功能用于对上传数据质量监督保证，用可视化手段实时监视上报数据的质量。省级能耗在线监测系统除汇聚各地市重点用能单位的数据，还具备与国家平台对接的能力。
            </div>
            <div class="text last">
              本系统建设的初衷是为政府提升能耗监管信息化能力，为企业能源管理提供数据支撑。为政府部门做好能源战略规划、开展能源消费强度与总量的“双控”形势分析、实施节能监察、加强能源计量管理、制定节能标准等提供及时准确的数据支持。为企业加强能源日常监控管理、开展能源审计、能源对标、能源计量审查、节能改造等提供技术支撑。
            </div>
            <div class="img-box">
              <img src="~@/assets/images/power_observe_img2.png" alt="" />
            </div>
          </div>
        </div>
        <div ref="block2" class="block">
          <div class="title">平台特点</div>
          <div class="inner-content">
            <div class="text">
              规范性：企业端能耗数据的采集和上传完全满足《重点用能单位能耗在线监测系统技术规范》的要求；
            </div>
            <div class="text">
              安全性：能耗在线监测系统属于区域性公共服务平台，满足不低于国家信息安全等级保护三级的要求，可为相关部门提供数据接口，实现信息共享。接受并处理本区域内重点用能单位上传的数据，同时与国家平台进行对接；
            </div>
            <div class="text">
              扩展性：第一阶段实现主要用能品种（煤炭、电力、天然气、热力、油、水等）的一级（关口）能源数据的在线采集；系统预留接入二级、三级能耗数据接口，后续分阶段实施二、三能耗数据接入；
            </div>
            <div class="text">
              安全性：能耗在线监测系统属于区域性公共服务平台，满足不低于国家信息安全等级保护三级的要求，可为相关部门提供数据接口，实现信息共享。接受并处理本区域内重点用能单位上传的数据，同时与国家平台进行对接；
            </div>
            <div class="text">
              统一性：实现全省统一、分级管理的能耗数据报送，与双碳管理系统连接，实现数据共享。
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
      const visibleIdx =
        this.functionList.findIndex((f, i) =>
          this.isEleVisible(this.$refs["block" + (i + 1)])
        ) || 0;
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
    isEleVisible(ele) {
      const { top, bottom } = ele.getBoundingClientRect();
      const h = window.innerHeight;
      const footer = 73;
      if (bottom < 0 || top > h - footer) {
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
    color: #318FEE;
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
    .img-box {
      text-align: center;
      margin-bottom: 40px;
      img {
        width: 80%;
      }
    }
  }
  .text {
    font-size: 18px;
    color: #606266;
    line-height: 47px;
    text-indent: 36px;
    &.last {
        margin-bottom: 62px;
    }
  }
}
</style>
