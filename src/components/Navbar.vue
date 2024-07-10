<script setup>
import {ref, onMounted}from 'vue'
import Register from '@/Page/Register.vue'
import { useCartStore } from '@/store/CartStore';
const navBarOpen = ref(false)
const links = [
  { name: 'Home', link: '/home' },
  { name: 'Men', link: '/men' },
  { name: 'Women', link: '/women' },
  { name: 'Accessory', link: '/accessory' },
  { name: 'Trending Event', link: '/trendingevent' }
]

const openMenu = () => {
  navBarOpen.value = !navBarOpen.value;
  console.log(`Menu open status: ${navBarOpen.value}`);
};

// ..........................................................................................................................................
// for signout

import {useRouter} from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
let auth;
const isLoggedIn = ref(false);
const router = useRouter();

onMounted(()=>{
    auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
        if(user){
            isLoggedIn.value = true;
            console.log(isLoggedIn.value)
        }
        else isLoggedIn.value = false;
    });
    
    
})
const handleSignOut = () => {
    signOut(auth).then(()=>{
        router.push("/");
    })
}


// ................................................................................................................................................



</script>

<template>
  <div id="app">
    <div id="nav">
      <div class="mx-auto dark fixed w-full z-50">
        <nav class="bg-white border-xl border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div
            class="max-w-screen-xl flex flex-wrap md:flex-row items-center justify-between mx-auto p-4 lg:pl-10 lg:pr-10 md:pl-10 md:pr-10"
          >
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >Flowerose</span
              >
            </a>
            <button
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              @click="openMenu"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                :class="navBarOpen ? 'hidden' : ''"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                Box="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                :class="navBarOpen ? '' : 'hidden'"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div class="w-full flex justify-end md:block md:w-auto" id="navbar-dropdown">
              <ul
                class="md:flex flex flex-col font-medium p-4 md:p-0 mt-4 space-x-8 md:flex-row md:mt-0"
                :class="
                  navBarOpen
                    ? 'flex flex-col item-end :bg-gray-900 bg-gray-700 items-end w-4/5 rounded-2xl'
                    : 'hidden'
                "
              >
                <li
                  v-for="link in links"
                  class="hover:bg-sky-700 rounded-xl md:w-auto w-full text-right"
                >
                  <router-link :to="link.link" class="block py-2 px-2 text-white">{{
                    link.name
                  }}</router-link>
                </li>
                <router-link to="/cart" class="flex items-center relative"><i class="fa-solid fa-cart-shopping text-white text-center"></i>
                  <span v-if="useCartStore().cart.length > 0" class="absolute top-0 -right-4 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {{ useCartStore().cart.length }}
                  </span>
                </router-link>
                <router-link v-if="!isLoggedIn" to="/login" class="text-white text-xl text-center flex items-center">Login</router-link>

                <router-link v-if="!isLoggedIn" to="/register" class="text-white text-xl text-center flex items-center">Register</router-link>
                <router-link v-if="isLoggedIn" to="/userinfo" class="text-white text-xl text-center flex items-center">UserInfo</router-link>
                <button v-if="isLoggedIn" @click="handleSignOut" class="text-white">Sign Out</button>


              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
@import '../css/output.css';
</style>
