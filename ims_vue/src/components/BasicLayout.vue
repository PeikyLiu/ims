<template>
  <el-container>
    <el-aside width="300px"><v-aside /></el-aside>
    <el-container>
      <el-header><v-header /></el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer><v-footer /></el-footer>
    </el-container>
  </el-container>
</template>
<script type="text/javascript">
import header from './BasicHeader.vue'
import footer from './BasicFooter.vue'
import aside from './BasicAside.vue'
export default {
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-aside': aside
  }
}
</script>
<style lang="less">
  .el-container,.el-aside{
    height: 100%;
  }
</style>
