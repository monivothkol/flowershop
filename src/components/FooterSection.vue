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
  <div class="wave h-96 relative">
    <div class="w-3/4 grid grid-cols-4  absolute top-24 left-40">
      <div class="col-span-1 p-4 mr-10 overflow-hidden border-r border-blue">
        <h3 class="text-bold text-2xl pb-2">Contact</h3>
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
            class="px-2 py-6"
            v-for="(socialfooter, index) in socialList"
            :key="socialfooter.name + 'index'"
          >
            <a :href="socialfooter.link">
              <i :class="['fa-brands text-5xl text-orange-500', socialfooter.img]"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="col-span-3 p-4">
        <h3 class="text-bold text-2xl pb-2">Store</h3>
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
