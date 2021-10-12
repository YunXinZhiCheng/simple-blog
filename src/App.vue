<template>
  <!-- 这是首页 -->
  <div id="app">
    <!-- 头部组件 -->
    <HdView />

    <!-- 中心区域 -->
    <div class="main">
      <!-- <ShowView /> -->
      <!-- <AddBlog /> -->
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <FtView />
  </div>
</template>
<script>
import HdView from '@/components/HdView'
import FtView from '@/components/FtView'
import ShowView from '@/components/ShowView'
import AddBlog from '@/components/AddBlog'
export default {
  components: {
    HdView,
    FtView,
    // ShowView,
    // AddBlog
  },
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  font-family: '微软雅黑';
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
#app {
  width: 1000px;
  border: 1px solid #41b883;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(65, 184, 131, 0.5);
}
.main {
  min-height: 200px;
}
</style>
