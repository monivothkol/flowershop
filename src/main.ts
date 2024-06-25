// import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { routes , router} from './Router'
import App from './App.vue'


const app = createApp(App);
// const router = createRouter({
//     history: createMemoryHistory(),
//     routes
// })
app.use(router)
app.mount('#app')
