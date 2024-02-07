<template>
    <g class="fish-container" ref="fishContainer">
        <image class="fish" :height="getSize(size)" :width="getSize(size)" ref="fish"
            :href="`./src/assets/fish/${fish}`" :x="tankXPosition" :y="tankYPosition" />
    </g>
</template>
  
<script lang="ts">
import { gsap } from 'gsap';
export default {
    props: ['fish', 'size', 'posYStart', 'posYEnd', 'xMovement', 'fishAnimation', 'sizeChange', 'tankHeight'],
    data() {
        return {
            tankXPosition: 169.883 as number,
            tankYPosition: 288 as number,
            newXPos: 0 as number,
        };
    },
    computed: {
        fishWidth() {
            return this.getSize(this.size) * this.sizeChange
        },
        fishDuration() {
            return 3 / this.sizeChange
        },
        maxPosY() {
            return this.tankHeight - this.fishWidth
        }
    },
    mounted() {
        // @ts-ignore
        this.tlm = gsap.timeline({ repeat: -1, paused: true })

        this.$nextTick(() => {
            // @ts-ignore
            this.animate(this.tlm);
            // @ts-ignore
            this.tlm.play(this.getRandomStartTime());
        });
    },
    watch: {
        sizeChange() {
            // @ts-ignore
            this.$refs.fish.setAttribute('width', this.fishWidth)
            // @ts-ignore
            this.$refs.fish.setAttribute('x', this.tankXPosition)
            // @ts-ignore
            this.tlm.invalidate()
            // @ts-ignore
            this.tlm.play(this.getRandomStartTime())
        },
    },
    methods: {
        getRandomStartTime() {
            const min = 0
            const max = 90
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        getRandomStartY() {
            const min = 0
            const max = this.maxPosY
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        getSize(size: string) {
            switch (size) {
                case 'small':
                    return 75;
                case 'medium':
                    return 150;
                case 'large':
                    return 300;
                default:
                    return 150; 
            }
        },
        animate(timeline: typeof gsap.timeline) {
            const randomYPos = this.getRandomStartY()
            // @ts-ignore
            timeline.set(this.$refs.fishContainer as SVGElement, { y: randomYPos, x: () => { return this.fishWidth + 20 }, scaleX: -1 })
              .to(this.$refs.fishContainer, { y: this.posYEnd, x: this.xMovement, duration: this.getSize(this.size) / 10, ease: this.fishAnimation.ease })
              .to(this.$refs.fishContainer, { scaleX: 1, duration: 0, x: () => { return `-=${this.fishWidth}` } })
              .to(this.$refs.fishContainer, { y: randomYPos, x: 20, duration: this.getSize(this.size) / 10, ease: this.fishAnimation.ease });
        },
    },
};
</script>
  