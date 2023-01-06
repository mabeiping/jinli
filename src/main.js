import { createApp } from 'vue'
import App from './App.vue'
import router from "./assets/js/router.js";
import store from "./assets/js/store.js"
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
createApp(App)
    .use(router)
    .use(store)
    // .use(ElementPlus)
    .mount('#app')
