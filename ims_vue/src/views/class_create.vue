<template>
  <div class="container">
    <div class="text-title">
      <el-input autosize v-model="input" placeholder="请输入分类名称"></el-input>
    </div>
    <div class="submit">
      <el-button type="success" @click='handleSubmit'>新建分类</el-button>
    </div>
  </div>
</template>

<script type="text/javascript">
import classService from '@/global/service/classService.js'
export default {
  data () {
    return {
      input: ''
    }
  },
  methods: {
    handleSubmit: function () {
      let name = this.input
      console.log(name)
      if (!name) {
        alert('缺少必要参数')
        return
      }
      classService.classInsert({ name })
      this.$router.push({ name: 'Class' })
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    width: 100%;
    text-align: center;
    padding-top: 20px;
    padding-left: 20px;
    height: 100%;
    position: relative;
    padding-bottom: 30px;
    .text-title{
      width: 300px;
      margin-bottom: 20px;
    }
    .submit{
      width: 300px;
      text-align: left;
    }
  }
</style>
