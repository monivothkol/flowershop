<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import ItemCard from '@/components/ItemCard.vue'
import FooterSection from '@/components/FooterSection.vue'
import HomeItemGroup from '@/components/HomeItemGroup.vue'
import { productStore } from '@/store/ProductStore'

const useStore = productStore()
</script>

<template>
  <Banner />
  <div class="content-background">
    <!-- Home popular -->
    <div class="flex justify-center p-5 pt-10">
      <h2 class="text-3xl md:text-5xl drop-shadow-lg text-teal-200">Popular</h2>
    </div>
    <div
      class="container-xl mx-auto ml-4 pb-10 grid grid-rows-1 grid-flow-col gap-4  overflow-scroll overscroll-x-contain"
    >
      <ItemCard
        v-for="(product, index) in useStore.productList"
        :key="`product-key${index}`"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </div>
    <!-- second section -->
    <HomeItemGroup />
    <FooterSection />
  </div>
  <!-- Footer -->
</template>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import '../css/output.css';

.content-background {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(../assets/pic/flowerflow.gif);
}

h2 {
  font-family: 'Space Mono', monospace;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
