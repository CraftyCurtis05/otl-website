<template>
  <main>
    <ContactJumbotron />
    <ContactForm />
  </main>
</template>

<script>
import ContactJumbotron from '@/components/contact/ContactJumbotron.vue';
import ContactForm from '@/components/contact/ContactForm.vue';

export default {
    name: 'ContactView',
    components: {
        ContactJumbotron,
        ContactForm,
    },
    data() {
        return {
          title: 'Contact Us',
          description: 'This is the contact us page of OTL On The Line Communications website.',
          keywords: 'OTL, On The Line Communications, Contact Us, Contact, Contact Information, Contact Form, Request A Quote',
          imageUrl: 'https://otlcommunications.com/images/logo.png',
          url: 'https://otlcommunications.com/contact',
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
main {
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 768px) {

  main {
    height: 105vh;
    flex-direction: column;
    background-image: url('@/assets/images/contact/contact_jumbotron.png');
    background-size: cover;
    background-position: center center;
  }
}
</style>