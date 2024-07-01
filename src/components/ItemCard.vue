<script setup>
import ButtonCustom from '../components/ButtonCustom.vue'
import { useCartStore } from '@/store/CartStore';

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    id:{
      type: Number
    },
    price: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: 'No description provided'
    },
    image:{
      type: String,
      default: '#'
    }
  })
  const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart({
    id: props.id,
    title: props.title,
    price: props.price,
    description: props.description,
    image: props.image
  });
};

</script>

<template>
  <div class="w-56 lg:w-72 max-w-72 h-auto max-h-108 bg-white rounded-xl overflow-hidden flex flex-col items-center relative">
      <div class="h-48 md:h-58 w-48 overflow-hidden p-4  ">
        <img class="w-full h-full p-4" :src="image" />
      </div>

    <div class="px-6 py-4  pt-0">
      <div class="font-bold text-sm mb-2 max-h-10 overflow-hidden">{{ `${props.title}` }}</div>
      <p class="inline-block text-gray-700 text-base  mb-10 max-h-16 overflow-hidden text-xs">
        {{ props.description }}
      </p>
    </div>
    <div class="grid grid-cols-2 absolute bottom-0 right-0 ">
      <h3 class="pl-2 pt-4">{{ `${props.price} USD` }}</h3>
      <ButtonCustom class="text-sm" @click="addToCart">Add to Cart</ButtonCustom>
    </div>
  </div>
</template>
<style>
@import '../css/output.css';
</style>
