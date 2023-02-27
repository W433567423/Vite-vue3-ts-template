import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    component: () => import('../views/main/main.vue'),
  },
  {
    path: '/about',
    component: () => import('../views/about/about.vue'),
  },
]
const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
