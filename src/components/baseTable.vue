<template>
  <div>
    <el-table :data="tableData" height="450" border="" style="width: 100%">
      <template  v-for="(item,index) in columns">
        <el-table-column v-if="!item.type" v-bind="item" :prop="item.props" :label="item.label"></el-table-column>
        <el-table-column v-if="item.type==='action'">
			<template v-slot="scope">
				<el-button type="primary">编辑</el-button>
				<el-button type="danger">删除</el-button>
			</template>
		</el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
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
