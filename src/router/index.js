import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Index.vue')
  },
  {
    path: '/quill',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Quill.vue')
  },
  {
    path: '/toast',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Toast.vue')
  },
  {
    path: '/tiptap',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TipTap.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
