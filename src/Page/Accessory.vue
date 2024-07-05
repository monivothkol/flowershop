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
            v-for="(accessory, index) in useStore.accessoryList"
            :key="`product-key${index}`"
            :title="accessory.title"
            :description="accessory.description"
            :price="accessory.price"
            :image="accessory.image"
            :id="accessory.id"
        />
        </div>
    </div>
</div>

</template>

<style>
@import '@/css/output.css'

</style>