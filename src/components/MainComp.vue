<template>
    <main>

        <HeroComp />

        <FeaturesComp />

        <AboutUsComp />

        <BestHits />

        <Statistics />

        <TeamComp />

        <QuoteComp /> 

        <LatestNews />

        <IconsComp />

        <CtaComp />

    </main>
</template>

<script>

import CtaComp from './CtaComp.vue'
import IconsComp from './IconsComp.vue'
import LatestNews from './LatestNews.vue'
import QuoteComp from './QuoteComp.vue'
import TeamComp from './TeamComp.vue'
import Statistics from './Statistics.vue'
import BestHits from './BestHits.vue'
import AboutUsComp from './AboutUsComp.vue'
import HeroComp from './HeroComp.vue'
import FeaturesComp from './FeaturesComp.vue'
import { store } from '../data/store'

export default {
    name: 'MainComp',
    components: {
        HeroComp,
        FeaturesComp,
        AboutUsComp,
        BestHits,
        Statistics,
        TeamComp,
        QuoteComp,
        LatestNews,
        IconsComp,
        CtaComp,
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
</style>