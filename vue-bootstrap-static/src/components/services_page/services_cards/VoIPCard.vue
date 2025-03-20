<template>
    <div class="card w-25">
        <div class="card-body">
            <router-link to="/services#voip" class="link">
                <h2 class="card-title h5"><b>VoIP Solutions</b></h2>
            </router-link>
            <p class="card-text text"><em>Click to learn more</em></p>
        </div>
        <router-link to="/services#voip" class="link">
            <img src="@/assets/images/services_page/cards/voip_card.png" class="card-img-top mx-auto" alt="VoIP Solutions Image"/>
        </router-link>    
        <p>Enhance communication with reliable, cost-effective VoIP solutions.</p>
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