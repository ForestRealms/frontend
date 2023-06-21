<template>
  <div>
    <!--    <el-form :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">-->
    <!--    </el-form>-->
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
        <el-button type="primary" @click="onsubmit()">注册</el-button>
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
      currentComponent: 'login-page',
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {

    register() {
      // 检查用户名和密码是否为空，密码和确认密码是否匹配
      if (!this.username || !this.password) {
        this.$message.error('用户名或密码不能为空');
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.$message.error('密码和确认密码不匹配');
        return;
      }

      axios.post(`${base_url}/register`, {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>