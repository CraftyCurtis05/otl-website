<template>
    <section class="jumbotron">
        <JumbotronDeck />
    </section>
    <section class="banner">
        <h1>OUR SERVICES</h1>
        <hr>
    </section>
    <section class="card-container">
        <CardDeck/>
    </section>
</template>

<script>
import JumbotronDeck from '@/components/JumbotronDeck.vue';
import CardDeck from '@/components/services/CardDeck.vue';

export default {
    name: 'ServicesView',
    components: {
        JumbotronDeck,
        CardDeck
    },
    data() {
        return {
            title: 'Services',
            description: 'This is the services page of OTL On The Line Communications website.',
            keywords: 'OTL, On The Line Communications, Services, About Our Services, Consulting, Support, Video Security, VoIP',
            imageUrl: 'https://otlcommunications.com/images/logo.png',
            url: 'https://otlcommunications.com/services',
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