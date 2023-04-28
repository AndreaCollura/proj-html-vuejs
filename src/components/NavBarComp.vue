<template>
    <div id="navbar">
        <ul class="d-flex my-0 gap-4">
            <LinkMenu v-for="(link, index) in navLinks" :link="link"/>
        </ul>
    </div>
</template>

<script>
import LinkMenu from './LinkMenu.vue';
import { store } from '../data/store'
export default {
    name: "NavBarComp",
    components: {
        LinkMenu
    },
    data() {
        return {
            store,
            isOpen: false,
            navLinks: store.navList
        }
    },
    

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.isOpen {
    display: block;
}



#navbar {

    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }
}
</style>