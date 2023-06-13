<template>
    <section id="hits" class="container mt-5 mb-5">
        <div class="text-center text-uppercase mb-4">
            <p>your watchlist</p>
            <h4 class="fs-1">best hits movies</h4>
        </div>
        <div class="d-flex flex-wrap gap-3 ms-4">
            <div v-for="(card, index) in store.hitsList" :key="index" class="card-box d-flex flex-column ms-2 mt-2">
                <div class="my-card">
                    <img :src="card.image" alt="">
                </div>
                <div class="txt-box text-center mt-3">
                    <h5 class="text-uppercase">{{ card.bigtxt }}</h5>
                    <span>{{ card.smalltxt }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'BestHits',
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#hits {

    h4 {
        font-weight: 700;
    }

    p {
        font-size: .8rem;
        font-weight: 700;
        color: $grey-bg;
    }

    .card-box {
        width: 400px;

        h5 {
            font-size: 1rem;
        }

        .my-card {
            width: 100%;
            height: 300px;
            overflow: hidden;


            &:hover {
                img {
                    scale: 1.1;
                    transition: 1s;


                }
            }


            img {
                width: 100%;
                height: 100%;


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
            color: $grey-bg;
        }
    }

}
</style>