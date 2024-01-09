<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import FishCard from './components/FishCard.vue'
import fishLibrary from './data/fish.json'
</script>

<template>
  <body class="flex mt-10 flex-wrap gap-3 px-20">
    <FishCard v-for="fish in fishLibrary" :data="fish"/>
  </body>
</template>
