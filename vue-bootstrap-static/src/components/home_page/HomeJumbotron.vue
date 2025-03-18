<template>
    <main class="jumbotron col-12">
        <section class="col-md-5">
            <h1 class="display-4 text-white">Your Technology Needs, Our Expertise.</h1>
            <hr class="my-4 text-secondary">
            <p class="lead text-white">We specialize in providing top-tier services designed to meet all your business technology needs, including:</p>
            <p class="text-info">Support, Installation, Maintenance, Consulting & VoIP Solutions</p>
            <p class="lead">
                <router-link class="btn btn-primary btn-lg" to="/services" role="button">Learn more</router-link>
            </p>
        </section>
    </main>
</template>

<script>
export default {
    name: 'HomeJumbotron'
};
</script>

<style scoped>
.jumbotron {
    height: 45vh;
    background-image: url('@/assets/images/home_page/home_jumbotron.png');
    background-size: cover; /* Optional: Adjusts the image to cover the entire element */
    background-position: center center; /* Optional: Centers the image */
}
</style>