import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Assuming you have these component files in the Page directory
import Accessory from './Page/Accessory.vue';
import Women from './Page/Women.vue';
import Men from './Page/Men.vue';
import TrendingEvent from './Page/TrendingEvent.vue';
import HomePage from './Page/HomePage.vue';
import CartPage from './Page/CartPage.vue';
import Register from './Page/Register.vue';
import Login from './Page/Login.vue';
import UserPage from './Page/UserPage.vue';

const routes = [
  { path: '/', name: 'homedefault', component: HomePage},
  { path: '/home', name: 'homepage', component: HomePage },
  { path: '/accessory', name: 'accessory', component: Accessory },
  { path: '/women', name: 'women', component: Women }, 
  { path: '/men', name: 'men', component: Men },
  { path: '/trendingevent', name: 'trendingevent', component: TrendingEvent },
  {path: '/cart', name: 'cart', component: CartPage },
  {path: '/register', name: 'register', component: Register },
  {path: '/login', name:'login', component: Login},
  {path: '/userinfo', name:'user', component: UserPage, 
    meta:{
      requiresAuth: true,
    }
  }
];

const router = createRouter({
  // Use the history API for routing (recommended)
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
       const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener
          resolve(user)
        },
        reject
       )
  })
}

router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record)=>record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    } else{
      alert("No access to the page");
      next("/")
    }
  }else {next()};
}); 

export default router;
