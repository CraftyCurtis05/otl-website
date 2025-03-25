<!-- src/components/JumbotronDeck.vue -->
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
            image: require('@/assets/images/pricing/pricing_jumbotron.png'),
            title: 'Power Your Success with Flexible Pricing.',
            text: 'Flexible, transparent pricing to give you the best value on all our tech services.',
            buttonText: 'GET A QUOTE',
            buttonLink: '/contact',
            routeName: 'PricingView'
          },
          {
            image: require('@/assets/images/services/services_jumbotron.png'),
            title: 'Maximize Your Business Tech Potential.',
            text: 'We provide a range of services—including <span class="text-blue">consulting, support, installation, maintenance, and VoIP solutions</span>—designed to optimize your business with tailored, innovative technology.',
            buttonText: 'CONTACT US',
            buttonLink: '/contact',
            routeName: 'ServicesView'
          },
          {
            image: require('@/assets/images/support/support_jumbotron.png'),

            title: 'Expert Support When You Need It Most.',
            text: 'We offer expert support for Cisco, Ubiquiti, and Fortinet systems. Whether you need assistance during <span class="text-blue">business hours, after-hours emergency support, or ongoing IT management,</span> we have flexible options to meet your needs.',
            buttonText: 'GET SUPPORT',
            buttonLink: '/contact',
            routeName: 'SupportView'
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