<template>
  <div class="container">
    <div class="class-create">
      <router-link class="create-link" to='/class/create'>新建分类</router-link>
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
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.row)">编辑分类</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除分类</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script type="text/javascript">
import classService from '@/global/service/classService.js'
export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    classService.classShow().then(res => {
      console.log(res)
      this.tableData = res
    }).catch(e => {
      console.log(e)
    })
  },
  methods: {
    handleEdit: function (data) {
      this.$router.push({ name: 'ClassEdit', params: { id: data.id } })
    },
    handleDelete: function (index, data) {
      let id = data.id
      classService.classDelete(id)
      this.tableData.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
.class-create{
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
