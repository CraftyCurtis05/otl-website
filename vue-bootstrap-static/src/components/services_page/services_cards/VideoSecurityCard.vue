<template>
    <div class="card w-25">
        <div class="card-body">
            <router-link to="/services#video-security" class="link">
                <h2 class="card-title h5"><b>Video Security</b></h2>
            </router-link>
            <p class="card-text text"><em>Click to learn more</em></p>
        </div>
        <router-link to="/services#consulting" class="link">
            <img src="@/assets/images/services_page/cards/video_security_card.png" class="card-img-top mx-auto" alt="Video Security Image"/>
        </router-link>    
        <p>Secure your business with advanced video surveillance for peace of mind.</p>
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