<template>
  <app-content-layout>
    <div class="block">
      <div class="title">
        <img src="~@/assets/images/home_title1.png" alt="" />
      </div>

      <div class="content-box">
        <div class="left-box">
          <div class="tab-box">
            <div v-for="item in homeIntroduction" :key="item.name" class="tab-item" :class="{'is-active': currentTabName === item.name}"  @click="currentTabName = item.name">{{item.name}}</div>
          </div>
        </div>
        <div class="right-box">
            <div class="text-box">
                <div v-for="item in subContent" :key="item.name" class="text-item">
                    <div class="title">{{item.name}}</div>
                    <div class="text">
                        {{item.content}}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </app-content-layout>
</template>

<script>
import { homeIntroduction } from "@/config";
export default {
  data() {
    return {
      homeIntroduction,
      currentTabName: homeIntroduction[0].name
    };
  },
  computed: {
    subContent() {
      const target = this.homeIntroduction.find(i => i.name === this.currentTabName);
      return target ? target.children : [];
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  margin-top: 59px;
  .title {
    text-align: center;
  }

  .content-box {
      display: flex;
      width: 100%;
      height: 375px;
      margin-top: 40px;
      background: #F9F9F9;
      .left-box {
          width: 145px;
          height: 100%;
          padding: 0 20px;
          background: #FFF;
          box-shadow: 1px 0px 16px 0px rgba(0, 0, 0, 0.17);
          box-sizing: border-box;
      }
      .right-box {
        flex: 1;
        height: 100%;
        padding: 38px 0 45px 0;
        box-sizing: border-box;
        .text-box {
            display: flex;
            height: 100%;
            .text-item {
                height: 100%;
                width: 33.3%;
                padding: 0 20px;
                &:not(:last-child) {
                    border-right: 1px solid #E4E4E4;
                }
                .title {
                    font-size: 28px;
                    font-weight: 500;
                    color: #303133;
                    text-align: center;
                    margin-top: 16px;
                }
                .text {
                    font-size: 18px;
                    font-weight: 400;
                    color: #303133;
                    line-height: 36px;
                    margin-top: 51px;
                }
            }
        }
      }
      .tab-box {
          display: flex;
          flex-direction: column;
          height: 100%;
          .tab-item {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 33.3%;
            color: #303133;
            cursor: pointer;
            &.is-active {
                color: #3F85ED;
            }
            &:not(:last-child) {
                border-bottom: 1px dotted #E4E4E4;
            }
          }
      }
  }
}
</style>
