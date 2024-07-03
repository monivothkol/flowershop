<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/store/CartStore'
import ButtonCustome from '@/components/ButtonCustom.vue'
const cartStore = useCartStore()
// const { cart, removeFromCart } = cartStore

const props = defineProps({
    id:{
        type: Number
    },
    tittle: {
        type: String
    },
    image:{
        type: String
    },
    price: {
        type: Number
    },
    quantity:{
        type: Number
    },
    totalprice:{
        type: Number
    }
})
const addToCart = () => {
  cartStore.addToCart({
    id: props.id,
    tittle: props.tittle,
    price: props.price,
    image: props.image
  });
};
const decreaseItem = () => {
  cartStore.decreaseItem({
    id: props.id,
    tittle: props.tittle,
    price: props.price,
    image: props.image
  });
};
const totalPrice = computed(() => {
  return (props.price * props.quantity).toFixed(2);
});

</script>

<template>
  <div class="w-full bg-transparent h-48 grid grid-cols-7 items-center">
    <div class="col-span-2 overflow-hidden  flex justify-center items-center">
      <img :src="props.image" alt="" class="h-40 w-38 rounded-xl border-4"/>
    </div>
    <div class="p-4 col-span-2">
      <h1>{{ props.tittle }}</h1>
      <form action="">
        <select class="" name="color" id="color">
          <option value="White">White</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
        </select>
      </form>
    </div>

    <div class="text-center">
      <h1>$ {{ props.price }}</h1>
    </div>

    <div class="flex justify-center">
      <button class=" px-2 h-8 rounded border-2" @click="decreaseItem">-</button>
      <p class="mx-3 mt-1">{{ props.quantity }}</p>
      <button class=" px-2 h-8 rounded border-2" @click="addToCart">+</button>
    </div>
    
    <div class="flex justify-center">
      <h1>USD {{totalPrice }}</h1>
    </div>
  </div>
</template>
