<template>
    <article class="card-container">
        <div class="card">
            <h1 class="title">Consulting Services</h1>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Pricing is available by proposal only.</li>
            </ul>
            <p class="card-text">Contact us to schedule an appointment, and our team will discuss your specific project and provide a tailored quote.</p>
            <router-link class="btn btn-md" to="/contact" role="button">
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>
            <router-link to="/services#consulting" class="learn-more">
                <p class="learn-more">Learn More About Our Consulting Services</p>
            </router-link>
        </div>
    </article>
</template>

<script>
export default {
    name: 'ConsultingCard;'
};
</script>

<style scoped>

</style>