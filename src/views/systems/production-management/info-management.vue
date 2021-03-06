<template>
  <div class="platform-container">
    <app-banner-layout :img="bannerImg">
      <div class="message-box">
        <div class="title">生产经营信息采集系统</div>
        <div class="text">
          <div class="line">
            利用采集数据的实时性和准确性，得到真实准确的产、销、存数据
          </div>
          <div class="line">
            根据煤矿的储量和生产能力，结合保供需求，为煤炭保供提供数据支撑
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
              <img
                src="~@/assets/images/production_management_img1.png"
                alt=""
              />
            </div>
            <div class="text last">
              生产经营数据填报采集系统分为产销存统计分析、煤种煤价预测分析、煤炭保供分析决策和煤炭流向分析四部分。系统通过比对上报数据与采集数据，利用大数据分析技术，对多数据源进行差异化比对，利用采集数据的实时性和准确性，得到真实准确的产、销、存数据。系统通过采集煤矿的销量、库存、煤种、煤价等数据，分区分类进行统计。根据煤炭运输路线，分析全省煤炭流向，分析出各地区煤炭流向。根据煤矿的储量和生产能力，结合保供需求，为煤炭保供提供数据支撑。
            </div>
          </div>
        </div>
        <div ref="block2" class="block">
          <div class="title">平台特点</div>
          <div class="inner-content">
            <div class="text">
              系统采集煤矿的内采数据，如产量监控数据、井下电力数据、磅房销售数据、视频数据；采集煤矿的外采数据，如煤矿用电数据、车辆GPS数据。通过内采数据和外采数据相结合，保证数据源的真实可靠，利用大数据分析技术和视频AI分析技术，采用神经网络算法和梯度提升树算法，对煤矿多元数据进行分析比对，再结合上报数据，计算煤矿各数据源间的差异，分析煤矿上报数据的真实性。
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
              <div class="line">系统应用无人机和激光雷达技术监测露天煤矿销量数据，</div>
              <div class="line">采集井工煤矿企业的产量、电力、磅房、视频、车辆GPS等数据。</div>
              <div class="line">
                通过产量监控数据分析煤矿企业原毛煤折算系数、洗选折算系数；
              </div>
              <div class="line">
                利用车辆GPS轨迹信息分析全省煤炭流向；经多元数据比对分析全省产销存数据。
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
          name: "产销存数据汇总",
          children: [
            { name: "全省产销存汇总" },
            { name: "地市集团汇总" },
            { name: "企业上报情况" }
          ]
        },
        {
          name: "煤矿企业基本信息",
          children: [
            { name: "井工矿井" },
            { name: "露天煤矿" },
            { name: "生产建设" },
            { name: "用户信息" },
            { name: "煤矿煤层煤种" },
            { name: "销量煤种" }
          ]
        },
        {
          name: "产量监测",
          children: [
            { name: "产量监测" },
            { name: "电力监测" },
            { name: "磅单监测" },
            { name: "设备状态监测" },
            { name: "车辆GPS轨迹分析" }
          ]
        },
        {
          name: "数据分析",
          children: [
            { name: "数据报表" },
            { name: "零产和未上报原因" },
            { name: "多元数据平衡分析" },
            { name: "煤矿瞒报分析" }
          ]
        }
      ]
    };
  },
  mounted() {
    const fn = () => {
      let visibleIdx = this.functionList.findIndex((f, i) =>
        this.isEleTopVisible(this.$refs["block" + (i + 1)])
      );
      if (visibleIdx < 0) {
        visibleIdx = this.functionList.findIndex((f, i) =>
          this.isEleBottomVisible(this.$refs["block" + (i + 1)])
        );
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
        "http://111.53.212.59:28180/#/wait?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXIiOiJ2MS4wIiwiY29kZSI6IjE0IiwiY29tZW5hbWUiOiJsY2p0MiIsImlzcyI6ImNvYWwgc2FsZUBzeHlnc2oiLCJ1c2VydHlwZSI6IjQiLCJ1c2Vycm9sZSI6IjMiLCJ0eXBlIjoidG9rZW4iLCJhdWQiOiJodHRwczovL2FuYWx5c2lzLnN4eWdzai5jb20vY2FvbHNhbGUvYXBpIiwicGFzc3dvcmQiOiI2ODZiNGRjYWJhNTkyMWEwMTRkZDQwYzExOTI3MDRjMSIsIm5iZiI6MTYzOTcyMjk1OCwidXNlcmxldmVsIjoiMSIsInRlbCI6IjExMTExMTExMTEiLCJpZCI6ImEwNWE1MTMwZWQ5ZDQzNWY5YTkzNWJkZTNkOWMyMjIyIiwidXNlcm5hbWUiOiLmtarmva7pm4blm6IiLCJhbGFybWxldmVsIjoiMCJ9.WAOyKq-_kCDpuJ0yNdkt2TpqzodOTqIP0RJoWr_1SFQ",
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
