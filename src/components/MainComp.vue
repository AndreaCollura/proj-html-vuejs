<template>
    <main>

        <!-- HERO -->
        <section>
            <div class="container-fluid hero d-flex justify-content-start ">
                <div class="container content  text-uppercase">
                    <div class="txt-box">
                        <p class="m-0">cinemato studio</p>
                        <h1>action and inspire people</h1>
                        <button >read more</button>
                    </div>
                    
                </div>
            </div>
        </section>

        <!--/ HERO -->

        <!-- FEATURES A BEST HITS  -->
        <section class="container debug">
            <div class="text-center">
                <p>pelicula studio</p>
                <h4>this is what we do</h4>
            </div>
            <div class="container">
                <div class="card">
                    <img src="" alt="">
                    <h5>array of equipment</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sit.</span>
                </div>
            </div>
        </section>
        <!-- / FEATURES UGUALE A BEST HITS  -->

        <!-- ABOUT US -->
        <section>
            <div class="container-fluid d-flex justify-content-end debug">
                <div class="aboust-us w-50">
                    <p>ABOUT US</p>
                    <h2>HIGH QUALITY CINEMATICS</h2>
                    <span class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cumque, beatae
                        voluptates vero
                        esse in
                        aliquam sed culpa assumenda temporibus quasi inventore nulla labore natus! Similique, quos cum sed
                        ipsa esse
                        nemo eveniet excepturi repellendus, laborum quo quia, saepe itaque. Culpa placeat est, repudiandae
                        eos
                        veritatis ipsum nihil quos dignissimos?</span>
                    <button class="button">read more</button>
                </div>
            </div>
        </section>
        <!--/ ABOUT US -->

        <!-- BEST HITS UGUALE A FEATURES -->
        <section class="container debug">
            <div class="text-center">
                <p>YOUR WATCHLIST</p>
                <h4>BEST HITS MOVIES</h4>
            </div>
            <div class="container">
                <div class="card">
                    <img src="" alt="">
                    <h5>array of equipment</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sit.</span>
                </div>
            </div>
        </section>
        <!-- / BEST HITS UGUALE A FEATURES  -->

        <!-- STATISTICS -->
        <section>
            <div class="container-fluid">
                <div class="container">
                    <div>
                        <h2>158</h2>
                        <p>SATISFIED CLIENTS</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- STATISTICS -->

        <!-- TEAM -->
        <section class="container debug">
            <div class="text-center">
                <p>THE PERICUROS</p>
                <h4>MEET THE TEAM</h4>
            </div>
            <div class="container debug">
                <div class="card">
                    <img src="" alt="">
                    <h5>FABRICIO GUERRA</h5>
                    <span>MAIN DIRECTOR</span>
                </div>
            </div>
        </section>
        <!-- /TEAM -->

        <!-- QUOTE -->
        <section>
            <div class="container-fluid debug">
                <div class="container debug">
                    <h2><i>quote icon</i></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, aspernatur, ex officia
                        praesentium
                        est illo consequuntur quis optio placeat aliquid veniam! Dolorem, velit recusandae?</p>
                    <div>
                        <img src="" alt="">
                        <h4></h4>
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
        <!--/ QUOTE -->

        <!-- LATEST NEWS -->
        <section class="container debug">
            <div class="text-center">
                <p>LATEST NEWS</p>
                <h4>ARTICLES UPDATED DAILY</h4>
            </div>
            <div class="container debug">
                <div class="card">
                    <img src="" alt="">
                    <span>november</span>
                    <h5>RECAP YOUR LATEST COMPANY...</h5>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quibusdam.</span>
                </div>
            </div>
        </section>
        <!-- / LATEST NEWS -->

        <!-- ICONS -->
        <section>
            <div class="container-fluid icons-bg">
                <div class="container">
                    <div>
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- / ICONS -->

        <!-- WORK WITH US -->

        <section class="container d-flex">
            <div class="w-50 p-4 debug">
                <span>COLLABORATE</span>
                <h2>WANT TO WORK WITH US</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda at tempora atque
                    molestiae.
                    Unde molestias fugit officia doloremque ullam assumenda exercitationem praesentium at, laboriosam,
                    molestiae vel
                    perferendis architecto aut!</span>
            </div>
            <div class="w-50 p-3 debug">
                <form class="row">
                    <input type="text" class="col-6">
                    <input type="text" class="col-6">
                    <input type="text" class="col-6">
                    <input type="text" class="col-6">
                    <input type="text" class="col-12">
                    <button type="submit" class="col-12">submit</button>
                </form>
            </div>
        </section>

        <!-- / WORK WITH US -->

    </main>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'MainComp',
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
    .hero{
        height: 500px;
        background-image: url(../assets/styles/img/Parallax-02.jpg);
        background-position: center;
        .content{
            padding-top: 150px;
            color: $white-bg;
            .txt-box{
                width: 300px;
                p{
                    font-size: .8rem;
                }
                button{
                    width: 100px;
                    height: 35px;
                    font-size: .6rem;
                    background-color: $white-bg;
                    border: none;
                    font-weight: bold;
                    text-transform: uppercase ;
                    margin-top: 10px;
                    
                }
            }

        }
        
    }




</style>