import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect:"/find",
        meta: {
            keepAlive: false
        },
        children:[
            {
                path: '/find',
                name: 'find',
                meta: {
                    keepAlive: true
                },
                component: () => import( '@/pages/pages/Find.vue')
            },
            {
                path: '/mv',
                name: 'mv',
                meta: {
                    keepAlive: true
                },
                component: () => import( '@/pages/pages/Mv.vue')
            },
            {
                path: '/sheet',
                name: 'sheet',
                meta: {
                    keepAlive: true
                },
                component: () => import( '@/pages/pages/Sheet.vue')
            },
            {
                path: '/singer',
                name: 'singer',
                meta: {
                    keepAlive: true
                },
                component: () => import( '@/pages/pages/Singer.vue')
            },
            {
                path: '/sort',
                name: 'sort',
                meta: {
                    keepAlive: true
                },
                component: () => import( '@/pages/pages/Sort.vue')
            },
            {
                path: '/video',
                name: 'video',
                meta: {
                    keepAlive: true
                },
                component: () => import( '@/pages/pages/Video.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router