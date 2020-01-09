<template>
  <div class="container">
    <div class="user-create">
      <router-link class="create-link" to='/user/create'>新增用户</router-link>
    </div>
    <template>
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
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="180">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="persons"
          label="角色"
          width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.row)">编辑用户</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除用户</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="block">
      <el-pagination
        :page-size='pageSize'
        layout="prev, pager, next"
        :total='total'
        @current-change='handlePage'
        :current-page='currentPage'>
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/javascript">
import userService from '@/global/service/userService.js'
export default {
  data () {
    return {
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 10
    }
  },
  created () {
    // userService.userShow().then(res => {
    //   this.tableData = res.data.map(item => {
    //     item.persons = item.person === 1 ? '管理员' : '用户'
    //     return item
    //   })
    // }).catch(e => {
    //   console.log(e)
    // })
    this.getData()
    userService.userShow().then(res => {
      let abc = res.total
      console.log(abc)
      this.total = abc[0].total
      console.log(this.total)
    })
  },
  methods: {
    handleEdit: function (data) {
      this.$router.push({
        name: 'UserEdit',
        params: { id: data.id }
      })
    },
    handleDelete: function (index, data) {
      let id = data.id
      userService.userDelete(id)
      console.log(index)
      this.tableData.splice(index, 1)
    },
    handlePage: function (val) {
      console.log(123)
      this.currentPage = val
      this.getData()
    },
    getData: function () {
      console.log(1233212312)
      let currentPage = this.currentPage
      let pageSize = this.pageSize
      userService.userShow({ currentPage, pageSize }).then(res => {
        this.tableData = res.data.map(item => {
          item.persons = item.person === 1 ? '管理员' : '用户'
          return item
        })
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
  .user-create{
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
