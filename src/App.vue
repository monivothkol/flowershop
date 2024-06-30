<script setup lang="ts">

// import HomePage from './Page/HomePage.vue'
// import EventPage from './Page/EventPage.vue'
import Navbar from './components/Navbar.vue'

</script>

<template>

    <div class="overflow-hidden">
        <Navbar />
        <router-view/>
    </div>
    

    <!-- <HomePage /> -->
   


</template>

<style scoped lang="css">
@import "./css/output.css";

</style>
