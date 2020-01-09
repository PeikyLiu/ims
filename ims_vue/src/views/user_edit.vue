<template>
  <div class="container">
    <div class="text-title">
      <el-input autosize v-model="userInfo.name" placeholder="请输入用户姓名"></el-input>
    </div>
    <div class="text-phone">
      <el-input autosize v-model="userInfo.phone" placeholder="请输入手机号码"></el-input>
    </div>
    <div class="text-password">
      <el-input autosize v-model="userInfo.password" placeholder="请输入用户密码"></el-input>
    </div>
    <div class="text-select">
      <el-select v-model="userInfo.person" placeholder="请选择角色">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </div>
    <div class="submit">
      <el-button type="success" @click='handleSubmit'>修改分类</el-button>
    </div>
  </div>
</template>
<script type="text/javascript">
import userService from '@/global/service/userService.js'
export default {
  data () {
    return {
      userInfo: {
        id: '',
        name: '',
        phone: '',
        password: '',
        person: '',
        created_time: ''
      },
      options: [{
        id: 1,
        name: '管理员'
      }, {
        id: 2,
        name: '用户'
      }]
    }
  },
  created () {
    let id = this.$route.params.id
    console.log(id)
    userService.userEdit(id).then(res => {
      this.userInfo = res[0]
      console.log(this.userInfo)
    })
  },
  methods: {
    handleSubmit: function () {
      let id = this.userInfo.id
      let name = this.userInfo.name
      let person = this.userInfo.person
      let phone = this.userInfo.phone
      let password = this.userInfo.password
      if (!id || !name || !person || !phone || !password) {
        alert('缺少必要参数')
        return
      }
      userService.userUpdate({ name, person, phone, password }, id)
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
