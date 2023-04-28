<template>
    <section id="features" class="container mt-5 mb-5">
        <div class="text-center text-uppercase">
            <p>pelicula studio</p>
            <h4 class="fs-1">this is what we do</h4>
        </div>
        <div class="d-flex flex-wrap ms-4">
            <div v-for="(card, index) in store.featureList" :key="index" class="card-box d-flex flex-column ms-2 mt-2">
                <div class="my-card">
                    <img :src="card.image" alt="">
                </div>
                <div class="txt-box  text-center">
                    <h5 class="text-uppercase">{{ card.bigtxt }}</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sit.</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'FeaturesComp',
    data() {
        return {
            store
        }
    }


}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


#features {

    h4 {
        font-weight: 700;
    }

    p {
        font-size: .8rem;
        font-weight: 700;
        color: $gray-bg;
    }

    .card-box {
        width: 400px;

        .my-card {
            width: 100%;
            height: 180px;
            

            img {
                width: 100%;
                height: 100%;
                scale: .4;
            }
        }
    }

    .txt-box {
        margin: 0 auto;
        width: 300px;

        h5 {
            font-weight: 700;
            font-size: 1rem;
        }

        span {
            color: $gray-bg;
        }
    }
}
</style>