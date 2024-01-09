<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import FishCard from './components/FishCard.vue'
import fishLibrary from './data/fish.json'
</script>

<template>
  <body class="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] mt-10 gap-3 px-20">
    <FishCard v-for="fish in fishLibrary" :data="fish"/>
  </body>
</template>
