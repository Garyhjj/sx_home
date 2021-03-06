<template>
  <div class="platform-container">
    <app-banner-layout :img="bannerImg">
      <div class="message-box">
        <div class="title">产供储销监测与管理系统</div>
        <div class="text">
          <div class="line">
            以先进、可靠的实时采集设备，紧密监测涉煤企业的生产经营数据
          </div>
          <div class="line">
            形成全省煤炭行业产、运、储、销全产业链数据资源池，为多维度分析提供数据基础
          </div>
        </div>
        <el-button type="primary" disabled round class="btn" @click="goToSystem">立即进入</el-button>
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
              产供储销监测与管理系统分为企业基本信息管理、煤炭产量监测、煤炭储备管理、煤炭销售监测和煤炭物流监测五部分。系统通过采集涉煤企业的计量、物料识别、车辆、购销数据、运销等数据分区分类进行统计。利用采集数据的实时性和准确性，得到真实准确的产、运、储、销数据。根据煤炭运输车辆轨迹，分析山西省销往全国各地煤炭流向。形成全省煤炭行业数据资源池。
            </div>
          </div>
        </div>
        <div ref="block2" class="block">
          <div class="title">平台特点</div>
          <div class="inner-content">
            <div class="text">
              系统实时采集涉煤企业的生产经营数据，如计量数据、用电电力数据、计量数据、视频数据、购销数据、运销数据；通过向上接入国家级平台的煤炭数据和车辆GPS轨迹数据。通过生产经营数据和接入国家平台的数据相结合，保证数据源的真实可靠，利用大数据分析技术和视频AI分析技术，对涉煤企业多元数据进行分析比对，计算各数据源间的差异，最后形成全省煤炭行业大数据资源池，为多维度数据分析提供支撑。
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
                纵向接入国家级平台煤炭行业数据，
              </div>
              <div class="line">
                横向接入省级政务平台统计数据，整合既有省级煤炭信息化平台数据，
              </div>
              <div class="line">
                向下采集煤炭企业基础数据，形成全省煤炭行业产、运、储、销全产业链数据池。
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
            { name: "企业信用评估" }
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
      window.open("http://111.53.212.59:28180/#/wait?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXIiOiJ2MS4wIiwiY29kZSI6IjE0IiwiY29tZW5hbWUiOiJsY2p0MiIsImlzcyI6ImNvYWwgc2FsZUBzeHlnc2oiLCJ1c2VydHlwZSI6IjQiLCJ1c2Vycm9sZSI6IjMiLCJ0eXBlIjoidG9rZW4iLCJhdWQiOiJodHRwczovL2FuYWx5c2lzLnN4eWdzai5jb20vY2FvbHNhbGUvYXBpIiwicGFzc3dvcmQiOiI2ODZiNGRjYWJhNTkyMWEwMTRkZDQwYzExOTI3MDRjMSIsIm5iZiI6MTYzOTcyMjk1OCwidXNlcmxldmVsIjoiMSIsInRlbCI6IjExMTExMTExMTEiLCJpZCI6ImEwNWE1MTMwZWQ5ZDQzNWY5YTkzNWJkZTNkOWMyMjIyIiwidXNlcm5hbWUiOiLmtarmva7pm4blm6IiLCJhbGFybWxldmVsIjoiMCJ9.WAOyKq-_kCDpuJ0yNdkt2TpqzodOTqIP0RJoWr_1SFQ", "_blank");
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
