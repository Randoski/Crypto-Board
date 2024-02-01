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
        path: '/coin/:id',
        name: 'Coin',
        component: () => import('./views/Coin.vue'),
    },

    // Favorites
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import('./views/Favorites.vue'),
    },

    // Blog
    {
        path: '/news',
        name: 'News',
        component: () => import('./views/News.vue'),
    },

    {
        path: '/read:id', 
        name: 'ReadNews', 
        component: () => import('./views/ReadNews.vue'),
        props: true

    },

// 404 Page
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: () => import('./views/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
