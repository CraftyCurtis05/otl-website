<template>
    <div class="card w-25">
        <router-link to="/services#support" class="link">
            <img src="@/assets/images/home_page/icons/support_icon.png" class="card-img-top mx-auto" alt="Support Icon Image"/>
        </router-link>    
        <div class="card-body">
            <router-link to="/services#support" class="link">
                <h2 class="card-title h5"><b>Support</b></h2>
            </router-link>
            <p class="card-text text">Receive expert assistance for all your VoIP and network communication system needs.</p>
        </div>
        <ul class="list text-start">
            <li class="list-item text"><b>Hourly Support: </b>Non-emergency assistance</li>
            <li class="list-item text"><b>Emergency Support: </b>Critical issue resolution</li>
            <li class="list-item text"><b>Locations????</b></li>
        </ul>
        <div class="card-link">
            <router-link to="/services#support">Learn More</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SupportCard',
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