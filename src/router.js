// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // Cryptocurrencies
    {
        path: '/',
        name: 'Cryptocurrencies',
        component: () => import('./views/Cryptocurrencies.vue'),
    },

    {
        path: '/home',
        name: 'Home',
        component: () => import('./views/Home.vue'),
    },

    {
        path: '/page',
        name: 'Page',
        component: () => import('./views/Page.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
