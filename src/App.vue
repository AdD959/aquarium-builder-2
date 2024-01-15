<template>
  <body
    class="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] mt-10 gap-3 px-20 bg-black max-w-screen-2xl">
    <div class="bg-[#2f2e2e] p-6 px-8 flex flex-col gap-1">
      <h2 class="text-2xl text-neutral-900">FILTERS</h2>
      <div class="relative group">
        <label for="search" class="text-white text-xs">Search...</label>
        <input name="search" autocomplete="off" class="mt-1 w-full text-base pl-2 py-1 bg-[#1c1c1c] text-white mx-auto focus:outline-none focus:outline-1 focus:outline-white" @focusout="searchLabel = false" @focus="searchLabel = true" type="text" v-model="search">
      </div>
      <div class="text-white">
        <label for="search" class="text-xs">Water Type</label>
        <div class="flex gap-2 flex-wrap mt-1">
          <button :class="type === '' ? 'border-white' : 'border-[#1c1c1c] text-neutral-700'" class="border flex-1 bg-[#1c1c1c] px-2 py-1"
            @click="type = ''">All</button>
          <button :class="type === 'fresh' ? 'border-white' : 'border-[#1c1c1c] text-neutral-700'" class="border flex-1 bg-[#1c1c1c] px-2 py-1"
            @click="type = 'fresh'">Freshwater</button>
          <button :class="type === 'salt' ? 'border-white' : 'border-[#1c1c1c] text-neutral-700'" class="border flex-1 bg-[#1c1c1c] px-2 py-1"
            @click="type = 'salt'">Saltwater</button>
        </div>
      </div>
      <div class="text-white">
        <label for="search" class="text-white text-xs">Size</label>
        <div class="flex gap-2 flex-wrap mt-1">
          <button :class="size === '' ? 'border-white' : 'border-[#1c1c1c] text-neutral-700'" class="border flex-1 bg-[#1c1c1c] px-2 py-1"
            @click="size = ''">All</button>
          <button :class="size === 'small' ? 'border-white' : 'border-[#1c1c1c] text-neutral-700'" class="border flex-1 bg-[#1c1c1c] px-2 py-1"
            @click="size = 'small'">Small</button>
          <button :class="size === 'medium' ? 'border-white' : 'border-[#1c1c1c] text-neutral-700'" class="border flex-1 bg-[#1c1c1c] px-2 py-1"
            @click="size = 'medium'">Medium</button>
          <button :class="size === 'large' ? 'border-white' : 'border-[#1c1c1c] text-neutral-700'" class="border flex-1 bg-[#1c1c1c] px-2 py-1"
            @click="size = 'large'">Large</button>
        </div>
      </div>
      <div class="text-white">
        <label for="search" class="text-white text-xs">Difficulty</label>
        <div class="flex gap-2 mt-1">
          <div @click="difficulty = 1; anyDifficulty = false" :class="difficulty >= 1 ? 'bg-green-600' : 'bg-gray-300'"
            class="w-4 h-4 rounded-full">
          </div>
          <div @click="difficulty = 2; anyDifficulty = false" :class="difficulty >= 2 ? 'bg-yellow-600' : 'bg-gray-300'"
            class="w-4 h-4 rounded-full">
          </div>
          <div @click="difficulty = 3; anyDifficulty = false" :class="difficulty >= 3 ? 'bg-amber-600' : 'bg-gray-300'"
            class="w-4 h-4 rounded-full">
          </div>
          <div @click="difficulty = 4; anyDifficulty = false" :class="difficulty >= 4 ? 'bg-orange-600' : 'bg-gray-300'"
            class="w-4 h-4 rounded-full">
          </div>
          <div @click="difficulty = 5; anyDifficulty = false" :class="difficulty >= 5 ? 'bg-red-600' : 'bg-gray-300'"
            class="w-4 h-4 rounded-full">
        </div>
        </div>
      </div>
    </div>
    <FishCard v-for="fish in filteredFish" :key="fish.id" :data="fish" @add-to-tank="tankAdd(fish)"
      @remove-from-tank="tankRemove(fish)" />
  </body>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FishCard from './components/FishCard.vue'
import fishLibrary from './data/fish.json'
export default {
  components: {
    FishCard
  },
  data() {
    return {
      fishLibrary: fishLibrary,
      myTank: [],
      search: '',
      type: '',
      difficulty: 5,
      size: '',
      searchLabel: false
    };
  },
  mounted() {
    if (localStorage.getItem('my-tank')) {
      try {
        this.myTank = JSON.parse(localStorage.getItem('my-tank') || '');
      } catch (e) {
        localStorage.removeItem('my-tank');
      }
    } else {
      this.myTank = this.fishLibrary;
      localStorage.setItem('my-tank', JSON.stringify(this.myTank));
    }
  },
  computed: {
    filteredFish() {
      return this.myTank.filter(fish => {
        const nameMatch = fish.name.toLowerCase().replaceAll(' ', '').includes(this.search.toLowerCase().replaceAll(' ', ''));
        const typeMatch = fish.type.includes(this.type);
        const difficultyMatch = this.difficulty !== 0 ? fish.difficulty <= this.difficulty : true;
        const sizeMatch = fish.size.includes(this.size);

        return nameMatch && typeMatch && difficultyMatch && sizeMatch;
      });
    }

  },
  methods: {
    getFish() {
      return this.fishLibrary;
    },
    tankAdd(newFish) {
      this.myTank.find(fish => fish.id === newFish.id).quantity++;
      this.updateLocalStorage();
    },
    tankRemove(newFish) {
      this.myTank.find(fish => fish.id === newFish.id).quantity--;
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('my-tank', JSON.stringify(this.myTank));
    }
  }
};
</script>
