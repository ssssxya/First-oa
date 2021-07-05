<template>
    <div id="oa">
        <h1>通讯录</h1>
        <div class="head">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="userInfo.name" placeholder="请输入姓名"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="userInfo.gender" placeholder="请输入性别"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="userInfo.phoneNum" placeholder="请输入电话号码"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-date-picker v-model="userInfo.birthday" type="date" format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
                </el-col>
            </el-row>
            <el-button type="primary" @click="addUser" class="add-btn" plain>添加信息</el-button>
        </div>
        <div class="body">
            <template>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="序号" width="180"><template slot-scope="scope"> {{scope.$index + 1 }} </template></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="gender" label="性别"></el-table-column>
                    <el-table-column prop="phoneNum" label="电话"></el-table-column>
                    <el-table-column prop="birthday" label="生日"></el-table-column>
                    <el-table-column prop="birthday" label="操作">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-edit" @click="editUser(scope.row,scope.$index)" circle></el-button>
                            <el-button type="danger" icon="el-icon-delete" @click="delUser(scope.$index)" circle></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <el-dialog title="编辑用户信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <div>
                <el-form ref="form" :model="editObj" label-width="80px">
                    <el-form-item label="姓名"><el-input v-model="editObj.name"></el-input></el-form-item>
                    <el-form-item label="性别"><el-input v-model="editObj.gender"></el-input></el-form-item>
                    <el-form-item label="生日"><el-date-picker v-model="editObj.birthday" type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker></el-form-item>
                    <el-form-item label="电话号码"><el-input v-model="editObj.phoneNum"></el-input></el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Vue from 'vue';
 export default {
    name: 'oa',
    data: function(){

        return{
            //input:'',
            userInfo:{  //显示的用户信息
                name:'',
                gender: '',
                phoneNum: '',
                birthday: '',
            },
            tableData: [{
                name: '王小虎',
                gender:'男',
                phoneNum:'12345678900',
                birthday:'2001-02-24',
            }],
            dialogVisible: false,  //控制弹框的显示(不显示)
            editObj:{
                name:'',
                gender: '',
                phoneNum: '',
                birthday: '',
            },
            userIndex:0,
        }
    },
    methods:{
        //添加用户信息
        addUser(){
            if(!this.userInfo.name){
                this.$message({
                    message: '请输入姓名！',
                    type: 'warning'
                });
                return;
            }
            if(!this.userInfo.gender){
                this.$message({
                    message: '请输入性别！',
                    type: 'warning'
                });
                return;
            }
            if (!this.userInfo.birthday) {
                this.$message({
                    message: '请输入您的生日！',
                    type: 'warning'
                });
                return;
            }
            if (!this.userInfo.phoneNum) {
                this.$message({
                    message: '请输入电话号码！',
                    type: 'warning'
                });
                return;
            }
            if (!/^1[3456789]\d{9}$/.test(this.userInfo.phoneNum)) {
                this.$message({
                    message: '请输入正确的电话号码！',
                    type: 'warning'
                });
                return;
            }
            this.tableData.push(this.userInfo);
            this.userInfo = { //每添加一次，就将原来的数据清空一下
                name:'',
                gender: '',
                phoneNum: '',
                birthday: '',
            };
        },

        //删除一组用户信息
        delUser(idx){
            this.$confirm('确认删除此用户信息？')
                .then(() => {
                    this.tableData.splice(idx, 1); //此处是重点难点，分析vue源码有帮助与理解
                })
                .catch(() => {});
        },
        
        //编辑数据
        editUser(item,idx){
            //console.log(item);
             this.userIndex = idx;
             this.editObj = {
                 name: item.name,
                 gender: item.gender,
                 phoneNum: item.phoneNum,
                 birthday: item.birthday,
             };
             this.dialogVisible = true;
        },

        handleClose(){
             this.dialogVisible = false;
        },

        confirm(){
            this.dialogVisible = false;
            //Vue对象提供的静态方法
            Vue.set(this.tableData, this.userIndex, this.editObj);
            //下面的方法不可以，因为事件可以监听到但不能及时渲染到页面上去
            // this.tableData[this.userIndex] = this.editObj;
        }
    },
}
 
 
</script>


<style scoped>
#oa{
    width:1024px;
    margin: 0 auto; 
}
.add-btn{
    margin-top: 20px;
    width: 100%;
}
.body{
    margin-top:20px;
}
</style>
