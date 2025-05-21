import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../layouts/Standard.vue'),
        meta: {
            title: '首页'
        },
        children: [
            {
                path: 'database', component: () => import('../pages/DatabaseList.vue'), meta: {
                    title: '数据库'
                },
            },
            {
                path: 'home', component: () => import('../pages/HomePage.vue'), meta: {
                    title: '主页'
                },
            },
            {
                path: 'setting', component: () => import('../pages/Setting.vue'), meta: {
                    title: '设置'
                },
            },
            {
                path: 'help', component: () => import('../pages/Help.vue'), meta: {
                    title: '帮助'
                },
            },
        ]
    },
]