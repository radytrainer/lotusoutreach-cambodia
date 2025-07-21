import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// main.js 
import '@fortawesome/fontawesome-free/css/all.min.css';


const app = createApp(App)

app.use(router)

app.mount('#app')
