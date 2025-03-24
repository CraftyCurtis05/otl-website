<!-- src/components/home/cards/VoIPCard.vue -->
<template>
    <div class="card w-25">
        <router-link to="/services#voip" class="link">
            <img src="@/assets/images/home/icons/voip_icon.png" class="card-img-top mx-auto" alt="VoIP Icon Image"/>
        </router-link>    
        <div class="card-body">
            <router-link to="/services#voip" class="link">
                <h2 class="card-title h5"><b>VoIP Solutions</b></h2>
            </router-link>
            <p class="card-text text">VoIP services including hosting, installation, and support to keep your business connected.</p>
        </div>
        <ul class="list text-start">
            <li class="list-item text"><b>VoIP Service: </b>Reliable communication solutions</li>
            <li class="list-item text"><b>Installation: </b>Professional setup and configuration</li>
            <li class="list-item text"><b>Support: </b>Ongoing assistance for connectivity</li>
        </ul>
        <div class="card-link">
            <router-link to="/services#video-security">Learn More</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VoIPCard',
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
    width: 20%;
    font-size: 1.5rem;
}

.card-body{
    padding: .5rem;
}

.list {
    list-style-type: disc;
}

.list-item {
    padding-block: .3rem;
}
</style>