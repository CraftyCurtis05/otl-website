<!-- src/views/PricingView.vue -->
<template>
    <main>
        <section class="jumbotron">
            <PricingJumbotron />
        </section>
        <section class="banner">
            <h1>OUR PRICES</h1>
            <hr>
        </section>
        <section class="card-container">
            <CardDeck />
        </section>
    </main>
</template>

<script>
import PricingJumbotron from '@/components/pricing/PricingJumbotron.vue';
import CardDeck from '@/components/pricing/CardDeck.vue';

export default {
    name: 'PricingView',
    components: {
        PricingJumbotron,
        CardDeck
    },
    data() {
        return {
            title: 'Pricing',
            description: 'This is the pricing page of OTL On The Line Communications website.',
            keywords: 'OTL, On The Line Communications, Pricing, Services Pricing, Hourly Pricing, Monthly Retainer Pricing, Emergency Support Pricing, Remote Support Pricing, Onsite Support Pricing, Consulting Pricing, Support Pricing, Video Security Pricing, VoIP Pricing',
            imageUrl: 'https://otlcommunications.com/images/logo.png',
            url: 'https://otlcommunications.com/pricing',
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
            ]
        };
    }
};
</script>

<style scoped>
/* Desktop Screen Size Styling */
@media only screen and (min-width: 1280px) {

    .banner {
        padding: .5vw;
    }

    .banner h1 {
        font-size: 1.25rem;
        font-weight: bold;
    }

    .banner h1,
    .banner hr {
        padding: 0;
        margin: 0 auto;
    }

    .banner hr {
        width: 10%;
        color: #545454;
        border: 2px solid #545454;
    }

    .card-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
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