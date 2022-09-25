<template>
  <div class="layout">
    <!-- 布局 -->
    <el-container>
      <el-header>
        <appHeader></appHeader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <appAside></appAside>
        </el-aside>
        <el-main>
          <appMain></appMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import appHeader from "@/layout/AppHeader";
// import appAside from "@/layout/AppAside";
import appMain from "@/layout/AppMain";
import appAside from "@/layout/AppAside";

export default {
  name: "layout",

  components: {
    appHeader,
    appAside,
    appMain,
  },
};
</script>

<style lang="scss" scoped>
.layout,
.el-container {
  height: 100%;
}
.el-header {
  height: 60px;
  line-height: 60px;
  background-color: #2d3a4b;
  color: #fff;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 100%;
}
</style>