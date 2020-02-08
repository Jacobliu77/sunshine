<template>
  <div class="login">
    <el-card class="box-card">
       <img src="../../assets/img/icon.png"  style="height:60px" />
       <h3>欢迎来到注册页</h3>
      <el-form ref="myForm" :model="formdata" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="formdata.mobile" placeholder="请输入账号（必须手机号码）" class="mobile"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="formdata.password" placeholder="请输入密码" class="code"></el-input>
        </el-form-item>
         <el-form-item prop="repassword">
          <el-input type="password" v-model="formdata.repassword" placeholder="请再次输入密码" class="code"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input type="email" v-model="formdata.email" placeholder="请输入邮箱" class="code"></el-input>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="formdata.check" class="check">我已阅读用户协议且同意上述条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="onRegister" type="primary" class="submit">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { register } from '@/api/user.js'
export default {
  data () {
    let validator = function (rule, value, callBack) {
      value ? callBack() : callBack(new Error('您必须同意无条件被我们蒙骗'))
    }
    return {
      formdata: {
        mobile: '',
        password: '',
        repassword: '',
        email: '',
        check: false
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入您的账号' },
          { pattern: /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/, message: '账号为5-20个以字母开头包含数字句点符或下划线组成' }
        ],
        password: [
          { required: true, message: '请输入您的密码' },
          { pattern: /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/, message: '密码为6-21字母和数字组成' }
        ],
        repassword: [
          { required: true, message: '请确认您的密码' },
          { pattern: /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/, message: '密码6-21字母和数字组成' }
        ],
        email: [
          { required: true, message: '请输入您的邮箱' },
          { pattern: /^\w+((\.\w+){0,3})@\w+(\.\w{2,3}){1,3}$/, message: '输入合法的邮箱' }
        ],
        check: [{ validator }]
      }
    }
  },
  methods: {
    async onRegister () {
      const success = await this.$refs.myForm.validate() && this.formdata.password === this.formdata.repassword
      if (!success) {
        // 验证不通过待处理
        this.$message.error('请仔细核验表单项或检查两次输入密码是否一致')
      }
      try {
        // await 不能忘记！！！
        const res = await register({
          account: this.formdata.mobile,
          password: this.formdata.password,
          email: this.formdata.email
        })
        // 跳转到登录页
        if (res.data.code === 200) {
          this.$message.success('注册成功！请到个人中心完善详细信息！！')
          this.$router.push('/')
        } else {
          this.$message.error(res.data.error)
        }
      } catch (err) {
        this.$message.error(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/bgc.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 440px;
    height: 540px;
    opacity: 0.9;
    img {
      height: 40px;
      margin-bottom: 20px;
    }
    .check {
      float: left;
    }
    .submit {
      width: 100%;
    }
  }
}
</style>
