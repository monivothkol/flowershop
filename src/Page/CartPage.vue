<!-- CartPage.vue -->
<template>

      <div class="bg-gray-300 h-screen pb-10">
        <div class="w-10/12 mx-auto relative">
          <h2 class="text-center text-white text-3xl p-4 bg-gray-700 rounded-b-3xl">Shopping Cart</h2>
          <div v-if="cart.length > 0">
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

            <div class="bg-white w-2/12 absolute right-28 mt-1 top-16 p-4 rounded-xl">
              <h1 class="text-bold text-lg pb-2">Your order summary</h1>
              <div class="grid grid-cols-2">
                <p>Sub total</p>
                <p>{20la}</p>
              </div>
              <div class="grid grid-cols-2">
                <p>Tax</p>
                <p>{20la}</p>
              </div>
              <div class="grid grid-cols-2">
                <p>Discount</p>
                <p>{10la}</p>
              </div>
              <div class="grid grid-cols-2 pt-4 items-center">
                <p>Total</p>
                <p class="text-bold text-xl">{100la}</p>
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
  const cartStore = useCartStore();
  const { cart, removeFromCart } = cartStore;
  </script>
  
  <style scoped>
  @import '../css/output.css';
  </style>
  