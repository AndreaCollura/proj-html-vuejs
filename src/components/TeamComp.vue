<template>
    <section id="teams" class="container mt-5 mb-5">
        <div class="text-center text-uppercase mb-4">
            <p>the pericuros</p>
            <h4 class="fs-1">meet the team</h4>
        </div>
        <div class="d-flex flex-wrap gap-3 ms-4">
            <div v-for="(person, index) in store.teamList" :key="index" class="card-box d-flex flex-column ms-2 mt-2">
                <div class="my-card">
                    <img :src="person.image" alt="">
                </div>
                <div class="txt-box text-center mt-3">
                    <h5 class="text-uppercase">{{ person.bigtxt }}</h5>
                    <span>{{ person.smalltxt }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'TeamComp',
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#teams {

    h4 {
        font-weight: 700;
    }

    p {
        font-size: .8rem;
        font-weight: 700;
        color: $gray-bg;
    }

    .card-box {
        width: 280px;

        h5 {
            font-size: 1rem;
        }

        .my-card {
            width: 100%;
            height: 330px;


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
            color: $gray-bg;
        }
    }
}
</style>
