<template>
  <div id="upload1">
    <div>上传您的简历文件</div>
    <div class="el-upload__tip">上传完成后，请点击<b><u>确认上传</u></b>即可上传成功</div>
    <el-upload
        ref="upload"
        :drag="true"
        action="{base_url}/upload"
        :auto-upload="false"
        name="file"
        :multiple="false"
        accept=".pdf"
        :data="getData"
        :on-success="onSuccess"
        :limit="1"
        :before-upload="beforeUpload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将您的简历文件拖到此处，或<em>点击上传</em></div>

      <div class="el-upload__tip" slot="tip">
        只能上传pdf文件
      </div>

    </el-upload>
    <el-button type="success" plain @click="submitUpload">确认上传</el-button>

    <div>
      <el-input v-model="name" placeholder="请输入姓名"></el-input>
      <el-input v-model="age" placeholder="请输入年龄"></el-input>
      <el-input v-model="gender" placeholder="请输入学历"></el-input>
      <el-input v-model="education" placeholder="请输入毕业院校"></el-input>
      <el-input v-model="occupation" placeholder="请输入工作年限"></el-input>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      gender: "",
      education: "",
      occupation: ""
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    beforeUpload(file) {
      const isPDF = file.type === 'application/pdf';
      const isLt2M = file.size / 1024 / 1024 <= 5;

      if (!isPDF) {
        this.$message.error('只支持 PDF 格式!');
      }
      if (!isLt2M) {
        this.$message.error('文件大小不能超过 5MB！');
      }

      const isfilled = this.name && this.age && this.gender && this.education && this.occupation;

      if (!isfilled) {
        this.$message.error('请填写完整的信息！');
      }
      return isPDF && isLt2M && isfilled;
    },
    onSuccess(response){
      console.log(response)
      this.$message.success('上传成功！')
    },
    getData(){
      return {
        username: "admin",
        name: this.name,
        age: this.age,
        gender: this.gender,
        education: this.education,
        occupation: this.occupation
      }
    }

  }
}
</script>

<style>
#upload1{
  text-align: center;
  line-height: 175%;
}
</style>
