import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
    {
        path: '/skills',
        name: 'skills',
        component: () => import('@/views/SkillsView.vue')

    }
    ],
});

export default router