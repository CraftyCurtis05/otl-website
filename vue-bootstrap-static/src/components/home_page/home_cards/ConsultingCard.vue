<template>
    <div class="card w-25">
        <router-link to="/services#consulting" class="link">
            <img src="@/assets/images/home_page/icons/consulting_icon.png" class="card-img-top mx-auto" alt="Consulting Icon Image"/>
        </router-link>    
        <div class="card-body">
            <router-link to="/services#consulting" class="link">
                <h2 class="card-title h5"><b>Consulting</b></h2>
            </router-link>
            <p class="card-text text">Personalized consulting services to help you choose the best technology solutions for your business.</p>
        </div>
        <ul class="list text-start">
            <li class="list-item text"><b>Network Analysis: </b>Optimize performance</li>
            <li class="list-item text"><b>Network Design: </b>Custom network solutions</li>
            <li class="list-item text"><b>Consulting Expertise: </b>Tailored recommendations</li>
        </ul>
        <div class="card-link">
            <router-link to="/services#consulting">Learn More</router-link>
        </div>
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