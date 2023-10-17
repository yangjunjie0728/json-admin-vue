
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets 
import './assets/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import axios from "axios";
axios.defaults.baseURL = "/sign/";


import App from './App.vue'
import router from './router'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
