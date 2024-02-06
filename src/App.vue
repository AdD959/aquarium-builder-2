<template>
  <body class="flex mt-10 px-20 max-w-screen-xl mx-auto">
    <main class="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 bg-black flex-1">
      <div class="bg-[#2f2e2e] p-6 px-8 flex flex-col gap-1 relative justify-between aspect-square group overflow-auto">
        <div class="flex justify-between flex-col">
          <label for="search" class="text-white text-xs">Size</label>
          <div class="gap-2 flex w-full justify-start text-white text-xs mt-1">
            <button @click="selectSize('small')" class="bg-[#1c1c1c] px-2 py-1 border group relative"
              :class="size.includes('small') ? 'border-white' : 'border-[#1c1c1c]'">small</button>
            <button @click="selectSize('medium')" class="bg-[#1c1c1c] px-2 py-1 border"
              :class="size.includes('medium') ? 'border-white' : 'border-[#1c1c1c]'">medium</button>
            <button @click="selectSize('large')" class="bg-[#1c1c1c] px-2 py-1 border"
              :class="size.includes('large') ? 'border-white' : 'border-[#1c1c1c]'">large</button>
          </div>
        </div>
        <div class="flex items-center justify-center relative">
          <svg class="h-full w-2/3 mt-5" viewBox="0 0 167 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M109.455 26.0926C113.727 26.8578 120.114 25.5667 124.005 23.6258C137.999 19.5748 146.641 11.203 146.641 11.203C154.202 7.96226 169.412 11.1235 166.674 15.7941C165.658 17.5279 162.496 19.9975 158.935 22.7792C152.968 27.44 145.879 32.9773 145.879 37.3989C145.879 41.1208 152.746 43.9712 158.541 46.3768C162.059 47.8372 165.182 49.1336 166.134 50.3616C169.583 54.8111 153.711 59.5436 149.12 57.6532C149.12 57.6532 136.096 53.0823 124.005 49.2813C122.698 48.8706 121.402 48.4797 120.134 48.0975C117.171 47.2038 114.364 46.3571 111.937 45.4123C111.385 47.4693 114.41 50.7161 117.21 53.7216C120.608 57.3678 123.674 60.6587 119.62 61.0391C109.921 61.949 96.4587 55.2803 91.3614 51.9468C87.7505 53.2516 83.8736 54.4581 79.9308 55.5484C81.8409 58.2062 84.4044 60.6014 86.6258 62.677C91.5721 67.2987 94.8222 70.3355 85.3857 71.156C73.2026 72.2154 63.4365 65.6509 58.2103 60.3663C52.0579 61.4051 46.884 61.974 43.7977 61.974C37.6103 61.974 31.957 59.6874 27.6367 55.9131C26.8007 55.4713 23.7564 53.8428 20.1105 51.6603C17.6936 50.8998 12.3848 48.122 8.81764 46.2554L8.81761 46.2554L8.81754 46.2554C7.27366 45.4475 6.05605 44.8104 5.54036 44.5814C2.86286 43.3927 -0.0787272 41.22 0.317854 39.9376C0.481232 39.4093 1.12643 39.1941 2.02798 39.1854C0.546094 37.7825 -0.239326 36.2845 0.064767 35.1496C0.392069 33.9281 2.42046 33.3436 4.70982 32.684L4.70984 32.684C6.50845 32.1658 8.46813 31.6012 9.89058 30.6448C16.9067 24.4683 28.1111 16.3714 32.9127 15.3593C36.1937 13.7358 39.8891 12.8233 43.7977 12.8233C46.158 12.8233 49.7391 13.156 54.0451 13.7772C60.7479 11.2772 64.5769 8.53516 67.8 6.22698L67.8001 6.22694L67.8001 6.2269C71.7453 3.40166 74.7828 1.22644 81.0716 0.940674C84.1892 0.940674 84.3538 2.57812 84.5557 4.58748C84.6919 5.94268 84.8451 7.46706 85.9327 8.77237C88.6329 12.0131 92.0885 15.163 99.1104 19.8448C100.513 20.7797 102.141 21.7145 103.829 22.683L103.829 22.6831C105.709 23.7624 107.662 24.8833 109.455 26.0926Z"
              fill="#1c1c1c" fill-opacity="1" />
          </svg>
        </div>
        <div>
          <div class="relative group">
            <label for="search" class="text-white text-xs">Search...</label>
            <input name="search" autocomplete="off"
              class="mt-1 w-full text-base pl-2 py-1 bg-[#1c1c1c] text-white mx-auto focus:outline-none focus:outline-1 focus:outline-white"
              @focusout="searchLabel = false" @focus="searchLabel = true" type="text" v-model="search">
          </div>
          <div class="flex justify-between items-end">
            <div class="text-white">
              <label for="search" class="text-white text-xs">Difficulty</label>
              <div class="flex gap-2 mt-1">
                <div @click="difficulty = 1; anyDifficulty = false"
                  :class="difficulty >= 1 ? 'bg-green-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full cursor-pointer">
                </div>
                <div @click="difficulty = 2; anyDifficulty = false"
                  :class="difficulty >= 2 ? 'bg-yellow-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full cursor-pointer">
                </div>
                <div @click="difficulty = 3; anyDifficulty = false"
                  :class="difficulty >= 3 ? 'bg-amber-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full cursor-pointer">
                </div>
                <div @click="difficulty = 4; anyDifficulty = false"
                  :class="difficulty >= 4 ? 'bg-orange-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full cursor-pointer">
                </div>
                <div @click="difficulty = 5; anyDifficulty = false"
                  :class="difficulty >= 5 ? 'bg-red-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full cursor-pointer">
                </div>
              </div>
            </div>
            <div>
              <label for="search" class="text-white text-xs">Water Type</label>
              <div class="flex gap-2 items-end">
                <img @click="selectType('fresh')" :class="type.includes('fresh') ? 'bg-teal-400' : 'bg-neutral-700'"
                  class="w-5 h-5 p-1 rounded-full cursor-pointer" :src="`./src/assets/salt.svg`" alt="saltwater">
                <img @click="selectType('salt')" :class="type.includes('salt') ? 'bg-blue-400' : 'bg-neutral-700'"
                  class="w-5 h-5 p-1 rounded-full cursor-pointer" :src="`./src/assets/fresh.svg`" alt="freshwater">
              </div>
            </div>
          </div>
        </div>
      </div>
      <FishCard v-for="fish in filteredFish" :key="fish.id" :data="fish" @add-to-tank="tankAdd(fish)" @remove-from-tank="tankRemove(fish)" />
      <!-- <FishCard :data="fishLibrary[15]"/> -->
      <div class="bg-[#2f2e2e] text-white p-6 px-8 flex flex-col gap-1 relative aspect-square group overflow-auto">
        <h2 class="text-2xl font-bold mb-4">Can't find the fish you're looking for?</h2>
        <p>Try our AI-assisted search...</p>
        <p class="text-[#1c1c1c] fonrt-bold">(Coming soon...)</p>
      </div>
    </main>
    <MyTank :tank="getTank()" @add-to-tank="tankAdd" @remove-from-tank="tankRemove" />
  </body>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FishCard from './components/FishCard.vue'
import fishLibrary from './data/fish.json'
import Bubbles from './components/Bubbles.vue'
import MyTank from './components/MyTank.vue'
export default {
  components: {
    FishCard,
    Bubbles,
    MyTank,
  },
  data() {
    return {
      fishLibrary: fishLibrary,
      myTank: [],
      search: '',
      type: ['fresh', 'salt'],
      difficulty: 5,
      size: ['small', 'medium', 'large'],
      searchLabel: false,

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
        const typeMatch = this.type.some(type => fish.type.includes(type));
        const difficultyMatch = this.difficulty !== 0 ? fish.difficulty <= this.difficulty : true;
        const sizeMatch = this.size.some(size => fish.size.includes(size));

        return nameMatch && typeMatch && difficultyMatch && sizeMatch;
      });
    }

  },
  methods: {
    getFish() {
      return this.fishLibrary;
    },
    selectType(selectedType) {
      const index = this.type.indexOf(selectedType);
      if (index !== -1) {
        this.type.splice(index, 1);
      } else {
        this.type.push(selectedType);
      }
    },
    selectSize(selectedSize) {
      const index = this.size.indexOf(selectedSize);

      if (index !== -1) {
        this.size.splice(index, 1);
      } else {
        this.size.push(selectedSize);
      }
    },
    getTank() {
      return this.myTank.filter(fish => fish.quantity && fish.quantity > 0);
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
