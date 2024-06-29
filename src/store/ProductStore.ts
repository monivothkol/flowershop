import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
}

export const productStore = defineStore('counter', () => {
    // const count = ref(0)
    const name = ref('Eduardo')
    const productList = ref<Product[]>([]);

     async function fetchProduct() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        productList.value = data
        console.log(productList.value[0])
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    return { name, productList, fetchProduct }

  })