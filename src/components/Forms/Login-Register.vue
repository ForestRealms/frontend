<template>
  <div>
    <LoginForm v-if="isLoginFormVisible" @userNotFound="switchToRegisterForm" />
    <RegisterForm v-else />
  </div>
</template>
<script>
import RegisterForm from '@/components/Forms/Register-Page.vue';
import LoginForm from '@/components/Forms/Login-Page.vue'

export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      isLoginFormVisible: true
    }
  },
  methods:{
    switchToRegisterForm(){
      this.isLoginFormVisible = false;
    }
  }
}
</script>
