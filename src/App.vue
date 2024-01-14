<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FishCard from './components/FishCard.vue'
import fishLibrary from './data/fish.json'
</script>

<template>
  <body
    class="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] mt-10 gap-3 px-20 bg-black max-w-screen-2xl mx-auto">
    <FishCard v-for="fish in myTank" :data="fish" @add-to-tank="tankAdd(fish)" @remove-from-tank="tankRemove(fish)" />
  </body>
</template>


<script lang="ts">
export default {
  components: {
    FishCard
  },
  data() {
    return {
      fishLibrary: fishLibrary,
      myTank: []
    }
  },
  mounted() {
    if (localStorage.getItem('my-tank')) {
      try {
        this.myTank = JSON.parse(localStorage.getItem('my-tank') || '')
      } catch (e) {
        localStorage.removeItem('my-tank')
      }
    } else {
      this.myTank = this.fishLibrary
      localStorage.setItem('my-tank', JSON.stringify(this.myTank))
    }
  },
  methods: {
    getFish() {
      return this.fishLibrary
    },
    tankAdd(newFish: any) {
      this.myTank.find(fish => fish.id === newFish.id).quantity++
    },
    tankRemove(newFish: any) {
      this.myTank.find(fish => fish.id === newFish.id).quantity--
    }
  },
  watch: {
    myTank: {
      handler() {
        localStorage.setItem('my-tank', JSON.stringify(this.myTank))
      },
      deep: true
    }
  }
}
</script>