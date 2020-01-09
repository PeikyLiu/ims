<template>
  <div class="Header">
    <div class="left">
      <!-- <router-link tag="li" to="/article/create">
        <a>About</a>
      </router-link> -->
      <el-breadcrumb separator="/" >
        <el-breadcrumb-item v-for="(item,index) in RouterInfo" :key='index' :to="{ path: item.path }">{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <span class="userName">{{userName}}</span>
      <el-button type="success" @click='handleLogout'>退出登陆</el-button>
    </div>
  </div>
</template>
<script type="text/javascript">
// import routes from '@/router/routes.js'
import DataStore from '@/global/storage/index.js'
export default {
  data () {
    return {
      // RoutesInfo: null
      RouterInfo: [],
      userName: ''
    }
  },
  watch: {
    '$route': 'getRouter'
  },
  created: function () {
    this.userName = DataStore.getUserName()
    console.log(this.userName)
    // let router = this.$route
    // console.log(router)
    // this.RouterInfo = this.getBreadCrumb(router.matched)
    // this.RouterInfo.path = this.getPath(router)
    // console.log(this)
    this.getRouter()
    let name = DataStore.getUserName()
    let token = DataStore.getToken()
    if (!name || !token) {
      this.$router.push({
        name: 'Login'
      })
    }
  },
  methods: {
    getRouter: function () {
      console.log(this.$route)
      this.RouterInfo = this.getBreadCrumb(this.$route.matched)
      console.log(this.RouterInfo)
    },
    // getRoutesInfo: function (routes) {
    //   let result = []
    //   routes.map((data) => {
    //     if (data.meta) {
    //       let item = {
    //         path: data.path,
    //         name: data.name,
    //         meta: data.meta
    //       }
    //       if (data.children) {
    //         item.children = this.getRoutesInfo(data.children)
    //       }
    //       result.push(item)
    //     } else if (data.children) {
    //       this.getRoutesInfo(data.children).forEach(data => result.push(data)
    //       )
    //     }
    //   })
    //   // console.log(result)
    //   return result
    // },
    // getRouter: function () {
    //   let router = this.$route
    //   this.breadcrumb = this.getBreadCrumb(router.matched)
    //   console.log(this)
    //   console.log(this.breadcrumb)
    // },
    getBreadCrumb: function (router) {
      let result = []
      router.forEach((data) => {
        if (data.meta.breadcrumb && data.meta.breadcrumb.title) {
          result.push({
            title: data.meta.breadcrumb.title,
            path: data.path
          })
        }
      })
      return result
    },
    handleLogout: function () {
      DataStore.clear()
      console.log(123)
      this.$router.push({
        name: 'Login'
      })
    }
    // getPath: function (router) {
    //   console.log(router, 123)
    //   return router.path
    // }
  }
}
</script>
<style lang="less">
.Header{
  display: flex;
  justify-content: space-between;
}
.left{
  display: flex;
  justify-content: space-around;
}
.el-breadcrumb{
  display: flex;
  justify-content: space-around;
  line-height: 60px;
  height: 60px;
}
.el-breadcrumb__item{
  text-align: left;
  height: 100%;
}
.el-breadcrumb__separator{
  color: #000;
}
</style>
