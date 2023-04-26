<template>
    <header>
        <div class="container-fluid d-flex justify-content-between align-items-center">
            <div class="logo">
                <img src="../assets/styles/img/logo.svg" alt="">
            </div>
            <div class="navbar">
                <div>
                    <ul class="d-flex my-0 gap-4">
                        <li v-for="(link, index) in store.navList" :key="index">
                            <a :href="link.url">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
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
import { store } from '../data/store'
export default {
    name: 'HeaderComp',
    components: {

    },
    data() {
        return {
            store

        }
    },
    methods: {

    }
}
</script>
    

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

i {
    border-right: 1px solid $gray-bg ;
    padding-right: 10px;
    color: $gray-bg;
    margin-right: 10px;
    font-size: .8rem;


}

.container-fluid {
    height: 50px;
}

.logo {
    width: 100px;
    height: 50px;

    img {
        width: 100%;
        height: 100%;
        margin-left: 5px;

    }

}

.social-icons {

    width: 90px;
    margin-right: 10px;
    img {
        width: 10px;
        height: 10px;
        object-fit: contain;
    }
}





ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        a {
            font-size: .6rem;
            color: $gray-bg;
            text-decoration: none;
            font-weight: bold;

        }
    }

}
</style>