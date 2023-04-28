<template>
    <section id="statistics">
        <div class="container-fluid">
            <div class="container d-flex justify-content-between my-auto">
                <div v-for="(box, index) in store.statisticList" :key="index" class="stati-box text-center ">
                    <h2>{{ box.number }}</h2>
                    <p>{{ box.txt }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'Statistics',
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#statistics {
    height: 250px;
    background-image: url(../assets/styles/img/Parallax-01.jpg);
    background-position: center;

    .container {

        padding-top: 30px;

        .stati-box {
            width: 200px;
            height: 200px;
            color: $white-bg;
            padding-top: 50px;

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