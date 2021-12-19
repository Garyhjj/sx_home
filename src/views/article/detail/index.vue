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
          <span class="last">{{ type }}</span>
        </div>
      </div>

      <div v-if="article" class="content-box">
        <div class="title">
          {{ article.title }}
        </div>

        <div class="tip">
          <div>来源: {{article.from}}</div>
          <div>发布时间: {{article.time}}</div>
        </div>
        <div class="content-text" v-html="article.content">
          <p>
            “冬春两季是能源消费高峰，煤炭需求还将在目前较高水平的基础上进一步增加。”国家能源局新闻发言人今日在四季度网上新闻发布会上表示，下一步，国家能源局将统筹增产保供和安全环保，紧盯煤炭生产，积极协调稳产增产过程中的突出问题，有效增加煤炭生产能力，确保经济社会平稳运行，确保能源安全保供，确保人民群众温暖过冬。
          </p>
          <p></p>
          <p>
            “国家能源局以保证今冬明春煤炭供应为目标，以煤炭增产为导向，积极会同有关部门、重点产煤省区细化措施，全力以赴做好煤炭增产保供，保障人民群众温暖过冬。”该新闻发言人介绍，通过采取释放先进产能、现场督导、消除限产措施、压紧压实责任、强化产量调度等措施，煤炭产量取得了较为显著的增长。
          </p>
          <p></p>
          <p>
            数据显示，10月1日至28日，据调度数据，煤炭日均产量1120万吨，比9月份日均增加80万吨，近日日均产量1140万吨左右。从重点产煤地区看，晋陕蒙日均煤炭产量超过830万吨，占全国煤炭产量的75%，对产量增长的贡献率达100%左右，充分发挥了大省大矿的作用。
          </p>
          <p></p>
          <p>
            该新闻发言人表示，下一步，国家能源局将紧抓煤炭增产增供。加强分类指导和政策协同，及时跟踪了解已出台政策落地落实情况，对不适应的实时作出调整。重点保证产煤大省和安全有保障的大矿满产稳产，帮助产能利用率较低、仍有增产潜力的省区解决好实际困难，进一步提高产能利用率，推动全国煤炭产量稳定在较高水平，实现安全增产增供。
          </p>
          <p></p>
          <p>
            同时，优化煤炭供应。密切关注迎峰度冬煤炭供需态势，总体上做到紧而有序、形势可控。突出抓好东北等重点地区煤炭保供，在资源、运力上予以优先安排并紧盯落实，坚决保障好民生用煤需求。
          </p>
          <p></p>
          <p>
            此外，做好通盘统筹考虑。按照充分发挥煤炭主体能源作用的原则，实施好煤炭“十四五”规划，坚持系统观念，持续深化供给侧结构性改革，坚持“上大压小、增优汰劣”，全面提升煤矿安全生产、绿色生产素质，把煤炭兜底保障作用进一步落到实处。&nbsp;（记者杜燕飞）
          </p>
        </div>
      </div>
    </app-content-layout>
  </div>
</template>

<script>
const bg = require("@/assets/images/policy_banner.png");
import { infoList, companyList, standardList } from "../mock";

export default {
  data() {
    return {
      bg,
      article: null,
      type: ""
    };
  },
  created() {
    const { query } = this.$route;
    const id = +query.id || 1;
    this.type = query.type || "政策法规";
    let list;
    switch (this.type) {
      case "通知公告":
        list = infoList;
        break;
      case "企业动态":
        list = companyList;
        break;
      case "标准规范":
        list = standardList;
        break;
    }
    this.article = list.find(p => p.id === id);
  },
  methods: {}
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
  padding-bottom: 60px;
  color: #595959;
  line-height: 30px;
  margin: 24px 0;
}

.content-box .title {
  color: #303133;
  font-size: 24px;
  text-align: center;
  width: 80%;
  margin: 24px auto;
}

.content-box .tip {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  font-size: 12px;
  color: #595959;
}
</style>
