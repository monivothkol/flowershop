<script>

// const navBarOpen = ref(false);
  export default {

    components:{
        
    },
      data(){
        return{
          navBarOpen: false,
          links: [
            {name: 'Home', link:"#" ,pageName: "/"},
            {name: 'Categories', link: "#", pageName: "/categories"},
            {name: 'By color', link: "#", pageName: "/color"},
            {name: 'Events', link: "#", pageName: "/eventpage"},
            {name: 'Pricing', link: "#", pageName: "/pricing"}
          ]
        }
      },
    methods:{
      openMenu(){
          this.navBarOpen = !this.navBarOpen;
          console.log(`log in method ${this.navBarOpen}`)
      },
    }

  }

</script>

<template>

<div class="mx-auto dark" >
  <nav class="bg-white border-xl border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap md:flex-row items-center justify-between mx-auto p-4 lg:pl-10 lg:pr-10 md:pl-10 md:pr-10">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse ">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowerose</span>
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
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
        :class="navBarOpen ? '' : 'hidden'"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      </button>
      <div class="w-full flex justify-end md:block md:w-auto" id="navbar-dropdown">
        <ul class="md:flex flex flex-col font-medium p-4 md:p-0 mt-4 space-x-8  md:flex-row md:mt-0"
            :class="navBarOpen ? 'flex flex-col item-end :bg-gray-900 bg-gray-700 items-end w-4/5 rounded-2xl' : 'hidden'"
        >
        <li v-for="link in links" class="hover:bg-sky-700 rounded-xl md:w-auto w-full text-right">
          <router-link :to="link.pageName" class="block py-2 px-2 text-white ">{{link.name}}</router-link>
        </li>
       
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
        


</div>  


</template>

<style>
@import '../css/output.css';

</style>