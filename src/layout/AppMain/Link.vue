<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        <div class="aaa"></div>
        {{title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
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
  methods: {},
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>
<style scoped lang='scss'>
.el-breadcrumb {
  height: 50px;
  line-height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.el-breadcrumb-item {
  border-left: 10px solid #fff;
  float: left;
}
.aaa {
  width: 2px;
  height: 15px;
  float: left;
  background-color: rgb(81, 236, 105);
  margin-top: 18px;
  margin-left: 20px;
  margin-right: 5px;
}
</style>
