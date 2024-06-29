<script>
import ButtonCustom from '../components/ButtonCustom.vue'
export default {
  data() {
    return {
      productList: []
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: 'No description provided'
    },
    image:{
      type: String,
      default: '#'
    }
  },
  components: {
    ButtonCustom
  }
}
</script>

<template>
  <div class="w-72 max-w-72 h-auto bg-white rounded-xl overflow-hidden flex flex-col relative">
    <div class="h-64 w-full overflow-hidden p-4 flex justify-center items-center">
        <img class="w-48 h-full" :src="image" />
      </div>

    <div class="px-6 py-4 mb-10">
      <div class="font-bold text-sm mb-2 max-h-10 overflow-hidden">{{ `${this.title}` }}</div>
      <p class="inline-block text-gray-700 text-base max-h-16 overflow-hidden text-xs">
        {{ this.description }}
      </p>
    </div>
    <div class="flex">
      <h3 class="px-5 py-3 absolute left-0 bottom-0">{{ `${this.price} USD` }}</h3>
      <ButtonCustom class="scale-75 absolute right-0 bottom-0">Add to Card</ButtonCustom>
    </div>
  </div>
</template>
<style>
@import '../css/output.css';
</style>
