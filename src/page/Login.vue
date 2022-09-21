<template>
  <div class="topLogin">
    <div class="conLogin">
      <h2>积云会员管理系统</h2>
      <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="账号" prop="username">
          <el-input v-model.trim="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="loginForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" class="btnLogin" @click="denglu">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '../api/user'
export default {
  name: '',
  components: {},
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    denglu() {
      // console.log(this.$refs['ruleForm'])
      this.$refs['ruleForm'].validate(valid => {
        if (!valid) return
        this.handleLogin()
      })
    },
    async handleLogin() {
      try {
        const response = await login(this.loginForm)
        console.log('response=>', response)
        console.log('token=>', response.token)
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.topLogin {
  position: absolute;
  background: url('../assets/meng.jpg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.conLogin {
  width: 400px;
  height: 250px;
  margin: 160px auto;
  background-color: hsla(0, 0%, 100%, 0.8);
  padding: 28px;
  border-radius: 20px;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 26px;
}
.btnLogin {
  margin-left: 100px;
}
</style>
