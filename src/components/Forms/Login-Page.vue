<template>
  <div>
    <el-form ref="loginForm">
      <el-form-item label="用户名">
        <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="password" placeholder="请输入密码" show-password clearable></el-input>
      </el-form-item>
    </el-form>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col justify="center">
        <el-button type="primary" @click="submit">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import { base_url } from "../../../config";
import { MessageBox } from "element-ui";
import router from "@/router";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit() {
      if (!this.username || !this.password) {
        this.$message.error("用户名或密码不能为空");
        return;
      }

      axios
          .post(`${base_url}/login`, {
            username: this.username,
            password: this.password
          })
          .then((response) => {
            if (response.data.code === 1) {
              this.$message({
                message: "登录成功",
                type: "success"
              });
              router.push({ name: "ResumeUploader" }); // 跳转到ResumeUploader界面
            }
            else if (response.data.message === "用户不存在") {
              // User not found, ask if they want to register
              MessageBox.confirm("用户名不存在，是否注册？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
              })
                  .then(() => {
                    this.$emit("userNotFound"); // Switch to the register form
                  })
                  .catch(() => {
                    // Do nothing, user chose not to register
                  });
            } else {
              this.$message.error(response.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
            this.$message.error("请求失败，请重试");
          });
    }
  }

};
</script>
