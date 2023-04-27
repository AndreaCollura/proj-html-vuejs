<template>
  <!-- HEADER -->

  <HeaderComp/>

  <!--FINE HEADER -->



  <!-- MAIN -->

  <MainComp/>

  <!-- FINE MAIN -->

  <!-- FOOTER -->

  <FooterComp/>

  <!-- / FOOTER -->
</template>

<script>
import { store } from './data/store'
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp

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

  @import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');


 
</style>