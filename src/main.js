// src/main.js
import './assets/tailwind.css';
import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const isLoggedIn = ref(false);

const app = createApp(App);
app.provide('isLoggedIn', isLoggedIn);
AOS.init({ duration: 1000, once: true });
app.use(router).mount('#app');