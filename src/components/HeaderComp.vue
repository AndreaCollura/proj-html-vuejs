<template>
    <header>
        <div class="container-fluid header-size d-flex justify-content-between align-items-center">
            <div class="logo">
                <img src="../assets/styles/img/logo.svg" alt="">
            </div>

            <NavBarComp />

            <div class="social-icons d-flex align-items-center">
                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                <a v-for="(icon, index) in store.socialList" :key="icon" class="me-2" href="">
                    <img :src="icon.text" alt="">
                </a>
            </div>
        </div>
    </header>
</template>

<script>
import NavBarComp from './NavBarComp.vue';
import { store } from '../data/store'
export default {
    name: 'HeaderComp',
    components: {
        NavBarComp,

    },
    data() {
        return {
            store,


        }
    },
    methods: {

    }
}
</script>
    

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.container-fluid {
    height: 90px;

    .social-icons {

        width: 250px;
        margin-right: 10px;
        margin-left: 10px;

        i {
            padding: 5px 15px;
            border-right: 1px solid $grey-bg ;
            padding-right: 20px;
            color: $grey-bg;
            margin-right: 10px;
            font-size: 1.2rem;

        }

        img {
            width: 15px;
            height: 15px;
            margin: 0 10px;
            object-fit: contain;
        }
    }




    .logo {
        width: 160px;
        height: 60px;

        img {
            width: 100%;
            height: 100%;
            margin-left: 5px;

        }

    }
}
</style>