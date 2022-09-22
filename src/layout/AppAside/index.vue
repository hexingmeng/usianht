<template>
  <div>
    <el-menu
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/index">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/member">
        <i class="el-icon-user-solid"></i>
        <span>会员管理</span>
      </el-menu-item>
      <el-menu-item index="/supplier">
        <i class="el-icon-s-cooperation"></i>
        <span>供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-s-goods"></i>
        <span>商品管理</span>
      </el-menu-item>
      <el-menu-item index="/staff">
        <i class="el-icon-user"></i>
        <span>员工管理</span>
      </el-menu-item>
    </el-menu>
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
  methods: {}
}
</script>
<style scoped lang='scss'>
</style>
