<template>
  <div class="user-container">
    <div class="user-content">
      <div class="login" @click="goToLogin">登录</div>
      <el-button type="primary">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.user-container {
  float: right;
  display: inline-flex;
  align-items: center;
  height: 100%;
}
.user-content {
  height: 40px;
  .login {
    display: inline-block;
    font-weight: 600;
    line-height: 40px;
    margin-right: 24px;
    cursor: pointer;
    &:hover {
      color: $linkHoverColor;
    }
  }
}
</style>
