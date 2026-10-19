import AuthView from '@/views/AuthView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "homa",
      component: HomeView,
      path: "/"
    },
    {
      name: "aurh",
      component: AuthView,
      path: "/auth/"
    }
  ],
})

export default router
