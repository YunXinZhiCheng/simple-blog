<template>
  <div class="showView">
    <!-- 这是列表展示区域 -->

    <!-- 博客组件 -->
    <BlogItem v-for="item in listArr" :key="item.id" :itemObj="item" />

    <!-- 分页结构 -->
    <div class="pageGroup">
      <div class="btn btnLeft" @click="btnLeft">&lt; 上一页</div>
      <div class="btn btnRit" @click="btnRit">下一页 &gt;</div>
    </div>

    <!-- 数据加载 -->
    <div class="toast" v-show="showToast">
      数据加载中...
    </div>
  </div>
</template>

<script>
import BlogItem from '@/components/BlogItem'
// import axios from 'axios'
export default {
  data() {
    return {
      listArr: [], // 博客列表
      page: 1, // 默认页数
      showToast: false, // 加载默认隐藏
    }
  },
  components: {
    BlogItem,
  },
  created() {
    // 获取网络数据
    this.getData()
  },
  methods: {
    // 点击左边的按钮
    btnLeft() {
      // 如果页面到1就不可以走了，否则就继续上一页
      this.page == 1 ? 1 : this.page--
      this.getData()
      this.scrTop()
      this.showToast = true
    },
    // 点击右边的按钮
    btnRit() {
      // 如果页面的博客列表数小于9或者没有，则就到尽头不再走，否则就继续下一页
      if (this.listArr.length < 9 || this.listArr.length == 0) {
        return
      }
      this.page++
      this.getData()
      this.scrTop()
      this.showToast = true
    },
    // 滚动/返回到顶部的函数
    scrTop() {
      if (document.body.scrollTop) {
        document.body.scrollTop = 0
      } else {
        document.documentElement.scrollTop = 0
      }
    },

    // 获取请求的函数
    getData() {
      this.axios({
        // method: 'get', // 默认get请求
        url: 'https://ku.qingnian8.com/dataApi/blog/showBlog.php',
        params: {
          page: this.page,
        },
      }).then((res) => {
        // console.log(res)
        this.listArr = res.data
        this.showToast = false // 上面数据加载完后，就隐藏加载提示
      })
    },
  },
}
</script>

<style lang="less" scoped>
// 博客列表
.showView {
  padding: 60px 30px;
}
// 翻页效果
.pageGroup {
  padding: 40px;
  // background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    border: 1px solid #41b883;
    padding: 10px 20px;
    color: #41b883;
    font-size: 18px;
    margin: 0 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #41b883;
      color: #fff;
    }
  }
}
// 数据加载
.toast {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
