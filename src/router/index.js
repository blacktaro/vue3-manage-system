import { createRouter, createWebHashHistory } from 'vue-router'
export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('views/login/Login.vue'),
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('views/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: () => import('views/home/Home.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '找不到页面',
    },
    component: () => import('views/404.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]
const hash = createWebHashHistory()
const router = createRouter({
  history: hash,
  routes,
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
