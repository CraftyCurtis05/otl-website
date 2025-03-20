<template>
    <article class="card-container">
        <div class="card">
            <h1 class="title">Support Services</h1>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Hourly Support (Business Hours)</li>
                <li class="list-group-item">Emergency Support</li>
                <li class="list-group-item">Discounted Hourly Blocks (Business Hours)</li>
                <li class="list-group-item">Discounted Hourly Blocks (*Anytime Hours)</li>
            </ul>
            <p class="card-text">*Anytime hours are available 24/7, ideal for after-hours work or tasks within maintenance windows.</p>
            <p class="card-text">These hours must be purchased before the project, with additional blocks available as needed.</p>
            <router-link class="btn btn-md" to="/contact" role="button">
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>
            <router-link to="/services#support" class="learn-more">
                <p class="learn-more">Learn More About Our Support Services</p>
            </router-link>
        </div>
    </article>
</template>

<script>
export default {
    name: 'SupportCard;'
};
</script>

<style scoped>

</style>