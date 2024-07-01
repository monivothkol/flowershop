import { createRouter, createWebHistory } from 'vue-router';

// Assuming you have these component files in the Page directory
import Accessory from './Page/Accessory.vue';
import Women from './Page/Women.vue';
import Men from './Page/Men.vue';
import TrendingEvent from './Page/TrendingEvent.vue';
import HomePage from './Page/HomePage.vue';
import CartPage from './Page/CartPage.vue';

const routes = [
  { path: '/', name: 'homedefault', component: HomePage},
  { path: '/home', name: 'homepage', component: HomePage },
  { path: '/accessory', name: 'accessory', component: Accessory },
  { path: '/women', name: 'women', component: Women }, 
  { path: '/men', name: 'men', component: Men },
  { path: '/trendingevent', name: 'trendingevent', component: TrendingEvent },
  {path: '/cart', name: 'cart', component: CartPage }
];

const router = createRouter({
  // Use the history API for routing (recommended)
  history: createWebHistory(),
  routes,
});

export default router;
