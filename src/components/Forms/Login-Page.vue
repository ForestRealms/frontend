<template>
  <div>

    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="password" placeholder="请输入密码" show-password clearable></el-input>
      </el-form-item>

    </el-form>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col justify="center">
        <el-button type="primary" @click="submit">登录/注册</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import axios from "axios";
import {base_url} from "../../../config";
export default {

  methods:{
    submitForm() {
      this.$refs.vFormRef.getFormData().then(formData => {
        // Form Validation OK
        alert( JSON.stringify(formData) )
      }).catch(error => {
        // Form Validation failed
        this.$message.error(error)
      })
    },
    submit(){
      // 检查用户名和密码是否为空
      if(!this.username || !this.password){
        this.$message.error('用户名或密码不能为空');
        return;
      }

      axios.post(`${base_url}/login`, {
        username : this.username,
        password: this.password
      })
          .then((response) => {
            // 检查返回的code是否为1
            if(response.data.code === 1){
              // 显示成功消息
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              // // 重定向到其他页面
              // window.location.href = "/SomeOtherPage"
            }
            if (response.data.message === '用户不存在') {
              // 提示用户是否注册
              this.$confirm('用户不存在，是否注册新用户?', '提示', {
                confirmButtonText: '注册',

                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                // 用户点击了“注册”按钮，跳转到注册页面

                window.location.href = 'src/components/Forms/Register-Page.vue';
              }).catch((error) => {
                // 用户点击了“取消”按钮，不做任何操作
              })
            }
            else {
              // 显示错误消息
              this.$message.error(response.data.message);
            }
          }, (error) => {
            console.log(error)
            // 如果请求失败，显示一个错误消息
            this.$message.error('请求失败，请重试');
          })


    }
  }
}
</script>