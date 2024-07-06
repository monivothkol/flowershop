<script>
import ButtonCustom from '../components/ButtonCustom.vue'
// import bannerImage from '../../public/FlowerRose.png';



export default {
  data() {
    return {
      // images: { banner: bannerImage },

      bannerText: {
        bannerTitle: "Enjoy your shopping in your resting time",
        subBannerText:
          "We offer free deliver in Phnom Penh area. Order today, we'll send out today! <br> No waiting, save your time."
      },
      
    }
  },
  components: {
        ButtonCustom
    }
};
</script>

<template>
  <div class="w-auto relative">
    <div class="banner-background p-8 bg-center w-full h-96 bg-black" :style="{ backgroundImage: 'url(../../public/FloweRose.png)' }"
    >
    <!-- <img src="../../public/FloweRose.png" alt=""> -->
  </div>
    <div class="absolute top-14 left-0 w-full flex items-center flex-col p-4 md:w-2/4 md:ml-12 md:items-start">
      <!-- <h3 class="text-white text-5xl pr-10 leading-tight md:text-xl lg:text-2xl">{{ bannerText.bannerTitle }}</h3> -->
      
      <h3 class="text-white text-3xl text-center md:text-left ">{{ bannerText.bannerTitle }}</h3>

      <p class="text-white mt-5 text-center md:text-left" v-html="bannerText.subBannerText"></p>
      <ButtonCustom class="mt-5 text-white w-2/4 ">Shop Now</ButtonCustom>

    </div>
    
  </div>
</template>

<style>
.banner-background {
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
