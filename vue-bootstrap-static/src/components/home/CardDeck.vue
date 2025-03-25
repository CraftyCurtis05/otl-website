<template>
  <article class="card-deck">
    <ServiceCard
      v-for="(service, index) in services"
      :key="index"
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
          title: 'Consulting',
          image: 'consulting_icon.png',
          description: 'Personalized consulting services to help you choose the best technology solutions for your business.',
          listItems: [
            { label: 'Network Analysis', description: 'Optimize performance' },
            { label: 'Network Design', description: 'Custom network solutions' },
            { label: 'Consulting Expertise', description: 'Tailored recommendations' },
          ],
          link: '/services#consulting',
        },
        {
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
          title: 'Video Security',
          image: 'video_security_icon.png',
          description: 'Solutions for your video security needs, including cameras, door access systems and NVR integration.',
          listItems: [
            { label: 'Cameras', description: 'Advanced video surveillance solutions' },
            { label: 'Door Access', description: 'Secure entry systems' },
            { label: 'NVR Integration', description: 'Video storage and management' },
          ],
          link: '/services#video-security',
        },
        {
          title: 'VoIP Solutions',
          image: 'voip_icon.png',
          description: 'VoIP services including hosting, installation, and support to keep your business connected.',
          listItems: [
            { label: 'VoIP Service', description: 'Reliable communication solutions' },
            { label: 'Installation', description: 'Professional setup and configuration' },
            { label: 'Support', description: 'Ongoing assistance for connectivity' },
          ],
          link: '/services#voip',
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-deck {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Space between cards */
  justify-content: space-between;
}

.card {
  flex: 1 1 calc(25% - 1rem); /* 4 cards across on large screens */
  margin-bottom: 1rem;
}

@media (max-width: 1200px) {
  .card {
    flex: 1 1 calc(33.33% - 1rem); /* 3 cards across on medium screens */
  }
}

@media (max-width: 768px) {
  .card {
    flex: 1 1 calc(50% - 1rem); /* 2 cards across on smaller screens */
  }
}

@media (max-width: 480px) {
  .card {
    flex: 1 1 100%; /* 1 card across on extra small screens */
  }
}
</style>