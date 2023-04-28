<template>
    <section class="pb-5 w-100 ">
        <div class="hero">
            <Carousel />
            <div class="txt-box">
                <p class="m-0">cinemato studio</p>
                <h1>action and inspire people</h1>
                <button>read more</button>
            </div>
        </div>
    </section>
</template>

<script>

import { store } from '../data/store'
import Carousel from './Carousel.vue';
export default {
    name: 'HeroComp',
    components: {
        Carousel,
    },
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.hero {
    height: 700px;
    width: 100%;
    position: relative;


    .txt-box {
        color: $white-bg;
        position: absolute;
        width: 600px;
        top: 220px;
        left: 260px;
        right: 0;
        bottom: 0;

        p {
            font-size: 1.1rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        h1 {
            font-size: 4.3rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        button {
            width: 170px;
            height: 50px;
            font-size: .8rem;
            background-color: $white-bg;
            border: none;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 20px;

        }
    }

}
</style>