<!-- CartPage.vue -->
<template>

      <div class="bg-gray-300  pb-10">
        <div class="w-10/12 mx-auto xl:w-7/12 h-auto">
          <h2 class="text-center text-white text-3xl p-4 bg-gray-700 rounded-b-3xl">Shopping Cart</h2>
          <div v-if="cart.length > 0" class="mt-4 flex flex-col items-center">
            <div class="rounded-3xl w-full h-auto  mx-auto bg-white lg:w-10/12 xl:w-8/12 ">
              <div class="flex flex-row justify-between py-4 px-4">
                <div>
                  <h1>Product</h1>
                </div>
                <div>
                  <h1>Detail</h1>
                </div>
                <div>
                  <h1>Total</h1>
                </div>
              </div>
              
              <div v-for="(item, index) in cart" :key="`product-key${index}`">
                <CartItem
                :id="item.id"
                :tittle="item.title"
                :price="item.price"
                :quantity="item.quantity"
                :image="item.image"
                :class="{ 'border-b-4': index !== cart.length - 1 }" 
                />
              </div>
              
            </div>

            <div class="bg-white w-full mt-2 p-4 rounded-xl md:w-7/12">
              <h1 class="text-bold text-lg pb-2">Your order summary</h1>
              <div class="grid grid-cols-2">
                <p>Total</p>
                <p>{{ totalPrice.toFixed(2) }} USD</p>
              </div>
              <div class="grid grid-cols-2">
                <p>Tax</p>
                <p>10%</p>
              </div>
              <div class="grid grid-cols-2">
                <p>Discount</p>
                <p>0.00</p>
              </div>
              <div class="grid grid-cols-2 pt-4 items-center">
                <p>Total</p>
                <p class="text-bold text-xl">{{(totalPrice + totalPrice*0.1).toFixed(2)}} USD</p>
              </div>

            </div>
          </div>
          <div v-if="cart.length <= 0">
            <p class="text-center pt-12">
              No item added to cart
            </p>
          </div>
        </div>
        
        
      </div>
      


  </template>
  
  <script setup lang="ts">
  import { useCartStore } from '@/store/CartStore';
  import CartItem from '@/components/CartItem.vue';
  import {computed }from 'vue'
  const cartStore = useCartStore();
  const { cart, removeFromCart } = cartStore;
  const totalPrice = computed(() => cartStore.totalFinalPrice) as unknown as number;
</script>
  
  <style scoped>
  @import '../css/output.css';
  </style>
  