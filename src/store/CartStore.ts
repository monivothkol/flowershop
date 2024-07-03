// stores/cartStore.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product } from '@/store/ProductStore';

export interface CartItem extends Product {
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([]);

  function addToCart(product: Product) {
    const existingItem = cart.value.find(item => item.id == product.id);
    console.log(product)
    if (existingItem) {
      existingItem.quantity++;
      
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  }

  function decreaseItem(product: Product) {
    const existingItem = cart.value.find(item => item.id == product.id);
    console.log(product)
    if (existingItem) {
      if (existingItem.quantity > 0) {
        existingItem.quantity--;
      }}
  }
  function removeFromCart(product: Product) {
    const index = cart.value.findIndex(item => item.id === product.id);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  }

  const itemTotalAmount = computed(() =>
    cart.value.map(item => ({
      ...item,
      totalAmount: item.quantity * item.price,
    }))
  );

  const totalFinalPrice = computed(() =>
    cart.value.reduce((total, item) => total + item.quantity * item.price, 0)
  );



  return { cart, addToCart, removeFromCart, decreaseItem, itemTotalAmount, totalFinalPrice };
});
