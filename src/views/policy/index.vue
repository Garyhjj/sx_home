<template>
  <div class="policy-container">
    <app-banner-layout :img="bg">
      <div class="message-box">
        <div class="title">
          <div>全面公开煤炭政策</div>
          <div>依法落实行业法规</div>
        </div>
        <div class="line"></div>
      </div>
    </app-banner-layout>
    <app-content-layout>
      <div class="breadcrumb-box">
        <div class="breadcrumb-content">
          <span class="start">您的位置：</span>
          <span class="middle">首页 > </span>
          <span class="last">政策法规</span>
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
            <span class="icon"><i class="el-icon-arrow-right" /></span>
            {{ item.name }}
          </div>
        </div>
        <div class="list">
          <div v-for="(article, idx) in list" :key="idx" class="list-item">
            <div class="title">{{ article.title }}</div>
            <div class="time">{{ article.time }}</div>
          </div>

          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="size"
            layout="->, total, prev, pager, next, jumper"
            :total="total"
            class="pagination"
          >
          </el-pagination>
        </div>
      </div>
    </app-content-layout>
  </div>
</template>

<script>
const bg = require("@/assets/images/policy_banner.png");

export default {
  data() {
    return {
      bg,
      types: [
        { name: "国家法律法规" },
        { name: "地方性法规" },
        { name: "政府规章" },
        { name: "地方性政策" }
      ],
      currentType: "国家法律法规",
      currentPage: 1,
      size: 10,
      total: 0,
      list: []
    };
  },
  created() {
    this.getList({ page: 0 });
  },
  methods: {
    handleTypeChange({ name }) {
      if (this.currentType !== name) {
        this.currentType = name;
        this.currentPage = 1;
        this.getList({ page: this.currentPage - 1 });
      }
    },
    getList(params) {
      const mockNews = {
        title: "国家煤矿安监局国家能源局关于印发《煤矿瓦斯等级鉴定办法》的通知",
        time: "2018-05-14 09:40"
      };
      const list = [];
      let max = this.size;
      while (max--) {
        list.push({ ...mockNews });
      }
      this.list = list;
      this.total = 40;
    },
    handleCurrentChange(current) {
      this.currentPage = current;
      this.getList({ page: current - 1 });
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
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 27px;
    }
    .title {
      font-size: 18px;
      color: #303133;
      padding-right: 22px;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &::before {
        content: " ";
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #3f85ed;
        margin-right: 12px;
        vertical-align: middle;
      }
    }
    .time {
      font-size: 16px;
      color: #909399;
      line-height: 16px;
      white-space: nowrap;
    }
  }
}
.pagination {
    margin-top: 64px;
}
</style>
