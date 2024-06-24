<script>
import ButtonCustom from '../components/ButtonCustom.vue'

export default {
  data() {
    return {
      images: [{ banner: '../src/assets/pic/FloweRose.png' }],

      bannerText: {
        bannerTitle: 'Every meaining contain in flower. Choose wisely',
        subBannerText:
          'Flowers are symbolic of beauty, love and tranquillity. They form the soul of a garden and convey the message of nature to man. Flowers and objects of aesthetic, ornamental, social, religious and cultural value. They are used for conveying love, happiness, grief, mourning...'
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
      <p class="text-white mt-10 w-auto">{{ bannerText.subBannerText }}</p>
      <ButtonCustom class="mt-5 text-white">Shop Now</ButtonCustom>

    </div>
    
  </div>
</template>

<style>
.banner-background {
  background-image: url('../src/assets/pic/FloweRose.png');
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
