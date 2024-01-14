<template>
  <body
    class="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] mt-10 gap-3 px-20 bg-black max-w-screen-2xl mx-auto">
    <div class="bg-white p-4 flex flex-col gap-2">
      <input class="w-full text-lg pl-2 border" type="text" v-model="search">
      <div class="flex gap-2">
        <button class="bg-gray-200 flex-1" @click="type = 'salt'">Saltwater</button>
        <button class="bg-gray-200 flex-1" @click="type = 'fresh'">Freshwater</button>
        <button class="bg-gray-200 flex-1" @click="type = ''">All</button>
      </div>
      <div class="flex gap-2">
        <div @click="difficulty = 1; anyDifficulty = false" :class="difficulty >= 1 ? 'bg-green-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
        </div>
        <div @click="difficulty = 2; anyDifficulty = false" :class="difficulty >= 2 ? 'bg-yellow-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
        </div>
        <div @click="difficulty = 3; anyDifficulty = false" :class="difficulty >= 3 ? 'bg-amber-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
        </div>
        <div @click="difficulty = 4; anyDifficulty = false" :class="difficulty >= 4 ? 'bg-orange-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
        </div>
        <div @click="difficulty = 5; anyDifficulty = false" :class="difficulty >= 5 ? 'bg-red-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
        </div>
        <button class="bg-gray-200 flex-1" @click="difficulty = 0">All</button>

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
      difficulty: 1,
      anyDifficulty: true
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
    const nameMatch = fish.name.toLowerCase().includes(this.search.toLowerCase());
    const typeMatch = fish.type.includes(this.type);
    const difficultyMatch = this.difficulty !== 0 ? fish.difficulty <= this.difficulty : true;

    return nameMatch && typeMatch && difficultyMatch;
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
