<template>
  <div>
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside width="230px">
          <app-aside></app-aside>
        </el-aside>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from '../layout/AppAside'
import AppMain from '../layout/AppMain'
import AppHeader from '../layout/AppHeader'
export default {
  name: '',
  components: {
    AppHeader,
    AppAside,
    AppMain
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang='scss'>
.el-header {
  background-color: #2e3a4b;
  color: rgb(255, 255, 255);
  height: 50px;
  line-height: 50px;
  img {
    width: 25px;
    float: left;
    margin-top: 13px;
    margin-right: 10px;
  }
}

.el-aside {
  background-color: #555c64;
  color: #333;
  height: 93.1vh;
  overflow: auto;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
