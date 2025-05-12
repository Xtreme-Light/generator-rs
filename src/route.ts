// 路由配置
export const routes = [
    { path: "/", component: () => import("./pages/HomePage.vue") },
    { path: "/explore", component: () => import("./pages/ExplorePage.vue") },
    { path: "/login", component: () => import("./pages/LoginPage.vue") },
    { path: "/article/:id", component: () => import("./pages/ArticlePage.vue") },
    { path: "/setting", component: () => import("./pages/Setting.vue") },
    { path: '/:pathMatch(.*)*', component: () => import("./pages/404.vue") },
  ];