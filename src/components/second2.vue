<template>
  <div>
    <el-button @click="dialogFormVisible = true">添加</el-button>

    <el-dialog title="添加Item" :visible.sync="dialogFormVisible" @close="closeForm">
    <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="审核状态" :label-width="formLabelWidth">
            <el-input v-model="form.status" auto-complete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="审核状态" :label-width="formLabelWidth">
            <el-select v-model="form.status" placeholder="请选择审核状态">
                <el-option label="待审核" value="0"></el-option>
                <el-option label="合格" value="1"></el-option>
                <el-option label="不合格" value="2"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button type="primary" @click="ensureForm">确 定</el-button>
    </div>
    </el-dialog>

    <table>
        <tr>
            <th>姓名</th>
            <th>审核状态</th>
            <th>操作</th>
        </tr>
        <tr :key="item.id" v-for='item in list'>
            <td>{{ item.name }}</td>
            <td v-if="item.status === '0'">待审核</td>
            <td v-else-if="item.status === '1'">合格</td>
            <td v-else-if="item.status === '2'">不合格</td>
            <td v-if="item.status === '0'">
                <button>删除</button>
            </td>
            <td v-else>
                <button>审核</button>
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
export default{
  name: 'second-2',
  data () {
    return {
      list: [{
        id: 0,
        name: '张三',
        status: '0'
      }],
      dialogFormVisible: false,
      formLabelWidth: '120px',
      // 确定是取消还是确定
      cancelOrensure: false,
      form: {
        name: '',
        status: ''
      }
    }
  },
  methods: {
    cancelForm () {
      this.cancelOrensure = false
      this.dialogFormVisible = false
    },
    ensureForm () {
      this.cancelOrensure = true
      this.dialogFormVisible = false
    },
    closeForm () {
      if (this.cancelOrensure) {
        let obj = {}
        obj.name = this.form.name
        obj.status = this.form.status
        obj.id = this.list[this.list.length - 1].id + 1
        this.list.push(obj)
      }
    }
  }
}
</script>
