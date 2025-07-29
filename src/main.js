import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



const app = createApp(App)
AOS.init({ duration: 1000, once: true })
app.use(router)

app.mount('#app')
