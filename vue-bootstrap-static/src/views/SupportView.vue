<template>
    <main>
        <section class="jumbotron">
            <JumbotronDeck />
        </section>
        <section class="banner">
            <h1>SUPPORT OPTIONS</h1>
            <hr>
        </section>
        <section class="card-container">
            <SupportCard />
        </section>
    </main>
</template>

<script>
import JumbotronDeck from '@/components/JumbotronDeck.vue';
import SupportCard from '@/components/support/SupportCard.vue';

export default {
    name: 'SupportView',
    components: {
        JumbotronDeck,
        SupportCard
    },
    data() {
        return {
            title: 'Support',
            description: 'This is the support page of OTL On The Line Communications website.',
            keywords: 'OTL, On The Line Communications, Support, Support Offered, Hourly Support, Monthly Retainer, Emergency Support, Remote Support, Onsite Support',
            imageUrl: 'https://otlcommunications.com/assets/logo.webp',
            url: 'https://otlcommunications.com/support',
            siteName: 'OTL On The Line Communications',
            locale: 'en_US'
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
                { hid: 'og:locale', property: 'og:locale', content: locale }
            ]
        };
    }
};
</script>