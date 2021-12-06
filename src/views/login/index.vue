<template>
  <div class="login-container">
    <div class="login-box">
      <div class="title">账号登录</div>

      <form class="form-box">
        <input
          type="text"
          class="username"
          placeholder="用户名 或 电子邮箱地址"
        />
        <input type="password" class="pwd" placeholder="密码" />

        <div class="btn" @click="handleLogin">登录</div>
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
  height: 100vh;
  width: 100%;
  background: url("~@/assets/images/login_bg.png") no-repeat;
  background-size: 100% 100%;
}
.login-box {
  position: absolute;
  right: 10%;
  top: 50%;
  padding: 0 30px;
  margin-top: -167px;
  width: 380px;
  height: 334px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
}

.login-box .title {
  font-size: 18px;
  margin-top: 27px;
  margin-bottom: 11px;
  padding-bottom: 8px;
  color: #333333;
  font-weight: 400;
  border-bottom: 1px solid #e3e3e3;
}

.login-box input {
  width: 100%;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  text-indent: 4px;
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 2px;
  margin-bottom: 14px;
}

.login-box input:focus {
  border: 1px solid #d7d7d7;
  outline: none;
}
.login-box .btn {
  width: 100%;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  background-color: #3450e8;
  cursor: pointer;
}
</style>
