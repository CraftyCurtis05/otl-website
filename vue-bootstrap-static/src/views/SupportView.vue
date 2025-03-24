<template>
    <main>
        <section class="jumbotron">
            <SupportJumbotron />
        </section>
        <section class="banner">
            <span>SUPPORT OPTIONS</span>
            <hr class="text-secondary p-0 m-0 mx-auto">
        </section>
        <section class="list-container">
            <SupportList />
        </section>
    </main>
</template>

<script>
import SupportJumbotron from '@/components/support/SupportJumbotron.vue';
import SupportList from '@/components/support/SupportList.vue';

export default {
    name: 'SupportView',
    components: {
        SupportJumbotron,
        SupportList
    },
    data() {
        return {
            title: 'Support',
            description: 'This is the support page of OTL On The Line Communications website.',
            keywords: 'OTL, On The Line Communications, Support, Support Offered, Hourly Support, Monthly Retainer, Emergency Support, Remote Support, Onsite Support',
            imageUrl: 'https://otlcommunications.com/images/logo.png',
            url: 'https://otlcommunications.com/support',
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