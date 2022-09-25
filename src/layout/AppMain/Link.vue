<template>
  <div id="link">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="item">{{ breadcrumbText }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "link",
  computed: {
    breadcrumbText() {
      return this.$route.meta?.title;
    },
  },
};
</script>

<style lang="scss" scoped>
#link {
  .el-breadcrumb {
    height: 10px;
    padding: 20px;
    border-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    .item {
      border-left: 3px solid #31c17b;
      padding-left: 10px;
    }
  }
}
</style>