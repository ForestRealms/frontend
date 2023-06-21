
<template>
 <div>
   <el-row type="flex" class="row-bg" justify="end">
     <el-col :span="4"><el-button @click="dialogVisible = !dialogVisible">登录/注册</el-button></el-col>
   </el-row>
   <el-dialog title="登录/注册" :visible.sync="dialogVisible">
     <LoginRegister></LoginRegister>
   </el-dialog>

 </div>
</template>


<script>
import LoginRegister from "@/components/Forms/Login-Register.vue";

export default {
  name: "Header-Components",
  data(){
    return{
      dialogVisible: false,
    }
  },
  methods:{
    // click_button(){
    //   this.dialogVisible = ! this.dialogVisible
    // }
  },
  components:{
    LoginRegister,
  }
}
</script>

<style scoped>

</style>