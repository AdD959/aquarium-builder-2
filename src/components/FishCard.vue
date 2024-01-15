<template>
    <div class="group text-white bg-black relative flex aspect-square p-6 px-8 overflow-hidden border self-end"
        @mouseenter="mouseEnter()" @mouseleave="mouseLeave()" ref="card"
        :class="count > 0 ? 'border-white shadow-white shadow-fish-card transition-all duration-0' : 'border-black'">
        <img :src="`./src/assets/fish-card-backgrounds/${data.type}${randomIndex}.png`"
            class="absolute top-0 left-0 blur-sm" alt="">
        <div class="flex flex-col fish1">
            <Bubbles />
            <div :class="danger ? 'bg-red-500 opacity-80' : 'bg-black'"
                class="w-full h-full absolute top-0 left-0 opacity-40 group-hover:opacity-80 duration-300 transition-all">
            </div>
            <div :class="`animation-delay-[-${randomDelay}ms]`" class="absolute w-full h-full top-0 left-0">
                <div ref="fish3" class=" absolute right-[-110%] bottom-[20%]">
                    <img class="w-1/3 blur-[4px] rotate-[20deg]" :src="`./src/assets/fish/${data.imageFish}`"
                        :alt="data.imageFish">
                </div>
                <div ref="fish4" class="fish4 absolute right-[-110%] bottom-[50%]">
                    <img class="w-1/2 blur-[4px] rotate-[20deg]" :src="`./src/assets/fish/${data.imageFish}`"
                        :alt="data.imageFish">
                </div>
                <div :class="data.customWidth ? data.customWidth : 'w-2/3'"
                    class="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2" ref="fish1">
                    <div :class="`animation-delay-[-${randomDelay}ms]`" class="animate-bob">
                        <img class="rotate-[20deg]" :src="`./src/assets/fish/${data.imageFish}`" :alt="data.imageFish">
                    </div>
                </div>
                <div :class="data.customWidth ? data.customWidth : 'w-2/3'"
                    class="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:blur-[5px]" ref="fish2">
                    <div class="animate-bob" :class="`animation-delay-[-${randomDelay}ms]`">
                        <img class="rotate-[20deg]" :src="`./src/assets/fish/${data.imageFish}`" :alt="data.imageFish">
                    </div>
                </div>
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
            <button :class="count === 0 ? 'hidden' : ''"
                class="before:block pb-1 leading-3 text-3xl absolute top-6 -left-6 text-white group-hover:left-14 duration-20 duration-200 transition-all"
                @click="removeFromTank()">-</button>
            <a href="#"
                class="w-8 h-8 flex items-center justify-center border border-white rounded-full absolute top-4 -right-8 text-white group-hover:right-4 duration-200 transition-all">i</a>
            <div :class="[count === 0 ? '-top-8' : 'top-4', danger ? 'bg-white text-red-500' : 'bg-blue-500 text-white']"
                class="w-8 h-8 flex items-center justify-center rounded-full absolute right-4  group-hover:right-14 duration-200 transition-all">
                <div class="w-full h-full rounded-full absolute top-0 left-0 bg-current" ref="ping"></div>
                <div href="#"
                    class="w-full h-full rounded-full flex items-center justify-center">
                    {{ count }}
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
            count: 0,
            danger: false,
        }
    },
    watch: {
        count(newVal, oldVal) {
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
        this.count = this.data.quantity || 0

        this.fish1 = this.$refs.fish1 as HTMLElement;
        this.fish2 = this.$refs.fish2 as HTMLElement;
        this.fish3 = this.$refs.fish3 as HTMLElement;
        this.fish4 = this.$refs.fish4 as HTMLElement;

        this.fish1TLM = gsap.timeline({ paused: true })
            .addLabel('start')
            .set(this.fish1, { x: 300, y: 150, scale: 1 }).addLabel('first')
            .to(this.fish1, { x: 0, y: 0, duration: 0 }).addLabel('second')
            .to(this.fish1, { x: '-220%', y: -150, duration: 1 }).addLabel('end')

        this.fish2TLM = gsap.timeline({ paused: true })
            .addLabel('start')
            .set(this.fish2, { x: '220%', y: 150, scale: this.size }).addLabel('first')
            .to(this.fish2, { x: 0, y: 0, scale: this.size, duration: 1, ease: 'power1.out', delay: 0.4 }).addLabel('second')
            .to(this.fish2, { scale: 1, duration: 0.3 }).addLabel('end')

        this.fish34TLM = gsap.timeline()
        this.fish34TLM = gsap.timeline({ paused: true })
            .to(this.fish3, { x: '-300%', y: -350, duration: 2.5, delay: 0.1 })
            .to(this.fish4, { x: '-300%', y: -350, duration: 2 }, 0.4)
            .to(this.fish3, { x: 0, y: 0, duration: 0 })
            .to(this.fish4, { x: 0, y: 0, duration: 0 })


        this.fish2TLM.play('first').pause()
        this.fish1TLM.play('first').pause()
        this.fish34TLM.play().pause()

    },
    methods: {
        addToTank() {
            this.count++
            this.$emit('add-to-tank', this.data)
        },
        removeFromTank() {
            this.count--
            this.$emit('remove-from-tank', this.data)
        },
        getSize() {
            if (this.data.size === 'small') {
                return 0.5
            } else if (this.data.size === 'medium') {
                return 0.66
            } else {
                return 1
            }
        },
        mouseEnter() {
            if (!this.fish34TLM.isActive()) {
                this.fish34TLM.restart().play()
            }
            if (!this.fish1TLM.isActive() && !this.fish2TLM.isActive()) {
                this.fish1TLM.play('second')
            }
            if (!this.fish2TLM.isActive()) {
                this.fish2TLM.play('first').tweenTo(this.fish2TLM.nextLabel())
            }
        },
        mouseLeave() {
            if (!this.fish2TLM.isActive()) {
                this.fish2TLM.play('second')
            }
        }
    }
}
</script>
