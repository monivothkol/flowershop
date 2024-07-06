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

export interface Accessory { 
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
    const accessoryList = ref<Product[]>([]);
    const menClothing = ref<Product[]>([]);
    const womenClothing = ref<Product[]>([]);
    const electronic = ref<Product[]>([]);

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

    async function fetchAccessory() {
      try {
        const res = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const data = await res.json() as Product[]; 
        accessoryList.value = data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
      console.log(`this is` + accessoryList)
    }
    async function fetchMen() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        const data = await res.json() as Accessory[]; 
        menClothing.value = data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    async function fetchWomen() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        const data = await res.json() as Product[]; 
        womenClothing.value = data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    async function fetchElectronic(){
      try {
        const res  = await fetch("https://fakestoreapi.com/products/category/electronics");
        const data = await res.json() as Product[];
        electronic.value = data
      } catch(error){
        console.error('error fetching electronic: ', error)
      }
    }
    onMounted(() => {
      fetchProduct();
      fetchAccessory();
      fetchMen();
      fetchWomen();
      fetchElectronic();
    })
    return { productList, accessoryList, menClothing, womenClothing, electronic, fetchProduct, fetchAccessory, addToCart: cartStore.addToCart }

  })

