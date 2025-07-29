import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import Education from '@/components/Education.vue';
import DonateView from '@/views/DonateView.vue';
import ProgramView from '@/views/ProgramView.vue';
import NewsStory from '@/views/NewsStory.vue';
import programDetail from '@/components/Program/ProgramDetail.vue';
import DetailTeam from '@/components/about/DetailTeam.vue';
import TeamSection from '@/components/about/TeamSection.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'about', name: 'About', component: About,
       
      },

      { path: 'contact', name: 'Contact', component: ContactView },
      { path: 'education/:id', name: 'Education', component: Education },
      { path: 'donate', name: 'Donate', component: DonateView },
      {
        path: 'program',
        name: 'Program',
        component: ProgramView,
        children: [
          { path: ':title', name: 'ProgramDetail', component: programDetail, props: true },
        ],
      },
      { path: 'newstory', name: 'News', component: NewsStory },
      {path: 'team', name: 'TeamSection',component: TeamSection},
      {path: 'team/:id', name: 'DetailTeam', component: DetailTeam, props: true },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes,
});

export default router;