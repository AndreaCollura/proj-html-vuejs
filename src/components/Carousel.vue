<template>
    <div class="mycarousel">
        
        <div class="mycarousel-inner">
            <CarouselItem v-for="(slide, index) in store.slides" :slide="slide" :key="`item-${index}`" :current-slide="currentSlide" :index="index"/>
            <CarouselControls @prev="prev" @next="next"/>
        </div>
    </div>
</template>

<script>
import {store} from '../data/store';
import CarouselControls from './CarouselControls.vue'
import CarouselItem from './CarouselItem.vue';
export default {
    name: 'Carousel',
    components: {
        CarouselItem,
        CarouselControls
        
    },
    data(){
            return{
                store,
                currentSlide: 1
            }
        },
        methods:{
            setCurrentSlide(index){
                this.currentSlide = index;
            },
            prev(){
                const index = this.currentSlide > 0 ? this.currentSlide - 1 : store.slides.length - 1;
                this.setCurrentSlide(index);

            },

            next(){
                const index = this.currentSlide < store.slides.length - 1 ? this.currentSlide + 1 : 0;
                this.setCurrentSlide(index);

            }

        }



}
</script>

<style lang="scss" scoped>
    .mycarousel{
        display: flex;
        justify-content: center;
        
    }

    .mycarousel-inner{
            position: relative;
            width: 1680px;
            height: 700px;
            overflow: hidden;

        }
</style> 