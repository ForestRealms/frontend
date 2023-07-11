<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <AsideComponent></AsideComponent>
      </el-aside>
      <el-container>
        <el-header>
          <HeaderComponent></HeaderComponent>
        </el-header>
        <el-main>
          <MainComponent></MainComponent>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>


import HeaderComponent from "@/components/Header-Component.vue";
import MainComponent from "@/components/Main-Component.vue";
import AsideComponent from "@/components/Aside-Component.vue";


export default {
  name: 'App',
  components: {
    AsideComponent,
    MainComponent,
    HeaderComponent,

  }
}
</script>

<style>

</style>
