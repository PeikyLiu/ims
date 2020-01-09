<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <el-button type='primary'>成功按钮</el-button> -->
    <router-view/>
  </div>
</template>

<style lang="less">
.el-header, .el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 100%;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 30px;
  height: 100%;
}
body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
a{
  text-decoration: none;
}
.el-table td,.el-table th{
  text-align: center;
}
body,html{
  height: 100%;
}
*{
  box-sizing: border-box;
}
</style>
