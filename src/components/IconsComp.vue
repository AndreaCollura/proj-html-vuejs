<template>
    <section id="icons">
        <div class="container-fluid">
            <div class="container d-flex justify-content-between my-auto">
                <div v-for="(box, index) in store.iconList" :key="index" class="icon-box text-center ">
                    <img :src="box.image" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'IconsComp',
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#icons {
    height: 250px;
    background-image: url(../assets/styles/img/Parallax-03.jpg);
    background-position: center;

    .container {

        padding-top: 30px;

        .icon-box {
            width: 200px;
            height: 200px;
            color: $white-bg;
            padding-top: 50px;

            img {
                width: 150px;
            }

            h2 {
                font-size: 3rem;
            }

            p {
                font-size: .8rem;
                font-weight: bold;
                text-transform: uppercase;
            }


        }
    }

}
</style>