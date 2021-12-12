<template>
  <app-content-layout>
    <div class="news-block">
      <div class="news-container">
        <div v-for="item in news" :key="item.name" class="news-item">
          <div class="top">
            <div class="title">
              {{ item.name }}
              <div class="line"></div>
            </div>
            <div class="more">更多</div>
          </div>
          <div class="list">
            <div
              v-for="(article, idx) in item.list"
              :key="idx"
              class="list-item"
            >
              <div class="title">{{ article.title }}</div>
              <div class="time">{{ article.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-content-layout>
</template>

<script>
const newsTypes = ["政策法规", "通知公告", "企业动态", "标准规范"];
const mockNews = () => {
  return newsTypes.map((name) => {
    let max = 5;
    const list = [];
    const n = {
      title: "关于发布2021年度全省电力市场售电公司信用评价和相关应急处理事项",
      time: "2021-12-11 09:40"
    };
    while (max--) {
      list.push({ ...n });
    }
    return {
      name,
      list
    };
  });
};
export default {
  data() {
    return {
      news: mockNews()
    };
  }
};
</script>

<style lang="scss" scoped>
.news-block {
  margin-top: 66px;
  .news-container {
    display: flex;
    flex-wrap: wrap;
    .news-item {
      width: 50%;
      padding-bottom: 60px;
      box-sizing: border-box;
      &:nth-child(odd) {
        padding-right: 40px;
      }
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 44px;
      .title {
        font-size: 24px;
        font-weight: 500;
        color: #333333;
        line-height: 24px;
        .line {
          width: 21px;
          height: 2px;
          background: #3f85ed;
          margin-top: 12px;
        }
      }
      .more {
        height: 16px;
        font-size: 16px;
        color: #999999;
        line-height: 16px;
        cursor: pointer;
      }
    }
    .list {
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
          white-space:nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .time {
          font-size: 16px;
          color: #606266;
          line-height: 16px;
          white-space:nowrap
        }
      }
    }
  }
}
</style>
