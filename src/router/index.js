import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films'
import Cinemas from '@/views/Cinemas'
// import Center from '@/views/Center'
import Nowplaying from '@/views/films/Nowplaying'
import Comingsoon from '@/views/films/Comingsoon'
import Detail from '@/views/Detail'
// import Oreder from '@/views/films/Order'
import Login from '@/views/films/Login'
import Search from '@/views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    component: Films,
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    name:'detail',
    path: '/detail',
    component: Detail
  },
  {
    path: '/cinemas',
    component: Cinemas
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/center',
    // component: Center,
    component: ()=> import('@/views/Center'),//懒加载
    meta:{
      isKerwinRequired: true
    }
  },
  {
    path: '/order',
    // component: Oreder,
    component: ()=>import('@/views/films/Order'),//懒加载
    meta:{
      isKerwinRequired: true
    }
  },
  // 重定向
  {
    path: '*',
    redirect: '/films'
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  { name: 'kerwinDetal',
    path: '/detail/:id',//动态的二级路由
    component: Detail
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//全局拦截（守卫）
router.beforeEach((to,from,next)=>{
  console.log(to.fullPath)
  if(to.meta.isKerwinRequired){
    if(localStorage.getItem('token')){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router
