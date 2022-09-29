import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vueAxios from 'vue-axios';
import { Request } from './service/request';
import { createPinia } from "pinia"
import router from  './router/router';
const app = createApp(App as any)

app
.use(router)
.use(createPinia())
.use(vueAxios,Request.init())
.mount('#app')
 