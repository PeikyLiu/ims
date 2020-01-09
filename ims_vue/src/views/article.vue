<template>
  <div class="container">
    <div class="article-create">
      <router-link class="create-link" to="/article/create">新建文章</router-link>
    </div>
    <template class="Form">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="文章名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="class_name"
          label="分类"
          width="180">
        </el-table-column>
        <el-table-column
          prop="time"
          label="创建时间"
          width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.row)">编辑文章
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除文章
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="block">
      <el-pagination
        :page-size='pageSize'
        layout="prev, pager, next"
        :total='total'
        @current-change='handlePage'>
      </el-pagination>
    </div>
</div>
</template>
<script type="text/javascript">
import articleService from '@/global/service/articleService.js'
export default {
  data () {
    return {
      tableData: [],
      total: 20,
      currentPage: 1,
      pageSize: 10
    }
  },
  created () {
    this.getData()
    articleService.articleShow().then(res => {
      this.total = res.total[0].total
      console.log(this.total)
    })
  },
  methods: {
    handleEdit: function (data) {
      this.$router.push({ name: 'ArticleEdit', params: { id: data.id } })
    },
    handleDelete: function (index, data) {
      let id = data.id
      articleService.articleDelete(id)
      this.tableData.splice(index, 1)
    },
    handlePage: function (val) {
      this.currentPage = val
      this.getData()
    },
    getData: function () {
      let currentPage = this.currentPage
      let pageSize = this.pageSize
      articleService.articleShow({ currentPage, pageSize }).then(res => {
        this.tableData = res.data
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.block {
  margin-top: 20px;
}
// .container{
//   width: 100%;
//   height: 100%;
// }
// .content-title{
//   height: 40px;
//   width: 100%;
// }
// .table-container{
//   border-collapse: collapse;
//   margin: 1rem 0;
//   width: 100%;
// }

// .table-container tr{
//   border-top: 1px solid #dfe2e5;
// }

// .table-container tr:nth-child(2n) {
//     background-color: #f6f8fa;
// }

// .table-container th{
//   font-size: 16px;
//   font-weight: 600;
// }

// .table-container td{
//   font-size: 16px;
//   font-weight: 400;
//   text-align: center;
// }
// s
// .edit-link{
//   width: 80px;
//   height: 40px;
//   display: inline-block;
// }
.article-create{
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
  // padding-left: 20px;
  .create-link{
    width: 100px;
    height: 35px;
    display: block;
    background: #3f9eff;
    text-align: center;
    line-height: 35px;
    border-radius: 4px;
    color: #fff;
  }
}
</style>
