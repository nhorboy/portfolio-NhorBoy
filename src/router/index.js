import { createRouter, createWebHistory } from 'vue-router';

// Imports the views (pages)
import AboutView from '@/views/AboutView.vue';
import EducationView from '@/views/EducationView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import HobbiesView from '@/views/HobbiesView.vue';
const routes = [
  { 
    path: '/', 
    name: 'About', 
    component: AboutView 
  },
  { 
    path: '/education', 
    name: 'Education', 
    component: EducationView 
  },
  { 
    path: '/skills', 
    name: 'Skills', 
    component: SkillsView 
  },
  { 
    path: '/experience', 
    name: 'Experience', 
    component: ExperienceView 
  },
  { 
    path: '/portfolio', 
    name: 'Portfolio', 
    component: PortfolioView 
  },
  { 
    path: '/hobbies', 
    name: 'Hobbies', 
    component: HobbiesView 
  },
  {
    path: '/contact', // ផ្លូវ
    name: 'Contact', // ឈ្មោះ route
    component: () => import('../views/ContactView.vue') // ត្រូវតែចង្អុលទៅ component ត្រឹមត្រូវ
  }
  // បន្ថែម route ផ្សេងទៀតនៅទីនេះ
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // កំណត់ class សម្រាប់ style active link ក្នុង AppSidebar
  linkActiveClass: 'router-link-active',
});

export default router;