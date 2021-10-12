<template>
  <div class="header">
    <!-- 这是头部区域 -->
    <div class="logo" @click="clickLogo">
      <img src="@/assets/images/logo.png" alt="" />
      <div class="text">
        <span>VueJS</span>
        简易博客
      </div>
    </div>
    <div class="nav">
      <!-- <a href="#" class="active">博客列表</a> -->
      <!-- <a href="#">添加博客</a> -->

      <router-link to="/show">博客列表</router-link>
      <router-link to="/add">添加博客</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickLogo() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style lang="less" scoped>
.header {
  height: 80px;
  background: #41b883;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      height: 60px;
    }
    .text {
      color: #fff;
      font-size: 20px;
      padding-left: 10px;
      span {
        display: block;
        font-size: 14px;
        opacity: 0.7;
      }
    }
  }
  .nav {
    display: flex;
    a {
      display: block;
      border-radius: 5px;
      padding: 5px 20px;
      color: #fff;
      font-size: 18px;
      margin-left: 10px;
      &:hover,
      &.active {
        color: #41b883;
        background: #fff;
      }
    }
  }
}
</style>
