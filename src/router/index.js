import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'detail',
      component: Detail
    },
  ]
})

export default router
