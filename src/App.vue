<template>
  <!-- HEADER -->

  <HeaderComp/>

  <!--FINE HEADER -->



  <!-- MAIN -->

  <MainComp/>

  <!-- FINE MAIN -->

  <!-- FOOTER -->

  <footer class="container-fluid debug">
    <!-- <div class="container d-flex debug">
      <ul class="px-0" v-for="(list, index) in footerLinks" :key="index">
        <li class="text-white text-uppercase">{{ list.title }}</li>
        <li v-for="(item, i) in list.links" :key="i">
          <a :href="item.url">{{ item.text }}</a>
        </li>
      </ul>
    </div> -->
    <div class="container text-center">
      <p>All rights resever.................</p>
    </div>
  </footer>

  <!-- / FOOTER -->
</template>

<script>
import { store } from './data/store'
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp

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
// .icons-bg{
//   background-image: url(./assets/styles/img/Parallax-03.jpg);
//   height: 200px;

//   margin: 0 5px;
//   background-position: center;

// }
</style>