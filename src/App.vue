<script setup lang="ts">

// import HomePage from './Page/HomePage.vue'
// import EventPage from './Page/EventPage.vue'
import { onMounted, ref } from 'vue';
import Navbar from './components/Navbar.vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

</script>

<template>

    <div class="overflow-hidden">
        <Navbar />
        <router-view/>
    </div>

</template>

<style scoped lang="css">
@import "./css/output.css";

</style>
