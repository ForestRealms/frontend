<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <HeaderComponent></HeaderComponent>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>


import HeaderComponent from "@/components/Header-Component.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent

  }
}
</script>

<style>

</style>
