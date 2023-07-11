<template>
  <div>
    <el-menu @select="handle" default-active="1">
      <el-menu-item index="1" >
        <i class="el-icon-upload"></i>
        投递简历
      </el-menu-item>
      <el-menu-item index="2" v-show="true">
        <i class="el-icon-document"></i>
        查看简历
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import router from "@/router";

export default {
  data(){
    return{

    }
  },
  methods: {
    handle(index){
      console.log(index)
      switch (index) {
        case "1":
        default:
          if(router.currentRoute.name !== "ResumeUploader"){
            router.push({name: "ResumeUploader"})
          }
          break;
        case "2":
          if(router.currentRoute.name !== "table"){
            router.push({name: "table"})
          }
          break;
      }
    },
  }
}

</script>
<style scoped>

</style>