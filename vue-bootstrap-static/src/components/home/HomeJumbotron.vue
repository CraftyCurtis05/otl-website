<!-- src/components/home/HomeJumbotron.vue -->
<template>
    <main class="jumbotron">
        <article class="text-container col-md-6">
            <h1>Your Technology Needs, Our Expertise.</h1>
            <hr>
            <section class="text">
                <p>We specialize in providing top-tier services designed to meet all your business technology needs, including:</p>
                <p class="text-blue">Support, Installation, Maintenance, Consulting & VoIP Solutions</p>
                <router-link class="btn btn-md" to="/services" role="button">
                    <span class="btn-text">LEARN MORE&nbsp;</span>
                    <div class="img-container">
                        <img class="img-black" :src="imageBlack" loading="lazy"/>
                        <img class="img-white" :src="imageWhite" loading="lazy"/>
                    </div>
                </router-link>
            </section>
        </article>
    </main>
</template>

<script>
import imageBlack from "@/assets/images/icons/button_arrow_black.png";
import imageWhite from "@/assets/images/icons/button_arrow_white.png";

export default {
    name: 'HomeJumbotron',
    data() {
        return {
            imageBlack: imageBlack,
            imageWhite: imageWhite
        };
    }
};
</script>

<style scoped>
.jumbotron {
    height: 23rem;
    background-image: url('@/assets/images/home/home_jumbotron.png');
}

.text-container {
    margin-top: 2vw;
}

h1,
hr,
.text {
    width: 70%;
    margin: auto;
}

h1,
.text {
    margin-block: 1vw;
}

h1 {
    font-weight: bold;
}

.btn {
    display: flex;
    flex-direction: row;
    margin-top: 1vw;
    width: 30%;
}
</style>