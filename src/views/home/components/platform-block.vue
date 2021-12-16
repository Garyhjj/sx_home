<template>
    <div class="block">
      <div class="title">
        <img src="~@/assets/images/home_title2.png" alt="" />
      </div>

      <div class="content-box">
            <app-content-layout>
                <div class="list">
                    <div v-for="item in produceMenus" :key="item.name" class="line">
                        <div class="type-box"  @click="goToPlatform(item)">
                            <div class="type-content">
                                <div class="inner-content">
                                    <div class="name">
                                        {{item.name}} <span class="icon"><i class="el-icon-arrow-right" /></span>
                                    </div>
                                    <div class="more">查看更多</div>
                                </div>
                            </div>
                            <div class="type-bg"></div>
                        </div>
                        <div class="sub-list">
                            <div v-for="sub in item.children.slice(0,3)" :key="sub.name" :class="{disabled: !sub.routeName}" class="item" @click="goToDetail(sub)">
                                <div class="title">{{sub.name}}</div>
                                <div class="text">{{sub.description}}</div>
                                <div class="check">查看详情</div>
                            </div>
                        </div>
                    </div>
                </div>

            </app-content-layout>
      </div>
    </div>
</template>

<script>
import { produceMenus } from "@/config";

export default {
  data() {
    return {
      produceMenus
    };
  },
  methods: {
    goToPlatform(item) {
      const routeUrl = this.$router.resolve({ name: "productionManagement", query: {
        name: item.name
      }});
      window.open(routeUrl.href, "_blank");
    },
    goToDetail({ routeName }) {
      if (!routeName) return;
      const routeUrl = this.$router.resolve({ name: routeName });
      window.open(routeUrl.href, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  margin-top: 59px;
  > .title {
    text-align: center;
  }
}
.content-box {
    width: 100%;
    height: 844px;
    margin-top: 40px;
    padding: 30px 0;
    background: rgba(#3F85ED, 0.25);
    .list {
        .line {
            display: flex;
            height: 140px;
            width: 100%;
            background: #FFF;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
            &:hover {
                .type-box {
                    .type-content {
                        .inner-content {
                            margin-top: 25px;
                        }
                        .more {
                            opacity: 1;
                        }
                    }
                }
            }
            &:nth-child(2) {
                .type-box .type-bg {
                    background: url("~@/assets/images/platform_name_bg2.png") no-repeat;
                }
            }
            &:nth-child(3) {
                .type-box .type-bg {
                    background: url("~@/assets/images/platform_name_bg3.png") no-repeat;
                }
            }
            &:nth-child(4) {
                .type-box .type-bg {
                    background: url("~@/assets/images/platform_name_bg4.png") no-repeat;
                }
            }
            &:nth-child(5) {
                .type-box .type-bg {
                    background: url("~@/assets/images/platform_name_bg5.png") no-repeat;
                }
            }
            .type-box {
                position: relative;
                width: 230px;
                background: #FFF;
                .type-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url("~@/assets/images/platform_name_bg1.png") no-repeat;
                    background-size: 100% 100%;
                    opacity: 1;
                }
                .type-content{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    cursor: pointer;
                    &:hover {
                        .inner-content {
                            margin-top: 25px;
                        }
                        .more {
                            opacity: 1;
                        }
                        .name {
                            color: #3F85ED;
                        }
                    }
                    .inner-content {
                        margin-top: 56px;
                        transition: all 0.3s;
                    }
                    .name {
                        height: 20px;
                        line-height: 20px;
                        font-size: 18px;
                        margin-left: 22px;
                        .icon {
                            display: inline-block;
                            height: 20px;
                            width: 20px;
                            border: 1px solid #3F85ED;
                            border-radius: 20px;
                            box-sizing: border-box;
                            vertical-align: top;
                            .el-icon-arrow-right {
                                color: #3F85ED;
                                font-weight: 500;
                                transform: translate(1px, -1px);
                            }
                        }
                    }
                    .more {
                        width: 100px;
                        height: 23px;
                        background: #1F58AE;
                        font-size: 14px;
                        color: #FFFFFF;
                        text-align: center;
                        line-height: 23px;
                        margin-top: 14px;
                        margin-left: 22px;
                        opacity: 0;
                        transition: all 0.3s;
                    }
                }
            }
            .sub-list {
                flex: 1;
                display: flex;
                width: calc(100% - 230px);
                .item {
                    position: relative;
                    width: 33.3%;
                    padding-left: 26px;
                    background-color: rgb(249, 252, 255);
                    cursor: pointer;
                    &:nth-child(odd)
                    {
                        background:rgb(243, 245, 255);
                    }
                    &.disabled {
                        cursor: not-allowed;
                    }
                    &:not(.disabled):hover {
                       background: #FFF;
                       box-shadow: rgba(0, 0, 0, 0.33) 0px 0px 10px;
                       z-index: 9;
                       .title, .text {
                           color: #3F85ED;
                       }
                       .title {
                           margin-top: 36px;
                       }
                       .text {
                           margin-top: 8px;
                       }
                       .check {
                           opacity: 1;
                       }
                    }
                    .title {
                        height: 18px;
                        font-size: 18px;
                        font-weight: 500;
                        color: #303133;
                        line-height: 18px;
                        margin-top: 46px;
                        transition: all 0.3s;
                    }
                    .text {
                        height: 15px;
                        font-size: 14px;
                        font-weight: 500;
                        color: #606266;
                        line-height: 15px;
                        margin-top: 16px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        transition: all 0.3s;
                    }
                    .check {
                        position: absolute;
                        right: 16px;
                        bottom: 16px;
                        width: 100px;
                        height: 23px;
                        background: #1F58AE;
                        font-size: 14px;
                        color: #FFFFFF;
                        text-align: center;
                        line-height: 23px;
                        opacity: 0;
                        transition: all 0.3s;
                    }
                }
            }
        }
    }
}
</style>
