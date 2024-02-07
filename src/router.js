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

    // Gainers
    {
        path: '/gainers',
        name: 'Gainers',
        component: () => import('./views/Gainers.vue'),
    },

    // Losers
    {
        path: '/losers',
        name: 'Losers',
        component: () => import('./views/Losers.vue'),
    },

    // Stable
    {
        path: '/stablecoin',
        name: 'Stablecoin',
        component: () => import('./views/Stablecoin.vue'),
    },

    // Defi
    {
        path: '/defi',
        name: 'Defi',
        component: () => import('./views/Defi.vue'),
    },

    // Nft
    {
        path: '/nft',
        name: 'Nft',
        component: () => import('./views/Nft.vue'),
    },

    // Dex
    {
        path: '/dex',
        name: 'Dex',
        component: () => import('./views/Dex.vue'),
    },

    // Exchange
    {
        path: '/exchange',
        name: 'Exchange',
        component: () => import('./views/Exchange.vue'),
    },

    // Staking
    {
        path: '/staking',
        name: 'Staking',
        component: () => import('./views/Staking.vue'),
    },

    // Dao
    {
        path: '/dao',
        name: 'Dao',
        component: () => import('./views/Dao.vue'),
    },

    // Meme
    {
        path: '/meme',
        name: 'Meme',
        component: () => import('./views/Meme.vue'),
    },

    // Privacy
    {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('./views/Privacy.vue'),
    },

    // Metaverse
    {
        path: '/metaverse',
        name: 'Metaverse',
        component: () => import('./views/Metaverse.vue'),
    },

    // Gaming
    {
        path: '/gaming',
        name: 'Gaming',
        component: () => import('./views/Gaming.vue'),
    },

    // Wrapped
    {
        path: '/wrapped',
        name: 'Wrapped',
        component: () => import('./views/Wrapped.vue'),
    },

    // Layer 1
    {
        path: '/layer-1',
        name: 'Layer1',
        component: () => import('./views/Layer1.vue'),
    },

    // Layer 2
    {
        path: '/layer-2',
        name: 'Layer2',
        component: () => import('./views/Layer2.vue'),
    },

    // FanToken 2
    {
        path: '/fan-token',
        name: 'FanToken',
        component: () => import('./views/FanToken.vue'),
    },

    // Football Club
    {
        path: '/football-club',
        name: 'FootballClub',
        component: () => import('./views/FootballClub.vue'),
    },

    // Web3
    {
        path: '/web3',
        name: 'Web3',
        component: () => import('./views/Web3.vue'),
    },

    // Social
    {
        path: '/social',
        name: 'Social',
        component: () => import('./views/Social.vue'),
    },
    

    // Favorites
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import('./views/Favorites.vue'),
    },

    // News
    {
        path: '/news',
        name: 'News',
        component: () => import('./views/News.vue'),
    },

    // Article page
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
