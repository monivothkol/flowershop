// import './assets/main.css'

import { createApp } from 'vue';
import router from './Router';
import { createPinia } from 'pinia'; // Import Pinia
import App from './App.vue'


const app = createApp(App)
const pinia = createPinia();
app.use(router)
app.use(pinia)
app.mount('#app')