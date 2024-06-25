import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './Page/HomePage.vue'
import EventPage from './Page/EventPage.vue'

export const routes = [
  { path: '/home', component: HomePage },
  { path: '/eventpage', component: EventPage },
  {path: '/color', component: EventPage},
  {path: '/pricing', component: EventPage},
  {path: '/categories', component: EventPage}
]

export const router = createRouter({
    history: createMemoryHistory(),
    mode: 'history',  
    routes,
  })