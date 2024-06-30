<script>
export default {
  data() {
    return {
      contactList: [
        { name: 'Phone', value: '+85587996796' },
        { name: 'Email', value: 'monivothkol1999@gmail.com' },
        { name: 'Address', value: 'Phnom Penh Thmey, Saensokh, Phnom Penh' }
      ],
      socialList: [
        {
          name: 'facebook',
          link: '#',
          img: 'fa-facebook'
        },
        { name: 'instagram', link: '#', img: 'fa-instagram' }
      ],
      shopInfo: [
        {
          name: 'About Us',
          link: '#',},
          {name: 'Our Product',
          link: '#',},
          {name: 'Privacy policy',
          link: '#',},
          {name: 'Terms and Condition',
          link: '#'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="wave h-96 md:relative">
    <div class="md:grid md:grid-cols-3 md:absolute md:top-36   md:left-10">
      <!-- contact -->
      <div class="bg-pink-200  p-2 md:bg-transparent">
        <h3 class="text-bold text-2xl pb-2 underline">Contact</h3>
        <ul>
          <li
            class="flex flex-row"
            v-for="(contact, index) in contactList"
            :key="contact.name + 'index'"
          >
            {{ contact.name }} : {{ contact.value }}
          </li>
        </ul>
        <ul class="flex">
          <li
            class="px-2"
            v-for="(socialfooter, index) in socialList"
            :key="socialfooter.name + 'index'"
          >
            <a :href="socialfooter.link">
              <i :class="['fa-brands text-5xl text-orange-500', socialfooter.img]"></i>
            </a>
          </li>
        </ul>
      </div>
        <!-- store -->
      <div class="bg-pink-200 p-2 pb-10 md:bg-transparent xl:p-0 xl:pl-20 ">
        <h3 class="text-bold text-2xl pb-2 pt-6 underline">Store</h3>
        <ul>
          <li
            class="flex flex-row"
            v-for="(shop, index) in shopInfo"
            :key="shop.name + 'index'"
          >
            <a :href="shop.link">{{ shop.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@import '../css/output.css';

.wave {
  background: url(../assets/pic/wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}
</style>
