import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue'; // Import nextTick for DOM synchronization
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import DonateView from '@/views/DonateView.vue';
import ProgramView from '@/views/ProgramView.vue';
import NewsStory from '@/views/NewsStory.vue';
import programDetail from '@/components/Program/ProgramDetail.vue';
import DetailTeam from '@/components/about/DetailTeam.vue';
import TeamSection from '@/components/about/TeamSection.vue';
import ProgramEdu from '@/components/Program/ProgramEdu.vue';
import ProgramCare from '@/components/Program/ProgramCare.vue';
import ProgramTraining from '@/components/Program/ProgramTraining.vue';
import ProgramGiving from '@/components/Program/ProgramGiving.vue';
import SuccessStory from '@/components/News/SuccessStory.vue';
import StoryDetailPage from '@/components/News/StoryDetailPage.vue';
import GalleryView from '@/views/GalleryView.vue';
import Activities from '@/views/Activities.vue';
import CardDetail from '@/components/home/CardDetail.vue'; 

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'about', name: 'About', component: About },
      { path: 'contact', name: 'Contact', component: ContactView },
      { path: 'donate', name: 'Donate', component: DonateView },
      { path: 'education', name: 'education', component: ProgramEdu },
      { path: 'care', name: 'care', component: ProgramCare },
      { path: 'training', name: 'training', component: ProgramTraining },
      { path: 'givingBack', name: 'givingBack', component: ProgramGiving },
      { path: 'program', name: 'Program', component: ProgramView },
      { path: 'newstory', name: 'News', component: NewsStory },
      { path: 'gallery', name: 'gallery', component: GalleryView },
      { path: 'team', name: 'TeamSection', component: TeamSection },
      { path: 'team/:id', name: 'DetailTeam', component: DetailTeam, props: true },
      { path: 'success-story', name: 'SuccessStory', component: SuccessStory },
      { path: 'success-story/:id', name: 'StoryDetail', component: StoryDetailPage, props: true },
      { path: '/Admin', name: 'Activities', component: Activities },

      {
        path: 'card-detail/:type/:name',
        name: 'CardDetail',
        component: CardDetail,
        props: true 
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      window.scrollTo(0, 0); 
    }
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return nextTick().then(() => {
        const element = document.querySelector(to.hash);
        if (element) {
          const header = document.querySelector('header'); 
          const offset = -(header ? header.offsetHeight : 80); 
          const content = element.querySelector('.content'); 
          const position = content
            ? content.getBoundingClientRect().top + window.scrollY + offset
            : element.getBoundingClientRect().top + window.scrollY + offset;
          return {
            top: position,
            behavior: 'auto', 
          };
        } else {
          console.warn(`Element with selector ${to.hash} not found, scrolling to top`);
          return { top: 0, behavior: 'auto' };
        }
      });
    } else {
      return { top: 0, behavior: 'auto' };
    }
  },
});

export default router;