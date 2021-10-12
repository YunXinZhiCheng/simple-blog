<template>
  <div class="itembox">
    <!-- 上 -->
    <div class="top">
      <h2>{{ itemObj.title }}</h2>
      <!-- 得到时间戳，后续需要转化 -->
      <div class="time">{{ getMyDate(itemObj.posttime) }}</div>
    </div>
    <!-- 中 -->
    <div class="center">
      <!-- 请大家友好交流，互相帮助！ 提问时请注意提供足够的信息。 -->
      {{ itemObj.content }}
    </div>
    <!-- 下 -->
    <div class="info">
      <div class="list">
        所属分类:
        <span>{{ itemObj.classify }}</span>
      </div>
      <div class="author">
        作者：
        <span>{{ itemObj.author }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// 引入公共JS
import common from '@/assets/js/common.js'
// console.log(common.getStrLen('123456789',5)); // 测试
// console.log(common.myDate(1627276813,2)); // 测试时间戳

export default {
  data() {
    return {}
  },
  // 接收对象
  props: {
    itemObj: {
      type: Object,
      default: function() {
        return ''
      },
    },
  },
  methods: {
    // 使用公共方法：时间戳
    getMyDate(time) {
      return common.myDate(time, 3)
    },
  },
}
</script>

<style lang="less" scoped>
.itembox {
  padding: 30px 0;
  // 上
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    h2 {
      font-size: 25px;
      color: #333;
      width: 750px;
      // 字符处理
      word-wrap: break-word;
      white-space: normal;
      word-break: break-all;
    }
    .time {
      font-size: 14px;
      color: #888;
    }
  }
  // 中
  .center {
    background: #f6f6f6;
    border-radius: 5px;
    padding: 15px 10px;
    font-size: 18px;
    line-height: 1.8em;
    color: #444;
    margin-bottom: 10px;
    // 字符处理
    word-wrap: break-word;
    white-space: normal;
    word-break: break-all;
  }
  // 下
  .info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #888;
    span {
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
