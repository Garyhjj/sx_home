<template>
  <div class="contact-container">
    <app-banner-layout :img="bg">
      <div class="message-box">
        <div class="title">{{name}}</div>
        <div class="line"></div>
      </div>
    </app-banner-layout>
    <app-content-layout>
      <div class="breadcrumb-box">
        <div class="breadcrumb-content">
          <span class="start">您的位置：</span>
          <span class="middle">首页 > </span>
          <span class="last">{{name}}</span>
        </div>
      </div>

      <div class="content-box">
        <div class="title">
          <img src="~@/assets/images/platform_production_title.png" alt="" />
        </div>

        <div class="list">
          <div v-for="item in list" :key="item.name" class="list-item">
            <div class="inner-box">
              <div class="title">{{ item.name }}</div>
              <div class="description">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-content-layout>
  </div>
</template>

<script>
const bg = require("@/assets/images/platform_banner.png");
import { produceMenus } from "@/config";

export default {
  data() {
    return {
      bg,
      list: [],
      name: ""
    };
  },
  created() {
    const name = this.name = this.$route.query.name || produceMenus[0].name;
    const target = produceMenus.find((p) => p.name === name);
    this.list = target ? target.children : produceMenus[0].children;
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
  margin-bottom: 70px;
  > .title {
    text-align: center;
    margin-bottom: 49px;
  }
}

.list {
  display: flex;
  flex-wrap: wrap;
  .list-item {
    width: 33.3%;
    height: 176px;
    padding: 0 12.5px;
    margin-bottom: 18px;
    box-sizing: border-box;
    background: #ffffff;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-8px);
    }
    .inner-box {
      height: 100%;
      padding: 0 27px;
      border: 1px solid #e4e7ed;
      .title {
        height: 24px;
        font-size: 24px;
        color: #303133;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 24px;
        margin-top: 46px;
      }
      .description {
        font-size: 16px;
        color: #909399;
        line-height: 20px;
        margin-top: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
