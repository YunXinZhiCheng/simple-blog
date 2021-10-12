import Vue from 'vue'
import VueRouter from 'vue-router'

// import ShowView from '@/components/ShowView'
// import AddBlog from '@/components/AddBlog'

// 路由懒加载
const ShowView = () => import('@/components/ShowView')
const AddBlog = () => import('@/components/AddBlog')

Vue.use(VueRouter)

const routes = [
  // 默认页面
  {
    path: '/',
    redirect: '/show' // 重定向
  },
  {
    path: '/show',
    component: ShowView
  },
  {
    path: '/add',
    component: AddBlog
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

export default router
