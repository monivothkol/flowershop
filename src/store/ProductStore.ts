import { defineStore } from 'pinia';
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '@/store/CartStore';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const productStore = defineStore('counter', () => {
    // const count = ref(0)
    // const name = ref('Eduardo')
    const productList = ref<Product[]>([]);
    const cartStore = useCartStore();


     async function fetchProduct() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json() as Product[]; 
        productList.value = data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    onMounted(() => {
      fetchProduct()
    })
    return { name, productList, fetchProduct, addToCart: cartStore.addToCart }

  })

