<!-- src/components/home/CardDeck.vue -->
<template>
  <article class="card-deck">
    <ServiceCard
      v-for="(service, index) in services"
      :key="index"
      :id="service.id"
      :title="service.title"
      :image="service.image"
      :description="service.description"
      :listItems="service.listItems"
      :link="service.link"
    />
  </article>
</template>

<script>
import ServiceCard from '@/components/home/Card.vue';

export default {
  name: 'CardDeck',
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          id: 'consulting',
          title: 'Consulting',
          image: 'consulting_icon.png',
          description: 'Personalized consulting services to help you choose the best technology solutions for your business.',
          listItems: [
            { label: 'Network Analysis', description: 'Optimize performance' },
            { label: 'Network Design', description: 'Custom network solutions' },
            { label: 'Consulting Expertise', description: 'Specialized Guidance' },
          ],
          link: '/services#consulting',
        },
        {
          id: 'support',
          title: 'Support',
          image: 'support_icon.png',
          description: 'Receive expert assistance for all your VoIP and network communication system needs.',
          listItems: [
            { label: 'Hourly Support', description: 'Non-emergency assistance' },
            { label: 'Emergency Support', description: 'Critical issue resolution' },
            { label: 'Locations', description: 'Available across multiple locations' },
          ],
          link: '/services#support',
        },
        {
          id: 'video-security',
          title: 'Video Security',
          image: 'video_security_icon.png',
          description: 'Solutions for your video security needs, including cameras, door access systems and NVR integration.',
          listItems: [
            { label: 'Cameras', description: 'Advanced surveillance solutions' },
            { label: 'Door Access', description: 'Secure entry systems' },
            { label: 'NVR Integration', description: 'Video storage & management' },
          ],
          link: '/services#video-security',
        },
        {
          id: 'voip',
          title: 'VoIP Solutions',
          image: 'voip_icon.png',
          description: 'VoIP services including hosting, installation, and support to keep your business connected.',
          listItems: [
            { label: 'VoIP Service', description: 'Reliable communication solutions' },
            { label: 'Installation', description: 'Professional setup & configuration' },
            { label: 'Support', description: 'Ongoing assistance for connectivity' },
          ],
          link: '/services#voip',
        }
      ]
    };
  }
};
</script>