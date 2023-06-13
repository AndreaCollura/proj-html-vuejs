<template>
    <button class="carousel-control left" @click="$emit('prev')"><i class="fa-solid fa-chevron-left"></i></button>
    <button class="carousel-control right" @click="$emit('next')"><i
            class="fa-solid fa-chevron-left fa-rotate-180"></i></button>
</template>

<script>
export default {
    name: 'CarouselControls',
    emits: ['prev', 'next']

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.carousel-control {
    background-color: $transp-grey;
    border: none;
    display: inline-block;
    position: absolute;
    padding-top: 5px;
    height: 30px;
    width: 30px;
    top: calc(50% - 15px);
    color: $light-grey;
    cursor: pointer;

}

.left {
    left: 10px;
}

.right {
    right: 10px;
}
</style>