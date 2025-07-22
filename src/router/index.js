
import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import Education from '@/components/Education.vue';
import DonateView from '@/views/DonateView.vue';
import NewsStory from '@/views/NewsStory.vue';

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
      {path: 'newstory', name: 'News', component: NewsStory},
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top of the page on route change
    return { top: 0 }
  },
  routes,
});

export default router;