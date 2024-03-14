import { createRouter, createWebHistory } from 'vue-router'
import LangView from '../views/LangView.vue'

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {
        path: '/en'
      }
    },
    {
      path: '/:lang',
      name: 'lang',
      component: LangView
    }
  ]
})

export default router
