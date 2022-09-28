<template>
	<div>
		<el-table :data="tableData" height="350" border style="width: 100%">
			<template v-for="(item,index) in column">
				<el-table-column v-if="item.type&&item.type!=='action'" :type="item.type" :prop="item.prop"
					:label="item.label" width="180">
				</el-table-column>
				<el-table-column v-else-if="!item.type" :prop="item.prop" :label="item.label" width="180">
				</el-table-column>
				<el-table-column v-else-if="item.type==='action'" :label="item.label">
					<template v-slot="scope">
						<el-button v-for="(btn,index) in item.actions" :key="index" :type="btn.type">
							{{btn.text}}
						</el-button>
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
			column: {
				type: Array,
				default: () => []
			},
			tableData: {
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
