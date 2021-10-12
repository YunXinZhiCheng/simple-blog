# 简易博客
## 项目简介

- 一个基于 Vue2+Vue-cli 技术搭建的简易博客 Web 项目

- 实现博客列表展示、添加发表、实时预览、上下翻页等功能的开发

### 技术栈

- Vue2.6

- Vue-cli

- Vue Router

- Axios

- ES6+

- Less

### 功能预览

博客列表

![](https://secure.wostatic.cn/static/o9fQK2dJYvBqaeY69TKLYn/截屏2021-10-12 17.19.46.png)

博客添加

![](https://secure.wostatic.cn/static/K8GA8X6SP1k1h1uAtE2tS/截屏2021-10-12 17.21.20.png)

博客发表

![](https://secure.wostatic.cn/static/wEuaRyUmWwywmngx3EM7j9/截屏2021-10-12 17.28.01.png)

博客预览

![](https://secure.wostatic.cn/static/gEnzUtRfeKczqMddEDXsYk/截屏2021-10-12 17.27.48.png)

博客翻页

![](https://secure.wostatic.cn/static/qCtRt39EyZDgyoSi25ShQg/截屏2021-10-12 17.28.35.png)

## 项目开发

1. 项目初始化（ Init）

  1. 创建运行

    - vue create

  1. 清空相关

    - 删除无关的初始化组件等

  1. 引入文件

    - 静态资源 

1. 创建区域结构（components）

  - 头部组件 HdView

  - 中心组件 ShowView

  - 底部组件 FtView 

1. 对应样式布局（less）

  1. 头部区域 header

  2. 底部区域 footer

1. 中心区域（重点）

  - 博客列表 ShowView

    - 引入独立组件

  - 独立组件 BlogItem

    - 上面：标题+时间        =>top   

    - 中间:   内容                   =>center 

    - 下面:   列表+作者        =>info

    

1. 父组件向子组件的不同传值方式 （props）

  - 单独传值

    - 数字类型 Number

    - 字符串类型 String

  - 整体传值

    - 对象类型

1. 获取真实数据（遍历列表）

  1. 生命周期 created

  2. 接口请求 axios

    - 安装 -S

    - 引入 import

    - 使用 axios({url}).then()

```JavaScript
data(){
return {
   listArr: [] // 列表默认空数组
  }
}
created() {
    axios({
     // method:'Get', // 默认Get请求（可省略） 
      url: 'https://ku.qingnian8.com/dataApi/qingKu/getList.php',
    }).then((res) => {
      console.log(res)
      this.listArr = res.data
    })
  },
```

1. 获取真实数据（一一对应）

  1. 标题 title

  2. 时间 time

  3. 内容 content

  4. 分类 classify

  5. 作者 author

1. 布局分页样式（CSS）

  1. 上一页 &lt;

  2. 下一页 &gt;

1. 实现翻页效果（点击）

  1. 上一页` page— `

  2. 下一页` page++`

1. 优化翻页效果（Chrome API）

  - 封装滚动函数 scrTop

  - 实现思路判断 scrollTop

1. 数据加载提示

  1. toast提示结构

  2. fixed 固定定位

  3. rgba()遮罩效果

  4. v-show 默认隐藏 showToast:false

1. 创建公共JS

  - 格式化时间戳

    - 年 月 日 时 分 秒

    - 补0操作

    - 日期显示类型

  - 区分

    - php 10位

    - JS 13位

  - 网络搜索（复制粘贴）

    - 百度：

    - 时间转日期

    - 谷歌

  - 封装方法（common.js）

```JavaScript
// 时间戳格式化日期格式
export default {
    // 字符串长度处理
    getStrLen(str, len) {
        if (str.length > len) {
            return str = str.substr(0, len) + '...'
        } else {
            return str
        }
    },
    // 时间戳转换
    myDate(value, type = 0) {
        var time = new Date(value * 1000);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var second = time.getSeconds();
        // 补0操作
        month = month < 10 ? "0" + month : month;
        date = date < 10 ? "0" + date : date;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        // 日期显示类型，默认是arr[0]
        var arr = [
            year + "-" + month + "-" + date,
            year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second,
            year + "年" + month + "月" + date,
            year + "年" + month + "月" + date + " " + hour + ":" + minute + ":" + second,
            hour + ":" + minute + ":" + second
        ]
        return arr[type];
    }

}
```

1. 添加博客页面

  1. 创建组件 AddBlog

  2. 样式布局

  3. 表单数据的双向绑定

  4. 添加博客到数据库

1. 通过配置路由实现跳转

2. 路由详解及应用

  1. 基础

  2. 进阶

1. 项目整合知识点

  - 全局使用axios（main.js）

  - 按需引入JS

## 项目配置与部署

- 配置

  - eslint

  - vue.config.js

- 部署

  - 手动或者自动部署在Vercel平台上

  
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
