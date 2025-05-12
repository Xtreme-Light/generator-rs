import { createApp } from "vue";
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'

import App from "./App.vue";
import "./style.css";

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import quasarIconSet from 'quasar/icon-set/svg-bootstrap-icons'
// Import Quasar css
import 'quasar/src/css/index.sass'
// 设置路由
import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from './router/routes'

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(Quasar, {
        // import Quasar plugins and add here
        plugins: {},
        lang: quasarLang,
        iconSet: quasarIconSet,

    })
    .use(router)
    .mount("#app");
