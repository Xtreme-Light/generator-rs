import User from '../layouts/User.vue'
import Posts from '../pages/Posts.vue'

export const routes = [
    {
        path: '/',
        component: ()=> import('../pages/HomePage.vue'),
    },
    {
        path: '/user',

        // we use /src/layouts/User component which is imported above
        component: User,

        // hey, it has children routes and User has <router-view> in it;
        // It is really a Layout then!
        children: [
            // Profile page
            {
                path: 'profile', // here it is, route /user/profile
                component: () => import('../pages/Profile.vue') // we reference /src/pages/Profile.vue imported above 懒加载
            },

            // Posts page
            {
                path: 'posts', // here it is, route /user/posts
                component: Posts // we reference /src/pages/Posts.vue imported above
            }
        ]
    }
]