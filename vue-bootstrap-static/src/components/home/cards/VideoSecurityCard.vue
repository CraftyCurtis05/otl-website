<!-- src/components/home/cards/VideoSecurityCard.vue -->
<template>
    <div class="card w-25">
        <router-link to="/services#video-security" class="link">
            <img src="@/assets/images/home/icons/video_security_icon.png" class="card-img-top mx-auto" alt="Video Security Icon Image"/>
        </router-link>    
        <div class="card-body">
            <router-link to="/services#video-security" class="link">
                <h2 class="card-title h5"><b>Video Security</b></h2>
            </router-link>
            <p class="card-text text">Solutions for your video security needs, including cameras, door access systems and NVR integration.</p>
        </div>
        <ul class="list text-start">
            <li class="list-item text"><b>Cameras: </b>Advanced video surveillance solutions</li>
            <li class="list-item text"><b>Door Access: </b>Secure entry systems</li>
            <li class="list-item text"><b>NVR Integration: </b>Video storage and management</li>
        </ul>
        <div class="card-link">
            <router-link to="/services#video-security">Learn More</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoSecurityCard',
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