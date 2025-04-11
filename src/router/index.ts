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

    },
      {
          path: '/projects',
            name: 'ProjectsView',
            component: () => import('@/views/ProjectsView.vue')
      },
      {
          path: '/projects/:id',
          name: 'ProjectDetail',
          component: () => import('@/views/ProjectDetailView.vue')
      },
      {
          path: '/aboutMe',
            name: 'AboutMeView',
            component: () => import('@/views/AboutMeView.vue')
      }
  ],

});

export default router