import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
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

export default router;