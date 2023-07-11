<template>
  <div>
    <el-input v-model="searchName" placeholder="请输入姓名"></el-input>
    <el-button type="primary" @click="search">搜索</el-button>
    <el-table :data="tableData">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="school" label="毕业院校"></el-table-column>
      <el-table-column prop="workYears" label="工作年限"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchName: "",
      tableData: []
    };
  },
  methods: {
    async search() {
      const isAdmin = await this.checkAdmin();
      if (isAdmin) {
        this.tableData = await this.fetchData(this.searchName);
      } else {
        this.$message.error('仅能查询本人简历');
        const currentUserName = await this.fetchCurrentUserName();
        this.tableData = await this.fetchData(currentUserName);
      }
    },
    async checkAdmin() {
      // 向后端发送请求确认当前用户是否是管理员
      // 这里只是一个示例，需要根据后端接口进行修改
      const response = await fetch('/api/checkAdmin');
      const data = await response.json();
      return data.isAdmin;
    },
    async fetchCurrentUserName() {
      // 向后端发送请求得到当前用户的姓名
      // 这里只是一个示例，需要根据后端接口进行修改
      const response = await fetch('/api/currentUserName');
      const data = await response.json();
      return data.name;
    },
    async fetchData(name) {
      // 向后端发送请求获取数据
      // 这里只是一个示例，需要根据后端接口进行修改
      const response = await fetch(`/api/fetchData?name=${name}`);
      const data = await response.json();
      return data;
    }
  }
}
</script>
