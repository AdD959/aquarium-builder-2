<template>
    <div class="group text-white bg-black relative flex min-w-[300px] aspect-square p-6 px-8 overflow-hidden"
        @mouseenter="mouseEnter()" @mouseleave="mouseLeave()" ref="card" :class="selected ? ' border-dashed border-4 border-white transition-all duration-00' : 'duration-700'">
        <img :src="`./src/assets/fish-card-backgrounds/${data.type}${randomIndex}.png`"
            class="absolute top-0 left-0 blur-sm" alt="">
        <div class="flex flex-col fish1">
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
                class="w-full h-full absolute top-0 left-0 bg-black opacity-40 group-hover:opacity-80 duration-300 transition-all">
            </div>
            <div :class="`animation-delay-[-${randomDelay}ms]`" class="absolute w-full h-full top-0 left-0">
                <div ref="fish3" class=" absolute right-[-100%] bottom-[30%]">
                    <img class="w-1/3 blur-[4px] rotate-[20deg]" :src="`./src/assets/fish/${data.imageFish}`"
                        :alt="data.imageFish">
                </div>
                <div ref="fish4" class="fish4 absolute right-[-100%] bottom-[50%]">
                    <img class="w-1/2 blur-[4px] rotate-[20deg]" :src="`./src/assets/fish/${data.imageFish}`"
                        :alt="data.imageFish">
                </div>
                <div class="w-2/3 absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2" ref="fish1">
                    <div :class="`animation-delay-[-${randomDelay}ms]`" class="animate-bob">
                        <img class="rotate-[20deg]" :src="`./src/assets/fish/${data.imageFish}`" :alt="data.imageFish">
                    </div>
                </div>
                <div class="w-2/3 absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:blur-[5px]"
                    ref="fish2">
                    <div class="animate-bob" :class="`animation-delay-[-${randomDelay}ms]`">
                        <img class="rotate-[20deg]" :src="`./src/assets/fish/${data.imageFish}`" :alt="data.imageFish">
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-end relative w-full h-full">
                <h2 class="text-5xl text-[200%] cursor-default">{{ data.name.toUpperCase() }}</h2>
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
                </div>
            </div>
            <button
                class="before:block pb-1 leading-3 text-2xl absolute top-6 -left-6 text-white group-hover:left-6 duration-20 duration-200 transition-all" @click="selected = !selected">+</button>
            <a href="#"
                class="w-8 h-8 flex items-center justify-center border border-white rounded-full absolute top-4 -right-8 text-white group-hover:right-4 duration-200 transition-all">i</a>
        </div>
    </div>
</template>

<script lang="ts">
import { gsap } from 'gsap';
export default {
    props: ['data'],
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
            selected: false
        }
    },
    mounted() {
        this.randomIndex = Math.floor(Math.random() * 6) + 1
        this.randomDelay = Math.floor(Math.random() * 11) * 300
        this.size = this.getSize()

        this.fish1 = this.$refs.fish1 as HTMLElement;
        this.fish2 = this.$refs.fish2 as HTMLElement;
        this.fish3 = this.$refs.fish3 as HTMLElement;
        this.fish4 = this.$refs.fish4 as HTMLElement;

        this.fish1TLM = gsap.timeline({ paused: true })
            .addLabel('start')
            .set(this.fish1, { x: 300, y: 150, scale: 1 }).addLabel('first')
            .to(this.fish1, { x: 0, y: 0, duration: 0 }).addLabel('second')
            .to(this.fish1, { x: '-200%', y: -150, duration: 1 }).addLabel('end')

        this.fish2TLM = gsap.timeline({ paused: true })
            .addLabel('start')
            .set(this.fish2, { x: '200%', y: 150, scale: this.size }).addLabel('first')
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
                console.log('playing')
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
