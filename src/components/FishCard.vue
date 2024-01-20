<template>
    <div class="group text-white flex aspect-square border self-end overflow-hidden" @mouseenter="mouseEnter()" ref="card"
        :class="data.quantity > 0 ? 'border-white shadow-white shadow-fish-card transition-all duration-0' : 'border-black'">
        <div class="flex flex-col relative p-6 px-8">
            <img class="absolute top-0 left-0 w-full h-full blur-sm group-hover:blur-md"
                :src="`./src/assets/fish-card-backgrounds/${data.type}${randomIndex}.png`" alt="background image" />
            <Bubbles />
            <div class="w-full h-full absolute top-1/2 -right-full" ref="fish4">
                <img class="w-1/4 absolute top-1/3 left-1/2 -translate-x-1/2 rotate-[20deg] blur-sm"
                    :src="`./src/assets/fish/${data.imageFish}`" alt="">
            </div>
            <div class="w-full h-full absolute top-1/4 -right-full" ref="fish3">
                <img class="w-1/3 absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-[20deg] blur-sm"
                    :src="`./src/assets/fish/${data.imageFish}`" alt="">
            </div>
            <div class="w-full h-full absolute top-0 left-0" ref="fish2">
                <div class="animate-bob h-full" :class="`animation-delay-[-${randomDelay}ms]`">
                    <img :class="data.customWidth ? data.customWidth : 'w-3/5'" class="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-[20deg]"
                        :src="`./src/assets/fish/${data.imageFish}`" alt="">
                </div>
            </div>
            <div
                class="w-full h-full bg-black absolute top-0 left-0 group-hover:opacity-50 opacity-20 transition-all duration-600">
            </div>
            <div class="w-full h-full absolute top-0 left-0" ref="fish1">
                <div class="animate-bob h-full" :class="`animation-delay-[-${randomDelay}ms]`">
                    <img :class="data.customWidth ? data.customWidth : 'w-3/5', getSize()" class="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-[20deg] group-hover:blur-[2px] transition-all duration-300"
                        :src="`./src/assets/fish/${data.imageFish}`" alt="">
                </div>
            </div>
            <div
                class="w-full h-full bg-black absolute top-0 left-0 opacity-10 group-hover:opacity-50 transition-all duration-600">
            </div>
            <div class="flex flex-col justify-end relative w-full h-full">
                <h2 class="text-2xl cursor-default">{{ data.name.toUpperCase() }}</h2>
                <p
                    class="max-h-0 overflow-hidden group-hover:max-h-[96px] transition-all duration-300 mt-2 mb-3 cursor-default">
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
                    <img :class="data.type === 'salt' ? 'bg-blue-400' : 'bg-teal-400'" class="w-5 h-5 p-1 rounded-full"
                        :src="`./src/assets/${data.type}.svg`" :alt="data.type">
                </div>
            </div>
            <button
                class="before:block pb-1 leading-3 text-2xl absolute top-6 -left-6 text-white group-hover:left-6 duration-20 duration-200 transition-all"
                @click="addToTank()">+</button>
            <button :class="data.quantity === 0 ? 'hidden' : ''"
                class="before:block pb-1 leading-3 text-3xl absolute top-6 -left-6 text-white group-hover:left-14 duration-20 duration-200 transition-all"
                @click="removeFromTank()">-</button>
            <a href="#"
                class="w-8 h-8 flex items-center justify-center border border-white rounded-full absolute top-4 -right-8 text-white group-hover:right-4 duration-200 transition-all">i</a>
            <div :class="[data.quantity === 0 ? '-top-8' : 'top-4', danger ? 'bg-white text-red-500' : 'bg-blue-500 text-white']"
                class="w-8 h-8 flex items-center justify-center rounded-full absolute right-4  group-hover:right-14 duration-200 transition-all">
                <div class="w-full h-full rounded-full absolute top-0 left-0" ref="ping"></div>
                <div href="#" class="w-full h-full rounded-full flex items-center justify-center">
                    {{ data.quantity }}
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { gsap } from 'gsap';
import Bubbles from './Bubbles.vue';
export default {
    props: ['data'],
    components: {
        Bubbles
    },
    data() {
        return {
            randomIndex: 1,
            randomDelay: 0,
            size: 0,
            width: 0.666,
            fish1TLM: null,
            fish2TLM: null,
            fish34TLM: null,
            fish1: null,
            fish2: null,
            fish3: null,
            fish4: null,
            danger: false,
            fish1Img: null,
            fish2Img: null,
            fish3Img: null,
            fish4Img: null,
        }
    },
    watch: {
        quantity(newVal, oldVal) {
            if (newVal === 0) {
                this.danger = false
            } else if (newVal >= 1) {
                gsap.fromTo(this.$refs.ping, { scale: 1, opacity: 1 }, { scale: 1, duration: 0.2, opacity: 0, ease: 'power1.out' })
            }
        },
    },
    mounted() {
        this.randomIndex = Math.floor(Math.random() * 6) + 1
        this.randomDelay = Math.floor(Math.random() * 11) * 300
        this.size = this.getSize()
        const animation_duration = 1

        this.fish1 = this.$refs.fish1 as HTMLElement;
        this.fish2 = this.$refs.fish2 as HTMLElement;
        this.fish3 = this.$refs.fish3 as HTMLElement;
        this.fish4 = this.$refs.fish4 as HTMLElement;

        let posoffish1 = null
        this.fish1TLM = gsap.timeline({ paused: true })
            .fromTo(this.fish1, { x: '100%', y: '50%', onBegin: () => { posoffish1 = gsap.getProperty(this.fish1, 'y') }}, { x: 0, y: 0, duration: animation_duration, delay: 0.5 })
        let posoffish2 = null
        this.fish2TLM = gsap.timeline({ paused: true })
            .fromTo(this.fish2, { x: 0, y: posoffish2, onBegin: () => { posoffish2 = gsap.getProperty(this.fish2, 'y') } }, { x: '-100%', y: '-50%', duration: animation_duration })
        this.fish34TLM = gsap.timeline({ paused: true })
            .fromTo(this.fish3, { x: 0, y: 0 }, { x: '-200%', y: '-100%', duration: animation_duration * 2 }, animation_duration / 2)
            .fromTo(this.fish4, { x: 0, y: 0 }, { x: '-200%', y: '-100%', duration: animation_duration * 2 }, 0)
    },
    methods: {
        getWidth(element) {
            return element.offsetWidth + 50
        },
        addToTank() {
            this.$emit('add-to-tank', this.data)
        },
        removeFromTank() {
            this.$emit('remove-from-tank', this.data)
        },
        getSize() {
            if (this.data.size === 'small') {
                return 'group-hover:w-1/3'
            } else if (this.data.size === 'medium') {
                return 'group-hover:w-2/3'
            } else {
                return 'group-hover:w-10/12'
            }
        },
        mouseEnter() {
            if (!this.fish1TLM.isActive() && !this.fish2TLM.isActive()) {
                this.fish1TLM.restart().play();
                this.fish2TLM.restart().play();
                this.fish34TLM.restart().play();
            }
        },
    }
}
</script>

