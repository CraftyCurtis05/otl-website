<template>
    <section class=".jumbotron">
        <ServicesJumbotron />
    </section>
    <section class="banner">
        <span>OUR SERVICES</span>
        <hr class="text-secondary p-0 m-0 mx-auto">
    </section>
    <section class="card-container d-flex flex-row flex-wrap w-100 pt-2">
        <ConsultingCard/>
        <SupportCard/>
        <VideoSecurityCard/>
        <VoIPCard/>
    </section>
</template>

<script>
import ServicesJumbotron from '@/components/services_page/ServicesJumbotron.vue';
import ConsultingCard from '@/components/services_page/services_cards/ConsultingCard.vue';
import SupportCard from '@/components/services_page/services_cards/SupportCard.vue';
import VideoSecurityCard from '@/components/services_page/services_cards/VideoSecurityCard.vue';
import VoIPCard from '@/components/services_page/services_cards/VoIPCard.vue';

export default {
    name: 'ServicesView',
    components: {
        ServicesJumbotron,
        ConsultingCard,
        SupportCard,
        VideoSecurityCard,
        VoIPCard
    },
    data() {
        return {
            title: 'Services',
            description: 'This is the services page of OTL On The Line Communications website.',
            keywords: 'OTL, On The Line Communications, Services, About Our Services, Consulting, Support, Video Security, VoIP',
            imageUrl: 'https://otlcommunications.com/images/otl-logo.png',
            url: 'https://otlcommunications.com/services',
            siteName: 'OTL On The Line Communications',
            locale: 'en_US',
        };
    },
    metaInfo() {
        const { title, description, keywords, imageUrl, url, siteName, locale } = this;
        return {
        title: `${title} | OTL On The Line Communications`,
        meta: [
            { hid: 'description', name: 'description', content: description },
            { hid: 'keywords', name: 'keywords', content: keywords },
            { hid: 'author', name: 'author', content: 'Jennifer Curtis' },
            { hid: 'og:title', property: 'og:title', content: title },
            { hid: 'og:description', property: 'og:description', content: description },
            { hid: 'og:image', property: 'og:image', content: imageUrl },
            { hid: 'og:url', property: 'og:url', content: url },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:site_name', property: 'og:site_name', content: siteName },
            { hid: 'og:locale', property: 'og:locale', content: locale },
        ],
        };
    },
};
</script>

<style scoped>
/* Desktop Screen Size Styling */
@media only screen and (min-width: 1280px) {

    .banner {
        font-size: 1.3rem;
        font-weight: 600;
        padding-top: .25rem;
    }

    hr {
        width: 11%;
        border: 2px solid;
    }
}

/* Laptop Screen Size Styling */
@media only screen and (min-width: 769px) and (max-width: 1279px) {
    
}

/* Tablet Screen Size Styling */
@media only screen and (min-width: 481px) and (max-width: 768px) {
    
}

/* Mobile Screen Size Styling */
@media only screen and (max-width: 480px) {
    
}
</style>