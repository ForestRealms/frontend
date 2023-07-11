<template>
  <div>
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="password" placeholder="请输入密码" show-password clearable></el-input>
      </el-form-item>

      <el-form-item label="确认密码">
        <el-input v-model="confirmPassword" placeholder="请再次输入密码" show-password clearable></el-input>
      </el-form-item>
    </el-form>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col justify="center">
        <el-button type="primary" @click="register">注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {base_url} from "../../../config";
import axios from "axios";

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register() {
      if (!this.username || !this.password || !this.confirmPassword) {
        this.$message.error('用户名或密码不能为空');
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.$message.error('两次输入的密码不一致');
        return;
      }

      axios.post(`${base_url}/register`, {
        username : this.username,
        password: this.password
      })
          .then((response) => {
            if(response.data.code === 1){
              this.$message({
                message: '注册成功',
                type: 'success'
              });
            } else {
              this.$message.error(response.data.message);
            }
          }, (error) => {
            console.log(error);
            this.$message.error('请求失败，请重试');
          });
    }
  }
}
</script>
