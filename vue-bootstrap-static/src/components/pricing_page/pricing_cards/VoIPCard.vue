<template>
    <article class="card-container">
        <div class="card">
            <h1 class="title">VoIP Services</h1>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Hosted VoIP Extension</li>
                <li class="list-group-item">Advanced Features</li>
            </ul>
            <p class="card-text">*Quoted for custom pricing based on your needs.</p>
            <p class="card-text">All pricing is per month, excluding taxes and fees.</p>
            <router-link class="btn btn-md" to="/contact" role="button">
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>
            <router-link to="/services#voip" class="learn-more">
                <p class="learn-more">Learn More About Our VoIP Services</p>
            </router-link>
        </div>
    </article>
</template>

<script>
export default {
    name: 'VoIPCard;'
};
</script>

<style scoped>

</style>