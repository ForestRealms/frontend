<template>
  <div id="upload1">
    <div>上传您的简历文件</div>
    <div class="el-upload__tip">上传完成后，请点击<b><u>确认上传</u></b>即可上传成功</div>
    <el-upload
        ref="upload"
        drag
        action="http://127.0.0.1/upload"
        :auto-upload="false"
        name="file"
        :multiple="false"
        accept=".pdf"
        :data="getData()"
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

  </div>
</template>

<script>
export default {
  data() {
    return {

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
      return isPDF && isLt2M;
    },
    onSuccess(response){
      console.log(response)
      this.$message.success('上传成功！')
    },
    getData(){
      return {
        username: "admin",
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
