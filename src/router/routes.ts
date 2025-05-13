import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../layouts/Standard.vue'),
        children: [
            { path: 'database', component: () => import('../pages/Database.vue') },
            { path: 'home', component: () => import('../pages/HomePage.vue') },
            { path: 'setting', component: () => import('../pages/Setting.vue') },
            { path: 'help', component: () => import('../pages/Help.vue') },
        ]
    },
]