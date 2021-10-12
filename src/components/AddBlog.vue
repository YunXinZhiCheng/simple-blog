<template>
  <!-- 添加博客页面 -->
  <div class="addBlog">
    <!-- 1.添加博客  -->
    <div class="addMain">
      <div class="row">
        <div class="text">博客标题:</div>
        <div class="iptBox">
          <input type="text" v-model="itemObj.title" />
        </div>
      </div>
      <div class="row rowAuthor">
        <div class="text">作者：</div>
        <div class="iptBox">
          <input type="text" v-model="itemObj.author" />
        </div>
      </div>
      <div class="row">
        <div class="text">分类:</div>
        <div class="iptBox">
          <select v-model="itemObj.classify">
            <option v-for="item in classList" :key="item.id">
              {{ item.classname }}
            </option>
          </select>
        </div>
      </div>
      <div class="row rowArea">
        <div class="text">博客内容：</div>
        <div class="iptBox">
          <textarea v-model="itemObj.content"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="iptBox">
          <button @click="onSubmit">发表博客</button>
        </div>
      </div>
    </div>

    <!-- 2.博客预览 -->
    <div
      v-show="
        itemObj.title || itemObj.content || itemObj.classify || itemObj.author
      "
    >
      <h1 class="blShowBox">博客预览</h1>
      <BlogItem :itemObj="itemObj" />
    </div>
  </div>
</template>

<script>
import BlogItem from '@/components/BlogItem'
import axios from 'axios'
export default {
  data() {
    return {
      itemObj: {
        title: '',
        posttime: new Date().getTime() / 1000, // 获取当前时间
        classify: '',
        author: '',
        content: '',
      },
      classList: [], // 分类数据：数组
    }
  },
  components: {
    BlogItem,
  },
  created() {
    // 调用methods里面的方法
    this.getClassify()
  },
  methods: {
    // 获取分类列表数据
    getClassify() {
      axios({
        url: 'https://ku.qingnian8.com/dataApi/blog/classBlog.php',
      }).then((res) => {
        // console.log(res.data)
        this.classList = res.data
      })
    },
    // 点击提交数据
    onSubmit() {
      if (
        this.itemObj.title == '' ||
        this.itemObj.content == '' ||
        this.itemObj.classify == '' ||
        this.itemObj.author == ''
      ) {
        alert('请按照要求填写后再提交')
        return
      }
      this.pushData()

      alert('发表成功返回首页')
      this.$router.push('/')
    },
    // 发送数据
    pushData() {
      this.axios({
        url: 'https://ku.qingnian8.com/dataApi/blog/addBlog.php',
        params: this.itemObj,
      }).then((res) => {
        // console.log(res)
      })
    },
  },
}
</script>

<style lang="less" scoped>
input,
textarea,
select {
  outline: none;
}
.addBlog {
  padding: 50px 30px;
  min-height: 830px;
}
.addMain {
  padding: 0 80px;
  font-size: 18px;
  color: #333;
  .row {
    padding: 10px 0;
    display: flex;
    align-items: center;
    // 左侧：文本
    .text {
      width: 20%;
      text-align: right;
      padding-right: 10px;
    }
    // 右侧：输入框
    .iptBox {
      width: 80%;
      input {
        width: 100%;
        padding: 10px;
        height: 18px;
        border-radius: 3px;
      }
      textarea {
        width: 100%;
        padding: 10px;
        height: 98px;
      }
      select {
        width: 50%;
        height: 38px;
      }
      button {
        width: 200px;
        height: 38px;
        background: #41b833;
        color: #fff;
        margin-left: 30%;
      }
    }
  }
}
.blShowBox {
  font-size: 22px;
  color: #555;
  padding: 50px 0 30px;
  text-align: center;
  border-top: 1px solid #999;
  margin-top: 30px;
}
</style>
