import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
  },

  {
    path: '/bookstore',
    component: () => import('../views/BookStore.vue')
  },
  {
    path: '/NovelDetail',
    component: () => import('../views/NovelWebContent.vue')
  },
  {
    path: '/FictionClassification',
    component: () => import('../views/FictionClassification.vue')
  },
  {
    path: '/ChangePwd',
    component: () => import('../views/ChangePwd.vue')
  },
  {
    path: '/Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Regist',
    component: () => import('../views/Regist.vue')
  },
]


const router = new VueRouter({
  routes
})

export default router
