<template>
    <div class="card w-25">
        <div class="card-body">
            <router-link to="/services#support" class="link">
                <h2 class="card-title h5"><b>Support</b></h2>
            </router-link>
            <p class="card-text text"><em>Click to learn more</em></p>
        </div>
        <router-link to="/services#support" class="link">
            <img src="@/assets/images/services_page/cards/support_card.png" class="card-img-top mx-auto" alt="Support Image"/>
        </router-link>    
        <p>Count on our support to minimize downtime and keep your business running smoothly.</p>
    </div>
</template>

<script>
export default {
    name: 'ConsultingCard',
};
</script>

<style scoped>
.card {
    line-height: 1.4;
    padding-bottom: 1rem;
}

.link {
    text-decoration: none;
    color: black;
}

.card-img-top {
    width: 50%;
    font-size: 1.5rem;
}

.card-body{
    padding: .5rem;
}
</style>