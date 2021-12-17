<template>
  <div class="policy-container">
    <app-banner-layout :img="bg">
      <div class="message-box">
        <div class="title">文档中心</div>
        <div class="line"></div>
      </div>
    </app-banner-layout>
    <app-content-layout>
      <div class="breadcrumb-box">
        <div class="breadcrumb-content">
          <span class="start">您的位置：</span>
          <span class="middle">首页 > </span>
          <span class="last">文档中心</span>
        </div>
      </div>

      <div class="content-box">
        <div class="type-box">
          <div
            v-for="item in types"
            :key="item.name"
            class="type-item"
            :class="{ 'is-active': item.name === currentType }"
            @click="handleTypeChange(item)"
          >
            {{ item.name }}
            <span class="icon"><i class="el-icon-arrow-right" /></span>
          </div>
        </div>
        <div class="list">
          <div class="more">若需了解更多平台信息,请联系云时代</div>
        </div>
      </div>
    </app-content-layout>
  </div>
</template>

<script>
const bg = require("@/assets/images/doc_banner.png");

export default {
  data() {
    return {
      bg,
      types: [{ name: "文档中心" }, { name: "法律条文" }],
      currentType: "文档中心"
    };
  },
  created() {},
  methods: {
    handleTypeChange({ name }) {
      if (this.currentType !== name) {
        this.currentType = name;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.policy-container {
  min-height: calc(100vh - 168px);
}
.message-box {
  .title {
    font-size: 43px;
    font-weight: bold;
    color: #318fee;
    line-height: 77px;
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
  display: flex;
  padding: 36px 0 80px 0;
  border-bottom: 1px solid #e4e7ed;
  margin-bottom: 36px;
  .type-box {
    width: 300px;
    padding-left: 8px;
    box-sizing: border-box;
    border-right: 1px solid #e4e7ed;
    .type-item {
      height: 18px;
      font-size: 18px;
      color: #303133;
      line-height: 18px;
      margin-bottom: 39px;
      cursor: pointer;
      &.is-active {
        color: #3f85ed;
      }
      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 12px;
        width: 12px;
        font-size: 4px;
        color: #fff;
        border-radius: 12px;
        background: #318fee;
        margin-left: 15px;
        vertical-align: middle;
        i {
          transform: scale(0.7);
        }
      }
    }
  }
}

.list {
  width: 70%;
  padding-left: 55px;
  box-sizing: border-box;
  .more {
    height: 20px;
    font-size: 18px;
    color: #bebebe;
    line-height: 47px;
  }
}
</style>
