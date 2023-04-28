<template>
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
</template>

<script>

    export default {
        name: 'AboutUsComp',
        data(){
            return{
                
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.about-us {
    background-image: url(../assets/styles/img/About-Us.jpg);
    height: 570px;

    .content-box {
        font-weight: bold;
        padding: 100px 60px 0 40px;
        color: $white-bg;

        p {
            font-weight: 700;
            font-size: .8rem;

        }

        h2 {
            font-size: 2.5rem;
            padding-bottom: 20px;
            font-weight: 700;
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

</style>