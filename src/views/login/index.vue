<template>
  <div id="Login-page">
    <div class="login-box">
      <h2 class="login-title">积云会员管理系统</h2>
      <el-form :model="loginForm" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="账户" prop="username">
          <el-input v-model.trim="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 8, message: "请输入 3 到 8 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 点击登录按钮进行表单验证
    handleLoginSubmit() {
      this.$refs["form"].validate((valid) => {
        if (!valid) return;
        // 校验表单之后执行的登录方法
        this.hanldeLogin();
      });
    },

    // 登录方法
    async hanldeLogin(){
      
      const token=await this.$store.dispatch('login',this.loginForm);
      if(!token) return
      const userInfo=await this.$store.dispatch('handleUserInfo')
      if(!userInfo) return
      this.$message.success("登录成功")
      this.$router.push('/')
    }
    // 登录方法
    // async hanldeLogin() {
      // try {
        // 调用登录接口
        // const response = await login(this.loginForm);
        // 将token存到vuex 以及本地
        // this.$store.dispatch("DIS_SET_TOKEN", response.token)
        // 调用获取用户信息接口
        // const userInfo=await getUserInfo()
        // console.log(userInfo);
        // 将用户信息存储到本地或者vuex
        // this.$store.dispatch("DIS_SET_USER_INFO",userInfo);
        // 登陆成功提示
        // this.$message.success("登录成功") 
        // 跳转到主页
        // this.$router.push('/')
      // } catch (e) {
        // console.log(e.message);
      // }
    // },
  },
};
</script>

<style lang="scss" scoped>
#Login-page {
  width: 100%;
  height: 100%;
  background-image: url("http://vue.mengxuegu.com/img/login.b665435f.jpg");
  position: absolute;
  .login-box {
    width: 450px;
    margin: 160px auto;
    background-color: hsla(0, 0%, 100%, 0.8);
    padding: 28px;
    border-radius: 20px;
    text-align: center;
    h2 {
      margin: 20px auto;
    }
    .el-form {
      margin: 0 auto;
      .el-button {
        float: left;
        width: 270px;
      }
    }
  }
}
</style>