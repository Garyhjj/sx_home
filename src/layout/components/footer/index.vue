<template>
  <div class="footer-box">
    <div class="block">
      友情链接：
      <el-link href="http://www.shanxi.gov.cn/" target="_blank" :underline="false">山西省人民政府</el-link>
      <span class="line"></span>
      <el-link href="http://nyj.shanxi.gov.cn/" target="_blank" :underline="false">山西省能源局</el-link>
    </div>
    <div class="copyright-info">
      Copyright ©2021 山西云时代技术有限公司 版权所有
      <el-link href="https://beian.miit.gov.cn/" target="_blank" :underline="false">晋ICP备xxxxxxxx号</el-link>
      <img src="~@/assets/images/icp_ga.png" />
      <el-link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=xxxxxxxx" target="_blank" :underline="false">晋公网安备 xxxxxxxx号</el-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #274E91;
    text-align: center;
    height: 73px;
    padding: 15px 0 20px;
    color: #fff;
    font-size: 13px;
    box-sizing: border-box;
    z-index: 9999;
    .block {
        margin-bottom: 4px;
    }
    .el-link.el-link--default {
        color: #fff;
        font-size: 13px;
        vertical-align: baseline;
    }
    .line {
        display: inline-block;
        height: 10px;
        width: 1px;
        background-color: #fff;
        margin: 0 8px;
    }
    .copyright-info {
       img {
           height: 13px;
           width: 13px;
           margin: 0 8px;
       }
    }
}
</style>
