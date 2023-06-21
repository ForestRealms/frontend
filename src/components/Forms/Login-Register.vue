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

<!--      <el-form-item label="确认密码">-->
<!--        <el-input v-model="confirmPassword" placeholder="请再次输入密码" show-password clearable></el-input>-->
<!--      </el-form-item>-->
    </el-form>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col justify="center">
        <el-button type="primary" @click="submit">登录/注册</el-button>
      </el-col>
    </el-row>

    <LoginForm v-if="isLoginFormVisible" @userNotFound="switchToRegisterForm" />
    <RegisterForm v-else />

  </div>
</template>
<script>
import {base_url} from "../../../config";
import axios from "axios";
import RegisterForm from 'src/components/Forms/Register-Page.vue';
// import Loginform from


export default {
    components: {
      // LoginForm,
      RegisterForm
    },
    data() {
      return {
        // formJson: {"widgetList":[{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"userName_login","label":"用户名","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input78248"},{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"passport_login","label":"密码","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":8,"maxLength":24,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input13289"},{"type":"button","icon":"button","formItemFlag":false,"options":{"name":"button_login","label":"登录","columnWidth":"200px","size":"","displayStyle":"block","disabled":false,"hidden":false,"type":"","plain":false,"round":false,"circle":false,"icon":null,"customClass":"","onCreated":"","onMounted":"","onClick":""},"id":"button22469"},{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"userName_register","label":"用户名","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input51895"},{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"passport_register","label":"密码","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":8,"maxLength":24,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input53689"},{"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"passportVertification_register","label":"请确认密码","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":8,"maxLength":24,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"el-icon-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input118305"},{"type":"button","icon":"button","formItemFlag":false,"options":{"name":"button_register","label":"注册","columnWidth":"200px","size":"","displayStyle":"block","disabled":false,"hidden":false,"type":"","plain":false,"round":false,"circle":false,"icon":null,"customClass":"","onCreated":"","onMounted":"","onClick":""},"id":"button16553"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","onFormCreated":"","onFormMounted":"","onFormDataChange":""}},
        // formData: {},
        // optionData: {},
        username: undefined,
        password: undefined,
        confirmPassword: undefined,
      }
    },
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
        // // 检查密码和确认密码是否匹配
        // if(this.password !== this.confirmPassword){
        //   this.$message.error('密码和确认密码不匹配');
        //   return;
        //   }
        // eslint-disable-next-line no-undef

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
                }).catch(() => {
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