<template>
	<div>
		<i-table :tableData="SupplierList" :column="column"></i-table>
	</div>
</template>

<script>
	import SupplierApi from "../../api/supplier.js"
	export default {
		name: '',
		components: {
			"i-table": () => import("../../components/table.vue")
		},
		data() {
			return {
				page:1,
				size:10,
				QueryFormparams:{
					name:"",
					mobile:"",
					linkman:""
				},
				SupplierList:[],
				column:[{
						label:"序号",
						type:"index"
					},
					{
						label:"供应商名称",
						prop:"name"
					},{
						label:"联系人",
						prop:"linkman"
					},
					{
						label:"联系电话",
						prop:"mobile"
					},
					{
						label:"备注",
						prop:"remark"
					},
					{
						label:"操作",
						type:"action",
						actions:[{
							type:"primary",
							text:"编辑"
						},
						{
							type:"danger",
							text:"删除"
						}]
					}
				]
			}
		},
		created() {
			this.getSupplier()
		},
		mounted() {},
		methods: {
			async getSupplier(){
				try{
					const {rows,total}= await SupplierApi.getSupplierList(this.page,this.size,this.QueryFormparams)
					this.total=total
					this.SupplierList=rows
					console.log("SupplierList=>",rows);
				}catch(e){
					console.log(e.message);
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
</style>
