<template>
  <div class="footer">
      <!-- 这是底部区域 -->
     <div> 版权所有：<a href="https://github.com/YunXinZhiCheng">陨星之城</a> Copyright © 2019-2021 YunXinZhiCheng </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.footer {
  height: 70px;
  background: #2F6F52;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    opacity: 0.8;
    a{
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
