import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from './App.vue'
import './style.css';
import SplitCarousel from "vue-split-carousel";


createApp(App)
    .use(router)
    .use(store)
    .use(SplitCarousel)
    .mount('#app');

