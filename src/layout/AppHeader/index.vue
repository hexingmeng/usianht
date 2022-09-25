<template>
  <div class="appHeader">
    <router-link class="hearderLink" to="/">
      <img
        src="http://vue.mengxuegu.com/img/logo.7156be27.png"
        alt="logo"
        width="28"
        class="linkImg"
      />
      <span class="linkTitle">积云会员管理系统</span>
    </router-link>
    <el-dropdown @command="handleCommand" class="headerDropdown">
      <span class="el-dropdown-link">
        {{ $store.getters.userInfo.name || ""
        }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="changePass"
          >修改密码</el-dropdown-item
        >
        <el-dropdown-item icon="el-icon-s-fold" command="logout"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      console.log(command);
      switch (command) {
        case "changePass":
          this.handleChangePass();
          break;
        case "logout":
          this.handleLogout();
          break;
      }
    },
    // 修改密码
    handleChangePass() {
      alert("修改密码");
    },
    // 退出登录
    async handleLogout() {
      const response = await this.$store.dispatch("handleLogout");
      // if (!response.flag) return;
      this.$router.push("/login");
    },
  },
};
</script>



<style lang="scss" scoped>
.appHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .hearderLink {
    text-decoration: none;
    color: #fff;
    .linkImg {
      vertical-align: middle;
      margin-left: 40px;
    }
    .linkTitle {
      margin-left: 20px;
      font-size: 20px;
      vertical-align: middle;
    }
  }
  .headerDropdown {
    color: #fff;
    margin-right: 40px;
    font-size: 16px;
  }
}
</style>