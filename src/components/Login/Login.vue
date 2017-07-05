<template>
  <header>
    <el-row>
      <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
      <el-col :xs="4" :sm="4" :md="2" :lg="2" class="pointer">
        <span @click="goHomePage"><i class="icon iconfont icon-LOGO"></i></span></el-col>
      <el-col :xs="12" :sm="12" :md="16" :lg="16">
        <div class=""></div>
      </el-col>
      <el-col :xs="4" :sm="2" :md="1" :lg="1">
        <el-button type="text" @click="dialogLoginFormVisible = true" class="login">登录</el-button>
      </el-col>
      <el-col :xs="4" :sm="2" :md="1" :lg="1">
        <el-button type="text" @click="dialogFormVisible = true" class="register">注册</el-button>
      </el-col>
      <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
    </el-row>

    <el-dialog title="登录" :visible.sync="dialogLoginFormVisible" class="dialog-login">
      <el-form :model="ruleForm1" :rules="rules2" ref="ruleForm1" label-width="50px" class="demo-ruleForm">
        <el-form-item label="账号" prop="email">
          <el-input type="email" v-model="ruleForm1.email" auto-complete="off" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm1.pass" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item class="light-btn">
          <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
          <el-button @click="resetForm('ruleForm1')">重置</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>

    <el-dialog title="注册" :visible.sync="dialogFormVisible" class="dialog-register">
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="90px" class="demo-ruleForm">
        <el-form-item label="账号" prop="email">
          <el-input type="email" v-model="ruleForm2.email" auto-complete="off" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="light-btn1">
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>

  </header>

</template>
<script>
  export default {
    name: 'header',
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        dialogLoginFormVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        ruleForm1: {
          email: '',
          pass: ''
        },
        ruleForm2: {
          email: '',
          pass: '',
          checkPass: ''
        },
        rules1: {
          email: [
            {required: 'true', message: '请输入邮箱', trigger: 'blur'},
            {type: 'email', message: '请正确输入邮箱', trigger: 'blur,change'}
          ],
          pass: [
            {required: 'true', message: '请输入密码', trigger: 'blur'}
//            {validator: validatePass, trigger: 'blur'}
          ]
        },
        rules2: {
          email: [
            {required: 'true', message: '请输入邮箱', trigger: 'blur'},
            {type: 'email', message: '请正确输入邮箱', trigger: 'blur,change'}
          ],
          pass: [
            {required: 'true', message: '请输入密码', trigger: 'blur'},
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {required: 'true', message: '请再输入一次密码', trigger: 'blur'},
            {validator: validatePass2, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        var sThis = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
//            alert('submit!')
//            alert(sThis.dialogLoginFormVisible)
            setTimeout(function () {
              sThis.dialogLoginFormVisible = false
              sThis.$router.push({name: 'HomePageUser'})
            }, 200)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      goHomePage: function () {
        this.$router.push({path: '/'})
      }
    }
  }
</script>
<style>
  .header-avatar img {
    width: 40px !important;
  }

  .header-avatar {
    margin-top: 5px;
    width: 40px;
    height: 40px;
    overflow: hidden !important;
  }
  .login,.register{
    height:100% !important;
    width:100% !important;
    padding-top:18px !important;
    padding-bottom:18px !important;
  }
  .login span,.register span{
    display:inline-block;
    color:white;
    height:100% !important;
    width:100% !important;
  }
  @media screen and (min-width: 769px) {
    .dialog-login .el-dialog--small {
      width: 400px !important;
    }
    .dialog-register .el-dialog--small {
      width: 400px !important;
    }
  }

  @media screen and (max-width: 768px) {
    .dialog-login .el-dialog--small {
      width: 90% !important;
    }
    .dialog-register .el-dialog--small {
      width: 90% !important;
    }

  }
</style>

