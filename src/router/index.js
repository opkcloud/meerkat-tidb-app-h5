import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Home.vue'),
    // redirect: "/sentiment-analysis",
	children: [
		{
		  path: '/sentiment-analysis',
		  name: '情感分析',
		  component: () => import('@/views/sentiment-analysis.vue')
		},
		{
		  path: '/olap',
		  name: '数据分析',
		  component: () => import('@/views/olap.vue')
		}
	]
  },
  {
      path: '/:catchAll(.*)',
      name: 'error-404',
      meta: {
          hideInMenu: true
      },
      component: () => import('@/views/public/404.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
