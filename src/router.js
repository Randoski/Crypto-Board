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
        path: '/learn',
        name: 'Learn',
        component: () => import('./views/Learn.vue'),
    },

    {
        path: '/coin',
        name: 'Coin',
        component: () => import('./views/Coin.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
