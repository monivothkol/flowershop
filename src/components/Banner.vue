<script>
import ButtonCustom from '../components/ButtonCustom.vue'

export default {
  data() {
    return {
      images: [{ banner: '@/assets/pic/FloweRose.png' }],

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
  <div class="w-full relative">
    <div class="banner-background p-48 blur-sm"></div>
    <div class="w-2/5 blur-0 absolute top-40 left-60">
      <h3 class="text-white text-5xl pr-10 leading-tight">{{ bannerText.bannerTitle }}</h3>
      <p class="text-white mt-10 w-auto" v-html="bannerText.subBannerText"></p>
      <ButtonCustom class="mt-5 text-white">Shop Now</ButtonCustom>

    </div>
    
  </div>
</template>

<style>
.banner-background {
  background-image: url('@/assets/pic/FloweRose.png');
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
