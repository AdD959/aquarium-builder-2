<template>
    <div>
        <div class="w-full flex justify-end pb-4 absolute top-0 right-0">
            <button class="text-3xl text-white px-4" @click="open = !open">X</button>
        </div>
        <div class="flex ml-3 min-w-min fixed top-10" :class="open ? 'right-0' : '-right-full'">
            <div class="transition-all duration-250 w-[600px]">
                <Aquarium :tank="tank" />
                <div class="bg-[#DBF5E5] p-4 flex flex-col gap-2">
                    <div v-for="fish in tank">
                        <div class="flex gap-2 relative h-16 items-center">
                            <div class="bg-[#2f2e2e] h-full py-2 px-2 pl-4 flex items-center justify-between w-full">
                                <div class="flex items-center">
                                    <img :src="`./assets/fish/${fish.imageFish}`" class="w-14 mr-5 max-h-14" alt="">
                                    <h3 class="text-base text-white">{{ fish.name }}</h3>
                                </div>
                                <div class="relative h-full flex gap-1">
                                    <div class="w-12 h-full bg-white flex items-center justify-center">
                                        {{ fish.quantity }}
                                    </div>
                                    <div class="w-12 h-full bg-white"></div>
                                    <div class="w-12 h-full bg-white"></div>
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <button @click="add(fish)"
                                    class="bg-blue-500 w-8 h-8 rounded-full text-white flex items-center justify-center text-2xl leading-none">+</button>
                                <button @click="remove(fish)"
                                    class="bg-red-500 w-8 h-8 rounded-full text-white flex items-center justify-center text-2xl leading-none">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Aquarium from './Aquarium.vue'
export default {
    name: 'MyTank',
    props: ['tank'],
    components: {
        Aquarium,
    },
    data() {
        return {
            open: true,
        };
    },
    methods: {
        remove(fish: any) {
            this.$emit('remove-from-tank', fish)
        },
        add(fish: any) {
            this.$emit('add-to-tank', fish)
        },
    },
};
</script>

