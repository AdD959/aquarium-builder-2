<template>
    <div class="group text-white bg-black relative flex min-w-[300px] aspect-square p-6 px-8 duration-700 overflow-hidden">
        <img :src="`./src/assets/fish-card-backgrounds/${data.type}${randomIndex}.png`"
            class="absolute top-0 left-0 blur-sm" alt="">
        <div class="flex flex-col">
            <div class="absolute w-[100px] bottom-0 right-0">
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute translate-x-1 w-4 h-4 bg-white rounded-full  group-hover:translate-y-[-416px] group-hover:duration-[500ms] group-hover:delay-[500ms]">
                </div>
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute -translate-x-3 w-4 h-4 bg-white rounded-full group-hover:translate-y-[-416px] group-hover:duration-[510ms] group-hover:delay-[540ms]">
                </div>
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute -translate-x-6 w-4 h-4 bg-white rounded-full group-hover:translate-y-[-416px] group-hover:duration-[520ms] group-hover:delay-[580ms]">
                </div>
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute translate-x-3 w-4 h-4 bg-white rounded-full group-hover:translate-y-[-416px] group-hover:duration-[530ms] group-hover:delay-[620ms]">
                </div>
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute w-4 h-4 bg-white rounded-full group-hover:translate-y-[-416px] group-hover:duration-[540ms] group-hover:delay-[640ms]">
                </div>
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute translate-x-1 w-4 h-4 bg-white rounded-full  group-hover:translate-y-[-416px] group-hover:duration-[600ms] group-hover:delay-[660ms]">
                </div>
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute -translate-x-3 w-4 h-4 bg-white rounded-full group-hover:translate-y-[-416px] group-hover:duration-[610ms] group-hover:delay-[700ms]">
                </div>
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute -translate-x-6 w-4 h-4 bg-white rounded-full group-hover:translate-y-[-416px] group-hover:duration-[620ms] group-hover:delay-[740ms]">
                </div>
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute translate-x-3 w-4 h-4 bg-white rounded-full group-hover:translate-y-[-416px] group-hover:duration-[630ms] group-hover:delay-[780ms]">
                </div>
                <div
                    class="translate-y-0 duration-0 opacity-20 ease-linear absolute w-4 h-4 bg-white rounded-full group-hover:translate-y-[-416px] group-hover:duration-[640ms] group-hover:delay-[820ms]">
                </div>
            </div>
            <div
                class="w-full h-full absolute top-0 left-0 bg-black opacity-40 group-hover:opacity-60 duration-300 transition-all">
            </div>
            <div class="w-full flex justify-center h-full animate-bob">
                <img class="w-2/3 absolute group-hover:w-1/3 group-hover:blur-[1px] top-1/3 transition-all rotate-[20deg] group-hover:translate-x-[-300px] group-hover:translate-y-[-100px] delay-0 duration-0 group-hover:duration-700"
                    :src="`./src/assets/fish/${data.imageFish}`" :alt="data.imageFish">
                <img class="w-2/3 group-hover:w-1/3 group-hover:blur-[1px] transition-all rotate-[20deg] top-1/3 translate-x-[350px] translate-y-[200px] duration-0 group-hover:duration-700 delay-0 group-hover:translate-x-0 group-hover:translate-y-0"
                    :src="`./src/assets/fish/${data.imageFish}`" :alt="data.imageFish">
                <img class="w-1/3 group-hover:blur-[1px] grayscale transition-all group-hover:duration-1000 group-hover:delay-300 ease-linear rotate-[20deg] absolute right-[-100%] bottom-[-80%] group-hover:translate-x-[-800px] delay-0 group-hover:translate-y-[-500px] duration-0"
                    :src="`./src/assets/fish/${data.imageFish}`" :alt="data.imageFish">
                <img class="w-1/3 group-hover:blur-[1px] grayscale transition-all group-hover:duration-700 delay-400 ease-linear rotate-[20deg] absolute right-[-90%] bottom-[-150%] group-hover:translate-x-[-800px] delay-0 group-hover:translate-y-[-500px] duration-0"
                    :src="`./src/assets/fish/${data.imageFish}`" :alt="data.imageFish">
            </div>
            <div class="flex flex-col justify-end relative w-full h-full">
                <h2 class="text-5xl text-[200%] group">{{ data.name.toUpperCase() }}</h2>
                <p class="max-h-0 overflow-hidden group-hover:max-h-[84px] transition-all duration-300 mt-2 mb-3">
                    {{ data.description }}
                </p>
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <div :class="data.difficulty >= 1 ? 'bg-green-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
                        </div>
                        <div :class="data.difficulty >= 2 ? 'bg-yellow-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
                        </div>
                        <div :class="data.difficulty >= 3 ? 'bg-amber-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
                        </div>
                        <div :class="data.difficulty >= 4 ? 'bg-orange-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
                        </div>
                        <div :class="data.difficulty >= 5 ? 'bg-red-600' : 'bg-gray-300'" class="w-4 h-4 rounded-full">
                        </div>
                    </div>
                </div>
            </div>
            <a href="#"
                class="before:block pb-1 leading-3 text-2xl absolute top-6 -left-6 text-white group-hover:left-6 duration-20 duration-200 transition-all">+</a>
            <a href="#"
                class="w-8 h-8 flex items-center justify-center border border-white rounded-full absolute top-4 -right-8 text-white group-hover:right-4 duration-200 transition-all">i</a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: ['data'],
    data() {
        return {
            randomIndex: 1,
        }
    },
    mounted() {
        this.randomIndex = Math.floor(Math.random() * 6) + 1
    },
}
</script>