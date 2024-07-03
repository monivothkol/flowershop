<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/CartStore'
import ButtonCustome from '@/components/ButtonCustom.vue'
const cartStore = useCartStore()
// const { cart, removeFromCart } = cartStore

const props = defineProps({
  id: {
    type: Number
  },
  tittle: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  totalprice: {
    type: Number
  }
})
const addToCart = () => {
  cartStore.addToCart({
    id: props.id,
    tittle: props.tittle,
    price: props.price,
    image: props.image
  })
}
const decreaseItem = () => {
  cartStore.decreaseItem({
    id: props.id,
    tittle: props.tittle,
    price: props.price,
    image: props.image
  })
}
const removeFromCart = () => {
  cartStore.removeFromCart({
    id: props.id,
    tittle: props.tittle,
    price: props.price,
    image: props.image
  })
}
const totalPrice = computed(() => {
  return (props.price * props.quantity).toFixed(2)
})
</script>

<template>
  <div class="flex flex-row justify-between py-4 px-4">
    <div></div>
    <div class="w-20 h-24 border-4 rounded-xl flex items-center justify-center">
      <img :src="props.image" alt="" class="w-full h-full" />
    </div>
    <div
      class="w-24 content-center pl-2 border-l-2 md:w-72 xl:w-96 md:flex md:flex-row md:items-center"
    >
      <div>
        <h1 class="w-26 truncate xl:text-wrap md:w-48 xl:w-64 xl:text-xl">{{ props.tittle }}</h1>
        <form action="" class="">
          <select class="" name="color" id="color">
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
          </select>
        </form>
      </div>
      <div class="flex justify-center items-center  ">
        <button v-if="props.quantity > 1 " class="px-2 h-8 rounded border-2 bg-pink-300" @click="decreaseItem">-</button>
        <button v-if="props.quantity <= 1 " class="px-2 h-8 rounded border-2 bg-pink-300" @click="removeFromCart">-</button>

        <p class="mx-3 mt-1">{{ props.quantity }}</p>
        <button class="px-2 h-8 rounded border-2 bg-green-300" @click="addToCart">+</button>
      </div>
    </div>
    <div class="w-12 flex flex-col items-center justify-center border-l-2 pl-2 md:w-24">
      <p>{{ totalPrice }}</p>
      <p>USD</p>
    </div>
  </div>
</template>
