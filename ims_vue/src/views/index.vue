<template>
  <div>
    <div class="head">
      <h2 class="head-title">I M S 图 书 馆</h2>
      <div class="login-button">
        <el-button type="primary" @click='handleLogin'>去登陆</el-button>
      </div>
    </div>
    <div class="container">
      <ul class="book-list">
        <li class="book-item" :key='index' v-for='(item,index) in articleInfo' @click='handleRouter(item.id)'>
          <div class="book-photo">
            <img src=" https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1141496915,3888359258&fm=26&gp=0.jpg" class="book-img">
          </div>
          <h2 class="book-name">《{{item.name}}》</h2>
        </li>
      </ul>
    </div>
    <div class="foot">
      <p class="foot-info">&copy;ims图书有限公司</p>
    </div>
  </div>
</template>

<script type="text/javascript">
import articleService from '@/global/service/articleService.js'
export default {
  data () {
    return {
      articleInfo: []
    }
  },
  created () {
    articleService.indexHome().then(res => {
      this.articleInfo = res
      console.log(this.articleInfo)
    })
  },
  methods: {
    handleRouter: function (params) {
      let id = params
      this.$router.push({
        name: 'IndexShow',
        params: { id: id }
      })
    },
    handleLogin: function () {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  text-align: center;
  margin-bottom: 100px;
  border-bottom: 1px solid #666;
  .head-title {
    font-size: 36px;
    color: #597347;
    display: inline-block;
  }
  .login-button {
    width: 84px;
    height: 40px;
    display: inline-block;
    float: right;
  }
}
.container {
  text-align: center;
  .book-list {
    width: 800px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .book-item {
      width: 200px;
      height: 300px;
      text-align: center;
      .book-photo {
        width: 180px;
        height: 200px;
        margin: 0 auto;
        .book-img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
