import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from  'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import '@/style/index.scss'
import '@/assets/scss/index.scss'
const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
