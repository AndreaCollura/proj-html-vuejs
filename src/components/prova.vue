<template>
    <swiper-container>
        <swiper-slide>ciao</swiper-slide>
        <swiper-slide>ciao</swiper-slide>
        <swiper-slide>ciao</swiper-slide>
        <swiper-slide>ciao</swiper-slide>

    </swiper-container>
</template>

<script>
import { register } from 'swiper/element/bundle'
export default {
    name: 'prova',

    data() {
        return {
            
        }
    },
    mounted(){
        register();
    }

}


</script>

<style lang="scss" scoped></style>