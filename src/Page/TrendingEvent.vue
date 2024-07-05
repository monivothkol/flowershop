<script setup>
import { productStore } from '@/store/ProductStore'
import ItemCard from '@/components/ItemCard.vue';
const useStore = productStore();
</script>


<template>
   <div class="bg-gray-200 h-screen">
    <div class="container mx-auto pt-10">
        <div
      class="container-xl mx-auto ml-4 pb-10 grid grid-rows-1 grid-flow-col gap-4  overflow-scroll overscroll-x-contain"
    >
        <ItemCard
            v-for="(electronic, index) in useStore.electronic"
            :key="`product-key${index}`"
            :title="electronic.title"
            :description="electronic.description"
            :price="electronic.price"
            :image="electronic.image"
            :id="electronic.id"
        />
        </div>
    </div>
</div></template>