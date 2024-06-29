<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import ItemCard from '@/components/ItemCard.vue'
import FooterSection from '@/components/FooterSection.vue'
import {productStore}from '@/store/ProductStore'


const useStore = productStore()
onMounted(() => {
  useStore.fetchProduct();
})
</script>

<template>
  <Banner />
  <div class="content-background">
    <!-- Home popular -->
    <div class="flex justify-center p-5 pt-10">
      <h2 class="text-5xl drop-shadow-lg text-teal-200">Popular</h2>
    </div>
    <div class="container pb-10 grid grid-rows-1 grid-flow-col gap-4 mx-auto overflow-scroll overscroll-x-contain">
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
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-10 m-0">
        <div class="bg-gray-300 w-3/4 rounded-xl px-6 py-2 mr-0 place-self-end">
          <h2 class="text-3xl drop-shadow-lg text-teal-200 text-center p-4">Promotion</h2>
          <div class="grid grid-rows-2 grid-cols-2 gap-x-8 gap-y-4 mx-auto place-items-center overflow-hidden">
            <ItemCard
              v-for="(product, index) in useStore.productList.slice(0, 4)"
              :key="`product-key${index}`"
              :title="product.title"
              :description="product.description"
              :price="product.price"
              :image="product.image"
              class="scale-x-90"
            />
          </div>
        </div>
        <div class="bg-gray-300 w-3/4 rounded-xl px-6 py-2 place-self-start">
          <h2 class="text-3xl drop-shadow-lg text-teal-200 text-center p-4">Trending</h2>
          <div class="grid grid-rows-2 grid-cols-2 gap-x-8 gap-y-4 mx-auto place-items-center overflow-hidden">
            <ItemCard
              v-for="(product, index) in useStore.productList.slice(0, 4)"
              :key="`product-key${index}`"
              :title="product.title"
              :description="product.description"
              :price="product.price"
              :image="product.image"
              class="scale-x-90"
            />
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
  <!-- Footer -->
</template>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import '../css/output.css';

.content-background {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(../assets/pic/flowerflow.gif);
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
