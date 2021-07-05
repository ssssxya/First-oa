<template>
  <div class="login">
    <el-row>
        <el-col :offset="8" :span="8">
        <el-card class="box-card">
        <div  class="text">
            <h1>请登录</h1>
        </div>
        <!-- </el-col> -->
        <!-- <el-col :offset="8" :span="8"> -->
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" >
    <el-form-item
        label="账号"
        prop="account"
        :rules="[
        { required: true, message: '账号不能为空'},
        { type: 'number', message: '账号必须为数字值'}
        ]"
    >
        <el-input type="account" v-model.number="numberValidateForm.account" autocomplete="off" maxlength="8"></el-input>
    </el-form-item>
    <el-form-item
        label="密码"
        prop="pwd"
        :rules="[
        { required: true, message: '密码不能为空'},
        { type: 'number', message: '密码必须为数字值'}
        ]"
    >
        <el-input type="pwd" v-model.number="numberValidateForm.pwd" autocomplete="off" maxlength="8"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">登录</el-button>
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
    </el-form-item>
    </el-form>
    </el-card>
        </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
    name:"login",
    
    data() {
      return {
        numberValidateForm: {
              account: '',
              pwd:''
        },
        ex:{
            account: '123456',
             pwd:'123456'
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.numberValidateForm.pwd == this.ex.pwd){
                this.$router.push('oa')
            }else
            this.$message.error('用户名与密码不匹配');
            return ;
          } else {
            this.$message.error('请按照正确的格式输入用户名与密码');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$message({
          showClose: true,
          message: `测试用账号：123456
          密码：123456`,
          type: 'success'
        });
        this.$refs[formName].resetFields();
      }
    }
  

}
</script>

<style scope="">
.login{
    margin-top: 100px;
}
.text{
    display: flex;
    justify-content: center;
    padding:  20px ;
}

</style>