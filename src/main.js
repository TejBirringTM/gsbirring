// style
import("./assets/css/reset.css");
import("./assets/css/global.scss");
import("./assets/css/feather-icons.css");

// smooth scroll
import VueSmoothScroll from 'vue3-smooth-scroll'

// app
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRouterLayout from 'vue-router-layout'

createApp(App)
    .use(VueRouterLayout)
    .use(router)
    .use(VueSmoothScroll)
    .mount('#app');
