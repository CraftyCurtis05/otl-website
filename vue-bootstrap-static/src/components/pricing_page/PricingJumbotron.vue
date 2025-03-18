<template>
    <main class="jumbotron">
        <section class="col-md-6 mx-auto text-center">
            <h1 class="display-4 text-white">Power Your Success with Flexible Pricing.</h1>
            <hr class="my-4 text-secondary">
            <p class="lead text-white">Flexible, transparent pricing to give you the best value on all our tech services.</p>
            <p class="lead">
                <router-link class="btn btn-primary btn-lg" to="/contact" role="button">Get Quote</router-link>
            </p>
        </section>
    </main>
</template>

<script>
export default {
    name: 'PricingJumbotron'
};
</script>

<style scoped>
.jumbotron {
    height: 45vh;
    background-image: url('@/assets/images/pricing_page/pricing_jumbotron.png');
    background-size: cover; /* Optional: Adjusts the image to cover the entire element */
    background-position: center center; /* Optional: Centers the image */
}
</style>