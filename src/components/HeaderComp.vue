<template>
    <header >
        <div class="container-fluid header-size d-flex justify-content-between align-items-center">
            <div class="logo">
                <img src="../assets/styles/img/logo.svg" alt="">
            </div>
            <div class="navbar">
                <div>
                    <ul class="d-flex my-0 gap-4">
                        <li v-for="(link, index) in store.navList" :key="index">
                            <a :href="link.url">{{ link.text }} <img v-if="(link.arrow)" src="../assets/styles/img/image (7).svg" alt=""> </a>
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
    padding-right: 20px;
    color: $gray-bg;
    margin-right: 10px;
    font-size: 1.2rem;


}

.container-fluid {
    height: 90px;
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

.social-icons {

    width: 250px;
    margin-right: 10px;
    margin-left: 10px;

    i{
        padding: 5px 15px;
        
    }

    img {
        width: 15px;
        height: 15px;
        margin: 0 10px;
        object-fit: contain;
    }
}





ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        a {
            font-size: .8rem;
            color: $dark-gray;
            text-decoration: none;
            font-weight: bold;
            img{
                width: 10px;
            }

        }
    }

}
</style>