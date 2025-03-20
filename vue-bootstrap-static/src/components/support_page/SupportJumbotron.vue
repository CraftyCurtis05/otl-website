<template>
    <main class="jumbotron">
        <article class="container col-md-6">
            <h1 class="title">Expert Support When You<br>Need It Most.</h1>
            <hr class="my-4 text-secondary">
            <p class="lead text-white">We offer expert support for Cisco, Ubiquiti, and Fortinet systems. Whether you need assistance during business hours, after-hours emergency support, or ongoing IT management, we have flexible options to meet your needs.</p>
            <p class="lead">
                <router-link class="btn btn-primary btn-lg" to="/contact" role="button">Get Support</router-link>
            </p>
        </article>
    </main>
</template>

<script>
export default {
    name: 'SupportJumbotron'
};
</script>

<style scoped>
.jumbotron {
    height: 45vh;
    background-image: url('@/assets/images/support_page/support_jumbotron.png');
    background-size: cover; /* Optional: Adjusts the image to cover the entire element */
    background-position: center center; /* Optional: Centers the image */
}
</style>