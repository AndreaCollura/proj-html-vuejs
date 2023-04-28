<template>
    <li class="prova">
        <a :href="link.url">{{ link.text }}<img v-if="(link.arrow)" src="../assets/styles/img/image (7).svg" alt=""></a>
        <span >
            <ul class="dropdown" v-if="link.arrow">
                <li v-for="(child, index) in link.children" >
                    <a :href="child.url">
                        {{ child.text }}
                    </a>
                </li>
            </ul>
        </span>
    </li>
</template>

<script>
export default {
    name: 'LinkMenu',
    props: ["link"],
    data(){
        return{
            
            

        }
    },
    methods: {
        
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.dropdown {
    display: none;
    width: 100%;
    height: 100%;
    top: 15px;
    left: 0;
    padding: 0;
    list-style-type: none;
    background-color: #060707;



    li { 
        width: 250px;

        border-top: 1px solid $gray-bg;
        &:hover {
            a{
                color: $gray-bg;
            }
        }

        a {
            display: block;
            padding: 10px;
            color: #fff;
            text-decoration: none;
        }
    }

}




li.prova {

    &:hover .dropdown{
        display: block;

    }
    a {
        font-size: .8rem;
        color: $dark-gray;
        text-decoration: none;
        font-weight: bold;
        display: block;

        img {
            width: 10px;
            position: relative;

        }

    }

    span {
        display: block;
        position: absolute;

        height: auto;
        padding: 20px;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        z-index: 1000;

        li {
            a {
                color: $white-bg;
                text-transform: uppercase;
                font-size: .7rem;
            }
        }
    }
}
</style>