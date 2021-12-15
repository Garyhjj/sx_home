<template>
  <div class="service-container">
    <app-banner-layout :img="bg"> </app-banner-layout>

    <app-content-layout>
      <div class="content-box">
        <div class="block">
          <div class="top">
            <div class="title">
              <div class="text">资讯</div>
              <div class="line"></div>
            </div>
            <div class="switch-box">
              <span
                class="action"
                :class="{ enable: currentNewsIdx !== 0 }"
                @click="prevNews"
                ><i class="el-icon-arrow-left"></i
              ></span>
              <span
                class="action"
                :class="{ enable: currentNewsIdx !== newsList.length - 1 }"
                @click="nextNews"
                ><i class="el-icon-arrow-right"></i
              ></span>
            </div>
          </div>

          <el-carousel
            ref="newsView"
            height="420px"
            arrow="never"
            indicator-position="none"
            @change="handleCarouselChange"
          >
            <el-carousel-item v-for="(list, idx) in newsList" :key="idx">
              <div class="message-box">
                <div
                  v-for="(item, index) in list"
                  :key="index"
                  class="message-item"
                >
                  <div class="img-box">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="title">
                    {{ item.title }}
                  </div>

                  <div class="text">{{ item.text }}</div>

                  <div class="btn">了解详情</div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="block">
          <div class="top">
            <div class="title">
              <div class="text">特色服务</div>
              <div class="line"></div>
            </div>
          </div>
          <div class="list">
            <div class="list-item">
              <div class="img-box">
                <img src="~@/assets/images/dev_img1.png" alt="" />
              </div>
              <div class="detail-box">
                <div class="detail-title">核心</div>
                <div class="detail-text">
                  提供端、云开放能力，帮助开发者实现应用高效开发、快速增长、商业变现，使能开发者创新，为全球用户提供精品内容、服务及体验。
                </div>
              </div>
            </div>
            <div class="list-item">
              <div class="detail-box left">
                <div class="detail-title">智能</div>
                <div class="detail-text">
                  为不同设备的智能化、互联与协同提供了统一的语言。带来简洁，流畅，连续，安全可靠的全场景交互体验。
                </div>
              </div>
              <div class="img-box">
                <img src="~@/assets/images/dev_img2.png" alt="" />
              </div>
            </div>
            <div class="list-item">
              <div class="img-box">
                <img src="~@/assets/images/dev_img3.png" alt="" />
              </div>
              <div class="detail-box">
                <div class="detail-title">企业</div>
                <div class="detail-text">
                  聚合终端多媒体平台，为开发者提供更精准、更高效的分发服务，真正做到一次接入全场景分发，为企业提供更便捷的服务。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="block">
          <div class="top">
            <div class="title">
              <div class="text">行业解决方案</div>
              <div class="line"></div>
            </div>
            <div class="switch-box">
              <span
                class="action"
                :class="{ enable: currentNewsIdx !== 0 }"
                @click="prevNews"
                ><i class="el-icon-arrow-left"></i
              ></span>
              <span
                class="action"
                :class="{ enable: currentNewsIdx !== newsList.length - 1 }"
                @click="nextNews"
                ><i class="el-icon-arrow-right"></i
              ></span>
            </div>
          </div>

          <el-carousel
            ref="newsView"
            height="420px"
            arrow="never"
            indicator-position="none"
            @change="handleCarouselChange"
          >
            <el-carousel-item v-for="(list, idx) in newsList" :key="idx">
              <div class="message-box">
                <div
                  v-for="(item, index) in list"
                  :key="index"
                  class="message-item"
                >
                  <div class="img-box">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="title">
                    {{ item.title }}
                  </div>

                  <div class="text">{{ item.text }}</div>

                  <div class="btn">了解详情</div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </app-content-layout>
  </div>
</template>

<script>
const bg = require("@/assets/images/dev_service_banner.png");

export default {
  data() {
    return {
      bg,
      newsList: [
        [
          {
            img: require("@/assets/images/dev_news1.png"),
            title: "涵盖行业热门技术，紧跟移动应用开发趋势",
            text: "面向院校学生开展应用创新大赛，提供专业技术指导、系列交流活动、应用流量扶持及种子基金奖励，赋能并激励校园极客智慧创新，培养新一代创新人才"
          },
          {
            img: require("@/assets/images/dev_news2.png"),
            title: "涵盖行业热门技术，紧跟移动应用开发趋势",
            text: "面向院校学生开展应用创新大赛，提供专业技术指导、系列交流活动、应用流量扶持及种子基金奖励，赋能并激励校园极客智慧创新，培养新一代创新人才"
          },
          {
            img: require("@/assets/images/dev_news3.png"),
            title: "涵盖行业热门技术，紧跟移动应用开发趋势",
            text: "面向院校学生开展应用创新大赛，提供专业技术指导、系列交流活动、应用流量扶持及种子基金奖励，赋能并激励校园极客智慧创新，培养新一代创新人才"
          }
        ],
        [
          {
            img: require("@/assets/images/dev_news1.png"),
            title: "涵盖行业热门技术，紧跟移动应用开发趋势2",
            text: "面向院校学生开展应用创新大赛，提供专业技术指导、系列交流活动、应用流量扶持及种子基金奖励，赋能并激励校园极客智慧创新，培养新一代创新人才"
          },
          {
            img: require("@/assets/images/dev_news2.png"),
            title: "涵盖行业热门技术，紧跟移动应用开发趋势2",
            text: "面向院校学生开展应用创新大赛，提供专业技术指导、系列交流活动、应用流量扶持及种子基金奖励，赋能并激励校园极客智慧创新，培养新一代创新人才"
          },
          {
            img: require("@/assets/images/dev_news3.png"),
            title: "涵盖行业热门技术，紧跟移动应用开发趋势2",
            text: "面向院校学生开展应用创新大赛，提供专业技术指导、系列交流活动、应用流量扶持及种子基金奖励，赋能并激励校园极客智慧创新，培养新一代创新人才"
          }
        ]
      ],
      currentNewsIdx: 0
    };
  },
  methods: {
    handleCarouselChange(idx) {
      this.currentNewsIdx = idx;
    },
    nextNews() {
      if (this.currentNewsIdx === this.newsList - 1) {
        return;
      }
      this.$refs.newsView.next();
    },
    prevNews() {
      if (this.currentTableIndex === 0) {
        return;
      }
      this.$refs.newsView.prev();
    }
  }
};
</script>

<style lang="scss" scoped>
.content-box {
  padding-bottom: 88px;
  margin-bottom: 70px;
  border-bottom: 1px solid #e4e7ed;
}
.block {
  margin-top: 48px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
  }
  .title {
    .text {
      font-size: 36px;
      color: #303133;
      line-height: 36px;
    }
    .line {
      width: 58px;
      height: 2px;
      background: #318fee;
      margin-top: 15px;
    }
  }
  .switch-box {
    display: flex;
    .action {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      font-size: 24px;
      color: #fff;
      border-radius: 40px;
      background: #318fee;
      opacity: 0.21;
      margin-left: 13px;
      cursor: not-allowed;
      &.enable {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
}

.message-box {
  display: flex;
  justify-content: space-between;
  .message-item {
    width: calc((100% - 50px) / 3);
  }
  .img-box {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .title {
    height: 16px;
    font-size: 16px;
    font-weight: bold;
    color: #303133;
    line-height: 16px;
    margin-top: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text {
    font-size: 14px;
    color: #303133;
    line-height: 24px;
    margin: 21px 0 23px 0;
  }
  .btn {
    width: 111px;
    height: 41px;
    background: linear-gradient(-45deg, #46aef7 0%, #1dd5e6 100%);
    border-radius: 21px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    line-height: 41px;
    text-align: center;
    cursor: pointer;
  }
}

.list {
  padding-left: 63px;
  box-sizing: border-box;
  .list-item {
    display: flex;
    .img-box {
      width: 36%;
      img {
        width: 100%;
      }
    }
    .detail-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 13%;
      &.left {
        padding-left: 10%;
        padding-right: 10%;
      }
      .detail-title {
        font-size: 48px;
        font-weight: bold;
        color: #3f85ed;
        line-height: 48px;
        margin-bottom: 42px;
      }
      .detail-text {
        font-size: 18px;
        color: #303133;
        line-height: 36px;
      }
    }
  }
}
</style>
