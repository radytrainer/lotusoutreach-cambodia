
import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Education from '@/components/Education.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'about', name: 'About', component: About },


      { path: 'education/:id', name: 'Education', component: Education },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;