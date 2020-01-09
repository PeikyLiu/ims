<template>
  <div class="container">
    <div class="text-title">
      <el-input autosize v-model="input" placeholder="请输入文章标题"></el-input>
    </div>
    <div class="text-select">
      <el-select v-model="value" placeholder="请选择文章分类">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </div>
    <div class="quill">
      <quill-editor
        class="quill-editor"
        v-model="article.content"
        ref="myQuillEditor"
        :options="editorOption">
      </quill-editor>
    </div>
    <div class="submit">
      <el-button type="success" @click='handleSubmit'>新建文章</el-button>
    </div>
  </div>
</template>

<script type="text/javascript">
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import classService from '@/global/service/classService.js'
import articleService from '@/global/service/articleService.js'

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [ { 'header': 1 }, { 'header': 2 } ],
  [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
  [ { 'script': 'sub' }, { 'script': 'super' } ],
  [ { 'indent': '-1' }, { 'indent': '+1' } ],
  [ { 'direction': 'rtl' } ],
  [ { 'size': ['small', false, 'large', 'huge'] } ],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [ { 'color': [] }, { 'background': [] } ],
  [ { 'font': [] } ],
  [ { 'align': [] } ],
  ['clean'],
  ['link', 'image', 'video']
]
export default {
  components: {
    'quill-editor': quillEditor
  },
  data () {
    return {
      input: '',
      options: [],
      value: '',
      article: {
        content: ''
      },
      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions
          }
        }
      }
    }
  },
  created () {
    classService.classShow().then(res => {
      this.options = res
    })
  },
  methods: {
    handleSubmit: function () {
      let name = this.input
      console.log(name)
      let classId = this.value
      console.log(classId)
      let content = this.article.content
      console.log(content)
      console.log(new Date())
      if (!name || !classId || !content) {
        alert('缺少必要参数')
        return
      }
      articleService.articleInsert({ name, classId, content })
      this.$router.push({ name: 'Article' })
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
    .text-select{
      width: 300px;
      margin-bottom: 20px;
      .el-select{
        width: 100%;
      }
    }
    .quill{
      width: 100%;
      height: 350px;
      margin-bottom: 70px;
      .quill-editor{
        width: 100%;
        height: 100%;
        .ql-container{
          height: 200px;
        }
      }
    }
    .submit{
      width: 300px;
      text-align: left;
    }
  }
</style>
