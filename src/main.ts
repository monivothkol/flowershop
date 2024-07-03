// import './assets/main.css'

import { createApp } from 'vue';
import router from './Router.js';
import { createPinia } from 'pinia'; // Import Pinia
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDYXeyKnrvlw2r0iP0k0KVxemzP78b5OQ",
  authDomain: "onlineshop-24654.firebaseapp.com",
  projectId: "onlineshop-24654",
  storageBucket: "onlineshop-24654.appspot.com",
  messagingSenderId: "825248574602",
  appId: "1:825248574602:web:7ad3f2580eb90de4895173",
  measurementId: "G-B5JDCTMDC3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(initializeApp(firebaseConfig));




const app = createApp(App)
const pinia = createPinia();
app.use(router)
app.use(pinia)
app.mount('#app')