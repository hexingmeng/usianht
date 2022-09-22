<template>
  <div>
    <div class="home">
      <img src="../../assets/logocc.png">
      <div>积云会员管理系统</div>
    </div>
    <div class="w1">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{$store.getters.userInfo.name||""}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="changePass" icon="el-icon-edit">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout" icon="el-icon-s-fold">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    handleCommand(command) {
      console.log(command)
      switch (command) {
        case 'changePass':
          this.handleChangePass()
          break
        case 'logout':
          this.handleLogout()
          break
      }
    },
    handleChangePass() {
      alert('修改密码')
    },
    async handleLogout() {
      try {
        const responsr = await this.$store.dispatch('handleLogout')
        this.$router.push('/login')
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.home {
  width: 200px;
  float: left;
  img {
    width: 25px;
    float: left;
    margin-top: 13px;
    margin-right: 10px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.w1 {
  width: 100px;
  height: 50ex;
  color: #fff;
  float: right;
}
</style>
