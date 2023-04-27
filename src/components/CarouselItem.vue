<template>
    <div class="mycarousel-item" v-show="currentSlide === index" >
        <img :src="slide" />
    </div>
</template>

<script>
export default {
    name: 'CarouselItem',
    props: ["slide" , "currentSlide", "index"]

}
</script>

<style lang="scss" scoped>
.mycarousel-item{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

</style>