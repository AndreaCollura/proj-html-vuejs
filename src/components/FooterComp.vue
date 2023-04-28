<template>
    <footer>
        <div class="foot-cont d-flex align-items-center">
            <div class="container-fluid">
                <div class="container d-flex">
                    <ul>
                        <li>
                            <h5 class="text-uppercase">contact info</h5>
                        </li>
                        <li><img src="../assets/styles/img/footer-location-dot-solid.svg" alt=""> 2/45 tower street, new
                            york
                            USA</li>
                        <li><img src="../assets/styles/img/footer-phone-solid.svg" alt=""> call us on 0800 840 1010</li>
                        <li><img src="../assets/styles/img/footer-envelope-soli.svg" alt=""> demo@example.com</li>
                    </ul>

                    <ul v-for="(list, index) in store.footerList" :key="index">
                        <li>
                            <h5 class="text-uppercase">
                                {{ list.title }}
                            </h5>
                        </li>
                        <li v-for="(item, i) in list.links" :key="i">
                            <a :href="item.url">{{ item.text }}</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h5 class="text-uppercase">newsletter</h5>
                        </li>
                        <li>subscribe to receive inspirations, ideas & news in your inbox.</li>
                        <input name="subscribe" placeholder="Enter Your Mail" type="text">
                        <button>subscribe</button>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid d-flex align-content-center end-page">
            <div class=" container end-page-border text-center">
                <p class="text-capitalize"> &copy; 2023 All rights resevered. develobed by andrea c.</p>
            </div>
        </div>

    </footer>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'FooterComp',
    components: {

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


footer {

    margin: 0 -5px;

    .end-page {
        background-color: $black-bg ;
        color: $footer-gray;



        .end-page-border {
            border-top: 1px solid $gray-bg;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                margin: 0;
            }
        }
    }

    .foot-cont {
        background-color: $black-bg ;
        height: 450px;
    }

    ul {
        margin-bottom: 10px;
        list-style: none;
        color: $footer-gray;
        width: 300px;

        input {
            width: 100%;
            height: 40px;
            font-size: .9rem;
            padding-left: 10px;
            background-color: $dark-gray;
            border: none;
            font-weight: bold;
            text-transform: capitalize;

        }

        button {
            width: 170px;
            height: 50px;
            font-size: .8rem;
            background-color: $white-bg;
            border: none;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 20px;
        }

        li {
            text-transform: capitalize;
            line-height: 3rem;

            a {
                text-decoration: none;
                color: $footer-gray;

                &:hover{
                    color: $white-bg;
                }
            }


            h5 {
                font-size: 1rem;
                font-weight: 700;
                color: $light-gray;
            }

            img {
                width: 5%;
            }
        }
    }
}
</style>