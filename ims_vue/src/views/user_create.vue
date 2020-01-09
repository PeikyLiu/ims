<template>
  <div class="container">
    <div class="text-title">
      <el-input autosize v-model="inputName" placeholder="用户姓名"></el-input>
    </div>
    <div class="text-phone">
      <el-input autosize v-model="inputPhone" placeholder="手机号码"></el-input>
    </div>
    <div class="text-password">
      <el-input autosize v-model="inputPassword" placeholder="密码"></el-input>
    </div>
    <div class="text-select">
      <el-select v-model="value" placeholder="请选择用户职位">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.person"
          :value="item.id">
        </el-option>
      </el-select>
    </div>
    <div class="submit">
      <el-button type="success" @click='handleSubmit'>新增用户</el-button>
    </div>
  </div>
</template>
<script type="text/javascript">
import userService from '@/global/service/userService.js'
export default {
  data () {
    return {
      inputName: '',
      inputPhone: '',
      inputPassword: '',
      options: [{
        id: 1,
        person: '管理员'
      }, {
        id: 2,
        person: '用户'
      }],
      value: ''
    }
  },
  methods: {
    handleSubmit: function () {
      let name = this.inputName
      let phone = this.inputPhone
      let password = this.inputPassword
      let person = this.value
      console.log(person)
      if (!name || !phone || !password || !person) {
        alert('缺少必要参数')
        return
      }
      userService.userInsert({ name, phone, password, person })
      this.$router.push({ name: 'User' })
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
    .text-phone{
      width: 300px;
      margin-bottom: 20px;
    }
    .text-password{
      width: 300px;
      margin-bottom: 20px;
    }
    .submit{
      width: 300px;
      text-align: left;
    }
    .text-select{
      text-align: left;
      margin-bottom: 20px;
    }
  }
</style>
