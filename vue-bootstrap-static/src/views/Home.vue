<template>
    <HomeJumbotron />
</template>

<script>
import HomeJumbotron from '@/components/home_page/HomeJumbotron.vue';

export default {
    name: 'HomeView',
    components: {
        HomeJumbotron,
    },
    data() {
        return {
            title: 'Home',
            description: 'This is the home page of OTL On The Line Communications website.',
            keywords: 'OTL, On The Line Communications, Home, About Us',
            imageUrl: 'https://otlcommunications.com/images/otl-logo.png',
            url: 'https://otlcommunications.com',
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