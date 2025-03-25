<!-- src/components/services/CardDeck.vue -->
<template>
  <div class="card-deck">
    <ServicesCard
      v-for="(card, index) in serviceCards"
      :key="index"
      :title="card.title"
      :description="card.description"
      :cardImageSrc="card.cardImageSrc"
      :linkText="card.linkText"
      :modalId="card.modalId"
      :modalLabelId="card.modalLabelId"
      :modalTitle="card.modalTitle"
      :modalService="card.modalService"
      :modalNeeds="card.modalNeeds"
      :modalImageSrc="card.modalImageSrc"
      :modalOffer="card.modalOffer"
      :modalOfferings="card.modalOfferings"
      :modalContact="card.modalContact"
      :modalContactLink="card.modalContactLink"
      :modalPricingLink="card.modalPricingLink"
      :isModalVisible="card.isModalVisible"
      @update:isModalVisible="updateModalVisibility(index, $event)"
    />
  </div>
</template>
  
<script>
import ServicesCard from '@/components/services/Card.vue';

export default {
  name: 'CardDeck',
  components: {
    ServicesCard
  },
  data() {
    return {
      serviceCards: [
        {
          title: "Consulting Services",
          description: "Let us tailor a solution that drives efficiency, productivity, and growth for your business.",
          cardImageSrc: require('@/assets/images/services/cards/consulting_card.png'),
          linkText: "Click to learn more",
          modalId: "consultingModal",
          modalLabelId: "consultingModalLabel",
          modalTitle: "Consulting Services",
          modalService: "Consulting",
          modalNeeds: "Consulting helps ensure that your technology infrastructure is aligned with your business goals, optimized for performance, and scalable for future growth.",
          modalImageSrc: require('@/assets/images/services/modals/consulting_modal.png'),
          modalOffer: "Our consulting services include",
          modalOfferings: [
            { label: 'Network Design:', text: ' Customized network designs to ensure your system operates seamlessly.' },
            { label: 'Network Analysis:', text: ' Thorough performance analyses to identify areas for improvement.' },
            { label: 'IT Management:', text: ' Comprehensive support including desktop management and reporting.' }
          ],
          modalContact: "Contact us today to discuss your needs.",
          modalContactLink: "/contact#consulting",
          modalPricingLink: "/pricing#consulting",
          isModalVisible: false
        },
        {
          title: "Support Services",
          description: "Count on our support to minimize downtime and keep your business running smoothly.",
          cardImageSrc: require('@/assets/images/services/cards/support_card.png'),
          linkText: "Click to learn more",
          modalId: "supportModal",
          modalLabelId: "supportModalLabel",
          modalTitle: "Support Services",
          modalService: "Support",
          modalNeeds: "Support services are essential to ensure your IT systems run smoothly and efficiently.",
          modalImageSrc: require('@/assets/images/services/modals/support_modal.png'),
          modalOffer: "Our support offerings include",
          modalOfferings: [
            { label: 'Hourly Support:', text: ' Get expert assistance on a per-hour basis.' },
            { label: 'Monthly Retainer:', text: ' For comprehensive IT support.' },
            { label: 'Emergency Support:', text: ' Available outside normal business hours.' }
          ],
          modalContact: "Contact us today to learn more about our support services.",
          modalContactLink: "/contact#support",
          modalPricingLink: "/pricing#support",
          isModalVisible: false
        },
        {
          title: "Video Security Services",
          description: "Secure your business with advanced video surveillance for peace of mind.",
          cardImageSrc: require('@/assets/images/services/cards/video_security_card.png'),
          linkText: "Click to learn more",
          modalId: "videoSecurityModal",
          modalLabelId: "videoSecurityModalLabel",
          modalTitle: "Video Security Services",
          modalService: "Video Security",
          modalNeeds: "Video security is essential for protecting your business from potential threats.",
          modalImageSrc: require('@/assets/images/services/modals/video_security_modal.png'),
          modalOffer: "We provide tailored video security solutions, including",
          modalOfferings: [
            { label: 'Cameras:', text: ' High-quality surveillance cameras.' },
            { label: 'Door Access:', text: ' Secure access control solutions.' },
            { label: 'NVR (Network Video Recorder):', text: ' Robust systems to manage video footage.' }
          ],
          modalContact: "Contact us for a customized quote.",
          modalContactLink: "/contact#video-security",
          modalPricingLink: "/pricing#video-security",
          isModalVisible: false
        },
        {
          title: "VoIP Services",
          description: "Enhance communication with reliable, cost-effective VoIP solutions.",
          cardImageSrc: require('@/assets/images/services/cards/voip_card.png'),
          linkText: "Click to learn more",
          modalId: "voipModal",
          modalLabelId: "voipModalLabel",
          modalTitle: "VoIP Services",
          modalService: "VoIP",
          modalNeeds: "VoIP (Voice over Internet Protocol) services provide a cost-effective communication solution.",
          modalImageSrc: require('@/assets/images/services/modals/voip_modal.png'),
          modalOffer: "Our VoIP services include",
          modalOfferings: [
            { label: 'Hosted Phone System:', text: ' Starting at $20 per month.' },
            { label: 'Installation:', text: ' Flexible installation options.' },
            { label: 'Support & Maintenance:', text: ' Expert support for your VoIP system.' }
          ],
          modalContact: "Contact us today to get started with a tailored VoIP solution.",
          modalContactLink: "/contact#voip",
          modalPricingLink: "/pricing#voip",
          isModalVisible: false
        }
      ]
    };
  },
  methods: {
    updateModalVisibility(index, isVisible) {
      this.serviceCards[index].isModalVisible = isVisible;
    }
  }
};
</script>
  
<style scoped>
.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
}
</style>