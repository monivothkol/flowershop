<script setup>
import { ref, onMounted } from 'vue'
import { productStore } from '@/store/ProductStore'
import ItemCard from '@/components/ItemCard.vue'

const useStore = productStore()
</script>

<template>
  <div class="md:grid md:grid-cols-2 ">
    <!-- Promotion -->        
     <div class="m-4 md:flex md:flex-col md:justify-center md:items-center md:border-r md:border-2">
        <h3 class="text-center text-white text-3xl ">Promotion</h3>
        <div class="grid grid-cols-2 mb-10 -mt-2">
        <ItemCard
            v-for="(product, index) in useStore.productList.slice(0, 4)"
            :key="`product-key${index}`"
            :title="product.title"
            :description="''"
            :price="product.price"
            :image="product.image"
            class="max-w-full scale-90"
        />
        </div>
     </div>
    

    <!-- trending -->
     <div class="m-4 md:flex md:flex-col md:justify-center md:items-center md:border-r md:border-2">
        <h3 class="text-center text-white text-3xl ">Promotion</h3>
        <div class="grid grid-cols-2 mb-10 -mt-2">
        <ItemCard
            v-for="(product, index) in useStore.productList.slice(0, 4)"
            :key="`product-key${index}`"
            :title="product.title"
            :description="''"
            :price="product.price"
            :image="product.image"
            class="max-w-full scale-90"
        />
        </div>
     </div>
  </div>
</template>

<style>
@import url('@/css/output.css');

h3 {
  color: rgb(255, 255, 255);
  text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
}

</style>