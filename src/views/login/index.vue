<template>
  <div class="login-container">
    <div class="login-box">
      <div class="title">山西省煤炭信息监管服务平台</div>

      <form class="form-box">
        <div class="form-item">
          <i class="el-icon-user-solid" />
          <input type="text" class="username" placeholder="请输入用户名" />
        </div>
        <div class="form-item">
          <i class="el-icon-lock"></i>
          <input type="password" class="pwd" placeholder="请输入密码" />
        </div>

        <div class="forget-box">
          <span class="text">忘记密码</span>
        </div>

        <div class="btn" @click="handleLogin">登录</div>
        <div class="registry-box">
          新用户注册
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleLogin() {
      this.$router.replace({ name: "index" });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  min-height: 600px;
  height: calc(100vh - 170px);
  width: 100%;
  background: url("~@/assets/images/login_bg.png") no-repeat;
}
.login-box {
  position: absolute;
  right: 10%;
  top: 50%;
  padding: 0 58px;
  margin-top: -284px;
  width: 470px;
  height: 568px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.33) 0px 0px 10px;
}

.login-box .title {
  height: 24px;
  font-size: 24px;
  font-weight: bold;
  color: #303133;
  line-height: 24px;
  text-align: center;
  margin: 61px 0 84px 0;
}
.form-item {
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 28px;
  }
  i {
    color: #d5d5d5;
    font-size: 24px;
    padding-right: 26px;
    transform: translateY(3px);
  }
}
.forget-box {
  margin-top: -12px;
  text-align: right;
  .text {
    height: 16px;
    font-size: 16px;
    color: #999999;
    line-height: 16px;
    cursor: pointer;
  }
}

.login-box input {
  width: 100%;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  text-indent: 4px;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #999999;
  border-radius: 2px;
}

.login-box input:focus {
  border-bottom: 1px solid #999999;
  outline: none;
}
.login-box .btn {
  width: 100%;
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  height: 60px;
  background: #3f85ed;
  border-radius: 10px;
  margin-top: 64px;
  cursor: pointer;
}

.registry-box {
  height: 16px;
  font-size: 16px;
  line-height: 16px;
  color: #344E81;
  text-align: right;
  margin-top: 54px;
  cursor: pointer;
}
</style>
