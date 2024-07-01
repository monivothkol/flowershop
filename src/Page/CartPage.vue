<!-- CartPage.vue -->
<template>

      <div class="bg-gray-300 h-auto pb-10">
        <h2 class="text-center text-white text-3xl p-4">Shopping Cart</h2>
        <div class="rounded-3xl mx-auto bg-white w-6/12">
          <div class="h-12 grid grid-cols-7 items-center">
          <div class="col-span-3 overflow-hidden  flex justify-center items-center">
            <p>Product</p>
          </div>
          <div>
            
          </div>
          <div class="text-center">
            <p>Price</p>
          </div>
          <div class="text-center">
            <p>Quantity</p>
          </div>
          <div  class="text-center">
            <p>Total price</p>
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
        
        
      </div>
      


  </template>
  
  <script setup lang="ts">
  import { useCartStore } from '@/store/CartStore';
  import CartItem from '@/components/CartItem.vue';
  const cartStore = useCartStore();
  const { cart, removeFromCart } = cartStore;
  </script>
  
  <style scoped>
  @import '../css/output.css';
  </style>
  