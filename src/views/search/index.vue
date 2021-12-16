<template>
  <div class="platform-container">
    <app-banner-layout :img="bannerImg">
      <div class="message-box">
        <el-input placeholder="请输入内容" v-model="searchText">
          <el-button slot="append" class="btn">搜索</el-button>
        </el-input>
      </div>
    </app-banner-layout>
    <div class="tabs-box">
      <app-content-layout>
        <div
          v-for="(item) in functionList"
          :key="item.name"
          class="tab-box"
          :class="{ 'is-active': activeName === item.name }"
          @click="activeName = item.name"
        >
          <div class="text">{{ item.name }}</div>
        </div>
      </app-content-layout>
    </div>

    <div class="outer-content">
      <app-content-layout>
        <div class="result-box">
          <div class="result-list">
            <div class="no-data">
              抱歉，没有找到您期望的内容，请尝试其他搜索词
            </div>
          </div>
          <div class="sider">
            <span class="relative">相关内容</span>
          </div>
        </div>
      </app-content-layout>
    </div>
  </div>
</template>

<script>
const bannerImg = require("@/assets/images/search_banner.png");

export default {
  data() {
    return {
      bannerImg,
      searchText: "",
      functionList: [
        { name: "全部" },
        { name: "公告" },
        { name: "政策" },
        { name: "法规" },
        { name: "动态" },
        { name: "文档中心" }
      ],
      activeName: "全部"
    };
  },
  watch: {
    $route() {
      this.searchText = this.$route.query.text;
    }
  },
  mounted() {
    this.searchText = this.$route.query.text;
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.platform-container {
  min-height: calc(100vh - 168px);
}
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
  width: 500px;
  .btn {
    color: #fff;
    background: #3f85ed;
    border-radius: 0;
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
  &.is-active {
    font-weight: 500;
  }
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
.result-box {
  display: flex;
  margin-top: 59px;
  .result-list {
    width: 70%;
    padding: 10px 60px 60px 8px;
    box-sizing: border-box;
    border-right: 1px solid #e4e7ed;
    .no-data {
      height: 23px;
      font-size: 24px;
      color: #606266;
      line-height: 36px;
      margin-top: 60px;
    }
  }
  .sider {
    width: 30%;
    padding: 16px 24px;
    box-sizing: border-box;
    .relative {
      height: 17px;
      font-size: 18px;
      font-family: Source Han Sans CN;
      color: #3f85ed;
      line-height: 47px;
      cursor: pointer;
    }
  }
}
</style>
