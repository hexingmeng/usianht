<template>
  <div class="member">
    <!-- 表单 -->
    <el-form ref="memberQueryForm" :inline="true" :model="memberQuery" class="demo-form-inline">
      <el-form-item prop="cardNum">
        <el-input v-model="memberQuery.cardNum" placeholder="会员卡号"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="memberQuery.name" placeholder="会员名字"></el-input>
      </el-form-item>
      <el-form-item prop="payType">
        <el-select v-model="memberQuery.payType" placeholder="支付类型">
          <el-option
            v-for="(item, index) in payType"
            :key="index"
            :label="item.name"
            :value="item.type"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="birthday">
        <el-date-picker
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="出生日期"
          v-model="memberQuery.birthday"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQueryMember">查询</el-button>
        <el-button type="primary" @click="handleOpenDialog">新增</el-button>
        <el-button @click="handleReset('memberQueryForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="memberList" height="380" border="" style="width: 100%">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
      <el-table-column prop="name" label="会员姓名"></el-table-column>
      <el-table-column prop="birthday" label="会员生日"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="110"></el-table-column>
      <el-table-column prop="integral" label="可用积分"></el-table-column>
      <el-table-column prop="money" label="开卡金额"></el-table-column>
      <el-table-column prop="payType" label="支付类型">
        <template v-slot="scope">{{ scope.row.payType | filterPayType }}</template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址" width="180"></el-table-column>
      <el-table-column label="操作" width="150">
        <template v-slot="scope">
          <el-button size="mini" @click="handleOpenDialog(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
    <!-- 新增对话框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="500px">
      <el-form
        ref="dialogForm"
        :model="dialogFormParams"
        :rules="dialogRules"
        style="width: 400px"
        label-width="120px"
      >
        <el-form-item label="会员卡号" prop="cardNum">
          <el-input v-model="dialogFormParams.cardNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员姓名" prop="name">
          <el-input v-model="dialogFormParams.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员生日" prop="birthday">
          <el-date-picker
            value-format="yyyy-MM-dd"
            v-model="dialogFormParams.birthday"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="dialogFormParams.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开卡金额" prop="money">
          <el-input v-model="dialogFormParams.money" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="可用积分" prop="integral">
          <el-input v-model="dialogFormParams.integral" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="支付类型" prop="payType">
          <el-select v-model="dialogFormParams.payType" placeholder="支付类型">
            <el-option
              v-for="(item, index) in payType"
              :key="index"
              :label="item.name"
              :value="item.type"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员地址" prop="address">
          <el-input type="textarea" v-model="dialogFormParams.address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MemberApi from '../../api/member'
import MemberEnum from '../../enum/member'
export default {
  data() {
    return {
      // 用来接受会员列表数据
      memberList: [],
      // 页码
      page: 1,
      // 条数
      size: 10,
      // 总条数
      total: 0,
      // 查询的参数
      memberQuery: {
        cardNum: '',
        name: '',
        payType: '',
        birthday: ''
      },
      payType: MemberEnum.payType,
      // 新增对话框状态
      dialogFormVisible: false,
      // 保存弹框的表单数据
      dialogFormParams: {
        cardNum: '',
        name: '',
        payType: '',
        address: '',
        money: '',
        integral: '',
        phone: '',
        birthday: ''
      },
      // 保存弹框的标题
      dialogTitle: '',
      // 弹框的表单验证规则
      dialogRules: {
        cardNum: [
          { required: true, message: '会员卡号不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '会员姓名不能为空', trigger: 'blur' }
        ],
        payType: [
          { required: true, message: '支付类型不能为空', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this.getMemberList()
  },
  filters: {
    filterPayType(value) {
      const data = MemberEnum.payType.find((item, index) => {
        return item.type === value
      })
      return data ? data.name : ''
    }
  },
  methods: {
    // 获取会员列表数据
    async getMemberList() {
      const { rows, total } = await MemberApi.getMemberList(
        this.page,
        this.size,
        this.memberQuery
      )
      // console.log(rows);
      this.total = total
      this.memberList = rows
    },
    // 条数切换触发的方法
    handleSizeChange(size) {
      this.size = size
      // console.log(size);
      this.getMemberList()
    },
    // 页码切换触发的方法
    handleCurrentChange(page) {
      this.page = page
      // console.log(page);
      this.getMemberList()
    },
    // 查询会员管理列表
    handleQueryMember() {
      // console.log(this.memberQuery);
      this.page = 1
      this.getMemberList()
    },
    // 重置会员管理表单
    handleReset(formName) {
      this.$refs[formName].resetFields()
    },
    // 删除会员管理列表
    handleDelete(id) {
      // console.log(id);

      this.$confirm('确认删除这条记录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          try {
            const response = await MemberApi.deleteMemberList(id)
            this.$message.success('删除成功')
            this.getMemberList()
          } catch (e) {
            console.log(e.message)
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 打开弹框
    handleOpenDialog(id) {
      this.dialogFormVisible = true
      if (typeof id === 'number') {
        this.dialogTitle = '会员编辑'
        this.handleFindMember(id)
        return
      }
      this.dialogTitle = '会员新增'
    },
    // 弹窗的确定新增
    handleSubmit() {
      this.$refs['dialogForm'].validate(valid => {
        if (!valid) return
      })
      this.dialogFormParams.id
        ? this.handleEditMember()
        : this.handleAddMember()
    },
    // 会员新增
    async handleAddMember() {
      try {
        const response = await MemberApi.addMemberList(this.dialogFormParams)
        this.handleReset('dialogForm')
        this.dialogFormVisible = false
        this.$message.success('新增成功')
        this.getMemberList()
      } catch (e) {
        console.log(e.message)
      }
    },

    // 会员编辑
    async handleEditMember() {
      try {
        const response = await MemberApi.editMemberList(
          this.dialogFormParams.id,
          this.dialogFormParams
        )
        this.handleReset('dialogForm')
        this.dialogFormVisible = false
        this.$message.success('编辑成功')
        this.getMemberList()
      } catch (e) {
        console.log(e.message)
      }
    },

    // 查询单个会员数据
    async handleFindMember(id) {
      try {
        const member = await MemberApi.findMemberList(id)
        // console.log(member);
        this.dialogFormParams = member
      } catch (e) {
        console.log(e.message)
      }
    },

    // 弹窗的取消按钮方法
    handleCancel() {
      this.handleReset('dialogForm')
      this.dialogFormVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.member {
  padding: 20px 0;
}
</style>