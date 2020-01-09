<template>
  <div class="article">
    <h2 class="article-title">{{article.name}}123</h2>
    <h3 class="class-title">{{article.class_name}}</h3>
    <div class="article-content">{{article.content}}</div>
  </div>
</template>

<script type="text/javascript">
import articleService from '@/global/service/articleService.js'
export default {
  data () {
    return {
      article: []
    }
  },
  created () {
    let id = this.$route.params.id
    console.log(id)
    articleService.indexShow(id).then(res => {
      this.article = res[0]
      console.log(this.article)
    })
  }
}
</script>

<style lang="less" scoped></style>
