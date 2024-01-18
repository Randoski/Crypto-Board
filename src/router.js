// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // Cryptocurrencies
    {
        path: '/',
        name: 'Cryptocurrencies',
        component: () => import('./views/Cryptocurrencies.vue'),
    },

    // Learn
    {
        path: '/learn',
        name: 'Learn',
        component: () => import('./views/Learn.vue'),
    },

    // Coin
    {
        path: '/coin',
        name: 'Coin',
        component: () => import('./views/Coin.vue'),
    },

    // favorites
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import('./views/Favorites.vue'),
    },

    // 404
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('./views/404.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
