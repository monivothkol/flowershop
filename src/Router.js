import { createRouter, createWebHistory } from 'vue-router';

// Assuming you have these component files in the Page directory
import HomePage from './Page/HomePage.vue';
import EventPage from './Page/EventPage.vue';
import PricingPage from './Page/PricingPage.vue';
import Categories from './Page/Categories.vue';
import Color from './Page/Color.vue';

const routes = [
  { path: '/', name: 'homedefault', component: HomePage},
  { path: '/home', name: 'homepage', component: HomePage },
  { path: '/eventpage', name: 'eventPage', component: EventPage },
  { path: '/color', name: 'colorPage', component: Color }, 
  { path: '/pricing', name: 'pricingPage', component: PricingPage },
  { path: '/categories', name: 'categoriesPage', component: Categories },
];

const router = createRouter({
  // Use the history API for routing (recommended)
  history: createWebHistory(),
  routes,
});

export default router;
