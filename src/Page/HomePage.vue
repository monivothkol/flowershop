<script lang="ts">
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import ItemCard from '../components/ItemCard.vue'
import FooterSection from '../components/FooterSection.vue'

export default {
  data() {
    return {
      productList: []
    }
  },

  components: {
    Navbar,
    Banner,
    ItemCard,
    FooterSection
  },
  methods: {
    async fetchProduct() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        this.productList = data
        console.log(this.productList[0])
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
  },
  created() {
    this.fetchProduct()
  }
}
</script>

<template>
  <navbar />
  
  <Banner />
  <div class="content-background">
    <!-- Home popular -->
    <div class="flex justify-center p-5 pt-10">
      <h2 class="text-5xl drop-shadow-lg text-teal-200">Popular</h2>
    </div>
    <div
      class="container pb-10 grid grid-rows-1 grid-flow-col gap-4 mx-auto overflow-scroll overscroll-x-contain"
    >
      <ItemCard
        v-for="(product, index) in productList"
        :key="`product-key${{ index }}`"
        :title="product.title"
        :description="product.description"
        :price="product.price"
      />
    </div>
    <!-- second section -->
    <div class="container mx-auto">
    <div class=" grid grid-cols-2 gap-10 m-0">
        <div class="bg-white w-3/4 rounded-xl  px-6 py-2  mr-0 place-self-end">
            <h2 class="text-3xl drop-shadow-lg text-teal-200 text-center p-4">Promotion</h2>
            <div class="grid grid-rows-2 grid-cols-2 gap-x-8 gap-y-4 mx-auto place-items-center overflow-hidden">
                <ItemCard
                        v-for="(product, index) in productList.slice(0,4)"
                        :key="`product-key${{ index }}`"
                        :title="product.title"
                        :description="product.description"
                        :price="product.price"
                        class="scale-x-90 "
                    />
            </div>
        </div>
        <div class="bg-white w-3/4 rounded-xl  px-6 py-2  place-self-start">
            <h2 class="text-3xl drop-shadow-lg text-teal-200 text-center p-4 ">Promotion</h2>
            <div class="grid grid-rows-2 grid-cols-2 gap-x-8 gap-y-4 mx-auto place-items-center overflow-hidden">
                <ItemCard
                        v-for="(product, index) in productList.slice(0,4)"
                        :key="`product-key${{ index }}`"
                        :title="product.title"
                        :description="product.description"
                        :price="product.price"
                        class="scale-x-90 "
                    />
            </div>
        </div>
    </div>

  </div>
  <FooterSection />

  </div>
  <!-- Footer -->


</template>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import '../css/output.css';

.content-background {
  /* background: url(../assets/pic/flowerflow.gif); */
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(../assets/pic/flowerflow.gif);
  /* background-repeat: no-repeat;
  background-size: cover; */
}
h2 {
  font-family: 'Space Mono', monospace;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
