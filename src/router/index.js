
import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import Education from '@/components/Education.vue';
import DonateView from '@/views/DonateView.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'about', name: 'About', component: About },
      {path: 'contact', name: 'Contact', component: ContactView },


      { path: 'education/:id', name: 'Education', component: Education },
      {path: 'donate', name: 'Donate', component: DonateView},
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;