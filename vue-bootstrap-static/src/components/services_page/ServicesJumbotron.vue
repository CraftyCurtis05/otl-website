<template>
    <main class="jumbotron">
        <section class="col-md-6 mx-auto text-center">
            <h1 class="display-4 text-white">Maximize Your Business Tech Potential.</h1>
            <hr class="my-4 text-secondary">
            <p class="lead text-white">We provide a range of services—including consulting, support, installation, maintenance, and VoIP solutions—designed to optimize your business with tailored, innovative technology.</p>
            <p class="lead">
                <router-link class="btn btn-primary btn-lg" to="/contact" role="button">Contact Us</router-link>
            </p>
        </section>
    </main>
</template>

<script>
export default {
    name: 'ServicesJumbotron'
};
</script>

<style scoped>
.jumbotron {
    height: 45vh;
    background-image: url('@/assets/images/services_page/services_jumbotron.png');
    background-size: cover; /* Optional: Adjusts the image to cover the entire element */
    background-position: center center; /* Optional: Centers the image */
}
</style>