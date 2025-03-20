<template>
    <article class="card-container">
        <div class="card">
            <h1 class="title">Video Security Services</h1>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cameras, Door Access, and NVR Solutions</li>
            </ul>
            <p class="card-text">Contact us for a customized quote to fit your security needs.</p>
            <router-link class="btn btn-md" to="/contact" role="button">
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>
            <router-link to="/services#video-security" class="learn-more">
                <p class="learn-more">Learn More About Our Video Security Services</p>
            </router-link>
        </div>
    </article>
</template>

<script>
export default {
    name: 'VideoSecurityCard;'
};
</script>

<style scoped>

</style>