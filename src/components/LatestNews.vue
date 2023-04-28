<template>
    <section id="news" class="container mt-5 mb-5">
            <div class="text-center text-uppercase mb-4">
                <p>latest news</p>
                <h4 class="fs-1">articles updated daily</h4>
            </div>
            <div class="d-flex flex-wrap gap-3 ms-4">
                <div v-for="(card, index) in store.newsList" :key="index" class="card-box d-flex flex-column ms-2 mt-2">
                    <div class="my-card">
                        <img :src="card.image" alt="">
                    </div>
                    <div class="mt-3">
                        <span>{{ card.date }}</span>
                        <h5 class="text-uppercase mt-2">{{ card.bigtxt }}</h5>
                        <p>{{ card.smalltxt }}</p>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'LatestNews',
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


#news {

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

    span {
        color: $gray-bg;
    }

    h5 {
        font-size: .9rem;
        font-weight: 700;
    }

    .my-card {
        width: 100%;
        height: 300px;


        img {
            width: 100%;
            height: 100%;


        }
    }
}
}

</style>