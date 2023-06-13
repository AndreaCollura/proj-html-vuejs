<template>
    <section id="cta" class="container  d-flex align-items-center">
        <div class="w-50 p-4 ">
            <span>collaborate</span>
            <h2 class="mt-4">want to work with us?</h2>
            <h2>leave us a message!</h2>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda at tempora
                atque
                molestiae.
                Unde molestias fugit officia doloremque ullam assumenda exercitationem praesentium at, laboriosam,
                molestiae vel
                perferendis architecto aut!</p>
        </div>
        <div class="w-50 p-3 mt-3 ">
            <form class="row">
                <div class="col-6 mb-4">
                    <input placeholder="Your Name" name="cta" type="text" class="form-control">
                </div>
                <div class="col-6">
                    <input placeholder="Your email" name="cta" type="text" class="form-control">
                </div>
                <div class="col-6 mb-4">
                    <input placeholder="Mobile number" name="cta" type="text" class="form-control">
                </div>
                <div class="col-6">
                    <input placeholder="Your Pincode" name="cta" type="text" class="form-control">
                </div>
                <div class="col-12 mb-4">
                    <textarea placeholder="Enter Your Message" name="cta" type="text" class="big-txt-form"></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="big-btn-form">submit now</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>

export default {
    name: 'CtaComp',
    data() {
        return {

        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


#cta {

    height: 500px;

    span {
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 700;

    }

    h2 {
        text-transform: uppercase;

        font-weight: 700;
    }

    p {
        color: $grey-bg;
    }

    .form-control {
        background-color: $light-grey;
        border: none;
        border-radius: none;

    }

    .big-txt-form {
        width: 100%;
        background-color: $light-grey;
        border: none;
        border-radius: none;
        height: 150px;
        padding: 5px 10px;

    }

    .big-btn-form {
        height: 40px;
        width: 100%;
        background-color: $black-bg;
        color: $white-bg;
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 700;

    }


}
</style>