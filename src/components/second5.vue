<template>
 <el-container>
     <el-header></el-header>
     <el-main>
         <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入文字" ></el-input>
            </el-form-item>
            <el-form-item prop="name">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox name="type" label="1"></el-checkbox>
                    <el-checkbox name="type" label="2"></el-checkbox>
                    <el-checkbox name="type" label="3"></el-checkbox>
                    <el-checkbox name="type" label="4"></el-checkbox>
                    <el-checkbox name="type" label="5" disabled></el-checkbox>
                    <el-checkbox name="type" label="6" disabled></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
         </el-form>
     </el-main>
 </el-container>
</template>
<style>
.el-checkbox__inner:hover{
    border-color: grey
}

.el-checkbox__input.is-checked+.el-checkbox__label{
    color: red;
}
.el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: transparent;
    border-color: red;
}
.el-checkbox__input.is-checked .el-checkbox__inner::after{
    border-color: red;
}
</style>

<script>
export default{
  data () {
    return {
      ruleForm: {
        name: '',
        type: ['3', '6']
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ]
      }
    }
  }
}
</script>
