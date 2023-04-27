<template>
    <main>

        <!-- HERO -->
        <section class="pb-5">
            <div class="container-fluid hero d-flex justify-content-start ">
                <div class="container content  text-uppercase">
                    <div class="txt-box">
                        <p class="m-0">cinemato studio</p>
                        <h1>action and inspire people</h1>
                        <button>read more</button>
                    </div>
                </div>
            </div>
        </section>

        <!--/ HERO -->

        <!-- FEATURES -->
        <section id="features" class="container mt-5 mb-5">
            <div class="text-center text-uppercase">
                <p>pelicula studio</p>
                <h4 class="fs-1">this is what we do</h4>
            </div>
            <div class="d-flex flex-wrap ms-4">
                <div v-for="(card, index) in store.featureList" :key="index" class="card-box d-flex flex-column ms-2 mt-2">
                    <div class="my-card">
                        <img :src="card.image" alt="">
                    </div>
                    <div class="text-center">
                        <h5 class="text-uppercase">{{ card.bigtxt }}</h5>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sit.</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- / FEATURES   -->

        <!-- ABOUT US -->
        <section class="pt-5">
            <div class="container-fluid about-us d-flex justify-content-end">
                <div class="content-box w-50">
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
                    <div>
                        <button class="button">read more</button>
                    </div>
                </div>
            </div>
        </section>
        <!--/ ABOUT US -->

        <!-- BEST HITS  -->
        <section id="hits" class="container mt-5 mb-5">
            <div class="text-center text-uppercase mb-4">
                <p>your watchlist</p>
                <h4 class="fs-1">best hits movies</h4>
            </div>
            <div class="d-flex flex-wrap gap-3 ms-4">
                <div v-for="(card, index) in store.hitsList" :key="index" class="card-box d-flex flex-column ms-2 mt-2">
                    <div class="my-card">
                        <img :src="card.image" alt="">
                    </div>
                    <div class="text-center mt-3">
                        <h5 class="text-uppercase">{{ card.bigtxt }}</h5>
                        <span>{{ card.smalltxt }}</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- / BEST HITS   -->

        <!-- STATISTICS -->
        <section id="statistics">
            <div class="container-fluid">
                <div class="container d-flex justify-content-between my-auto">
                    <div v-for="(box, index) in store.statisticList" :key="index" class="stati-box text-center ">
                        <h2>{{box.number}}</h2>
                        <p>{{box.txt}}</p> 
                    </div>
                </div>
            </div>
        </section>
        <!-- STATISTICS -->

        <!-- TEAM -->
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
                    <div class="text-center mt-3">
                        <h5 class="text-uppercase">{{ person.bigtxt }}</h5>
                        <span>{{ person.smalltxt }}</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- /TEAM -->

        <!-- QUOTE -->
        <section id="quote">
            <div class="container-fluid d-flex align-items-center ">
                <div class="container d-flex flex-column align-items-center w-50 ">
                    <div >
                        <img class="quote-icon" src="../assets/styles/img/image (20).svg" alt="">
                    </div>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi, aspernatur, ex officia
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



/* HERO */
.hero {
    height: 700px;
    background-image: url(../assets/styles/img/Main-Banner-1.jpg);
    /* background-position: center; */

    .content {
        padding-top: 220px;
        color: $white-bg;

        .txt-box {
            width: 550px;

            p {
                font-size: 1.2rem;
            }

            h1{
                font-size: 4.3rem;
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
        }

    }

}

/* / HERO */


/* FEATURES */

#features{
    .card-box {
    width: 400px;

    .my-card {
        width: 100%;
        height: 180px;
        

        img {
            width: 100%;
            height: 100%;
            scale: .4;



        }
    }
}
}



/* FEATURES */

/* ABOUT US */

.about-us {
    background-image: url(../assets/styles/img/About-Us.jpg);
    height: 570px;

    .content-box {
        font-weight: bold;
        padding: 100px 60px 0 40px;
        color: $white-bg;

        p {
            font-size: .9rem
        }

        h2 {
            font-size: 2.5rem;
            padding-bottom: 20px;
        }

        span {
            font-size: .9rem;
            font-weight: 400;
        }

        button {
            width: 150px;
            height: 40px;
            font-size: .8rem;
            background-color: $white-bg;
            border: none;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 20px;

        }
    }

}

/* ABOUT US */

/* HITS */

#hits {
    .card-box {
        width: 400px;

        h5{
            font-size: 1rem;
        }

        .my-card {
            width: 100%;
            height: 300px;
            

            img {
                width: 100%;
                height: 100%;


            }
        }
    }
}



/* HITS */


/*  STATISTICS */

    #statistics{
        height: 250px;
        background-image: url(../assets/styles/img/Parallax-01.jpg) ;
        background-position: center;
        .container{

            padding-top: 30px;
            .stati-box{
            width: 200px;
            height: 200px;
            color: $white-bg;
            padding-top: 50px;
            h2{
                font-size: 3rem;
            }
            p{
                font-size: .8rem;
                font-weight: bold;
                text-transform: uppercase;
            }
            

        }
        }
        
    }

/* / STATISTICS */

/* TEAMS */

#teams {
    .card-box {
        width: 280px;

        h5{
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
}

/* TEAMS */

/* QUOTE */

#quote{
    .container-fluid{
        background-image: url(../assets/styles/img/Parallax-02.jpg);
        color: $white-bg;
        height: 500px;
        p{
            font-weight: bold;
            font-size: .9rem;
        }
        
        .quote-icon{
            margin-bottom: 30px;
            width: 50px;
            filter: invert(1)
        
        
        }
        .staff-box{
            
            width: 200px;
            height: 70px;
            img{
                width: 55px;
                height: 55px;
                object-fit: contain;
                overflow: hidden;
                border-radius: 50%;
                margin-right: 20px;
            }
            h4{
                text-transform: uppercase;
                font-size: 1rem;
                margin: 0;
                padding: 0;
                
            }
            span{
                font-size: .8rem;
                line-height: .1rem;
                
            }
        }
    }
    
}


</style>