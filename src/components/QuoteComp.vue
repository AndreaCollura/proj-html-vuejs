<template>
    <section id="quote">
            <div class="container-fluid d-flex align-items-center ">
                <div class="container d-flex flex-column align-items-center w-50 ">
                    <div>
                        <img class="quote-icon" src="../assets/styles/img/image (20).svg" alt="">
                    </div>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi,
                        aspernatur, ex officia
                        praesentium
                        est illo consequuntur quis optio placeat aliquid veniam! Dolorem, velit recusandae,
                        ex officia
                        praesentium
                        est illo consequuntur quis optio placeat aliquid veniam! Dolorem, velit recusandae</p>
                    <div class="staff-box d-flex align-items-center">
                        <img src="../assets/styles/img/01.jpg" alt="">
                        <div>
                            <h4>john doe</h4>
                            <span>Designer</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'QuoteComp',
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#quote {
    .container-fluid {
        background-image: url(../assets/styles/img/Parallax-02.jpg);
        color: $white-bg;
        height: 500px;

        p {
            font-weight: bold;
            font-size: .9rem;
        }

        .quote-icon {
            margin-bottom: 30px;
            width: 50px;
            filter: invert(1)
        }

        .staff-box {

            width: 200px;
            height: 70px;

            img {
                width: 55px;
                height: 55px;
                object-fit: contain;
                overflow: hidden;
                border-radius: 50%;
                margin-right: 20px;
            }

            h4 {
                text-transform: uppercase;
                font-size: 1rem;
                margin: 0;
                padding: 0;

            }

            span {
                font-size: .8rem;
                line-height: .1rem;

            }
        }
    }

}



</style>