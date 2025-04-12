<template>
    <JumbotronMain :jumbotrons="filteredJumbotrons" />
  </template>
  
  <script>
  import JumbotronMain from '@/components/Jumbotron.vue';
  
  export default {
    name: 'JumbotronDeck',
    components: {
      JumbotronMain
    },
    data() {
      return {
        jumbotrons: [
          {
            image: 'services/services_jumbotron.webp',
            title: 'Maximize Your Business Tech Potential.',
            text1: 'We provide a range of services—including ',
            blueText: 'consulting, support, installation, maintenance, and VoIP solutions',
            text2: '—designed to optimize your business with tailored, innovative technology.',
            buttonText: 'CONTACT US',
            buttonLink: '/contact',
            buttonLabel: 'Contact us today to learn more',
            routeName: 'ServicesView'
          },
          {
            image: 'support/support_jumbotron.webp',
            title: 'Expert Support When You Need It Most.',
            text1: 'We offer expert support for Cisco, Ubiquiti, and Fortinet systems. Whether you need assistance during ',
            blueText: ' business hours, after-hours emergency support, or ongoing IT management, ',
            text2: 'we have flexible options.',
            buttonText: 'GET SUPPORT',
            buttonLink: '/contact',
            buttonLabel: 'Contact us today for support',
            routeName: 'SupportView'
          },
          {
            image: 'pricing/pricing_jumbotron.webp',
            title: 'Power Your Success with Flexible Pricing.',
            text1: 'Transparent, flexible pricing for all our tech services—whether its ',
            blueText: 'one-time support, ongoing maintenance, or custom solutions',
            text2: ', we offer clear, affordable options tailored to your needs.',
            buttonText: 'GET A QUOTE',
            buttonLink: '/contact',
            buttonLabel: 'Contact us today for a quote',
            routeName: 'PricingView'
          }
        ]
      };
    },
    computed: {
      filteredJumbotrons() {
        const currentRouteName = this.$route.name;
        return this.jumbotrons.filter(jumbotron => jumbotron.routeName === currentRouteName);
      }
    }
  };
  </script>