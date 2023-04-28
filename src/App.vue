<template>

  <HeaderComp/>


  <MainComp/>


  <FooterComp/>
  

</template>

<script>

import { store } from './data/store'
import prova from './components/prova.vue'
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp,
    

  },
  data() {
    return {
      store


    }
  },
  methods: {

  },

}
</script>

<style lang="scss" scoped>

</style>