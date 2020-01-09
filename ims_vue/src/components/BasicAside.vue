<template>
  <el-col :span="8">
      <h5>Ims后台管理系统</h5>
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" :router="true">
        <el-menu-item index="/user" v-if='userPerson === 1'>用户管理</el-menu-item>
        <el-menu-item index="/article">文章管理</el-menu-item>
        <el-menu-item index="/class">分类管理</el-menu-item>
      </el-menu>
    </el-col>
</template>
<script type="text/javascript">
import DataStore from '@/global/storage/index.js'
export default {
  data () {
    return {
      userPerson: ''
    }
  },
  created () {
    this.userPerson = DataStore.getUserPerson()
    let routerRoot = this.$route.meta
    if (routerRoot.root === true) {
      if (this.userPerson !== 1) {
        alert('权限不足')
        this.$router.push({
          name: 'Article'
        })
      }
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-col-8 {
  width: 100%;
}
</style>
