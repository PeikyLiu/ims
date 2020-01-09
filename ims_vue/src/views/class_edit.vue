<template>
  <div class="container">
    <div class="text-title">
      <el-input autosize v-model="classInfo.name" placeholder="请输入分类名称"></el-input>
    </div>
    <div class="submit">
      <el-button type="success" @click='handleSubmit'>修改分类</el-button>
    </div>
  </div>
</template>
<script type="text/javascript">
import classService from '@/global/service/classService.js'
export default {
  data () {
    return {
      classInfo: {
        id: '',
        name: ''
      }
    }
  },
  created () {
    let id = this.$route.params.id
    classService.classEdit(id).then(res => {
      this.classInfo = res[0]
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  },
  methods: {
    handleSubmit: function () {
      let name = this.classInfo.name
      let id = this.classInfo.id
      console.log(id, name)
      if (!name || !id) {
        alert('缺少必要参数')
        return
      }
      classService.classUpdate({ name }, id)
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
