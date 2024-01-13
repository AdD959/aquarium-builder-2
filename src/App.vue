<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FishCard from './components/FishCard.vue'
import fishLibrary from './data/fish.json'
</script>

<template>
  <body class="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] mt-10 gap-3 px-20 bg-black">
    <FishCard v-for="fish in fishLibrary" :data="fish"/>
  </body>
</template>


<script lang="ts">  
  export default {
    components: {
      FishCard
    },
    data() {
      return {
        fishLibrary: fishLibrary
      }
    },
    methods: {
      getFish() {
        return this.fishLibrary
      }
    },
  }
</script>