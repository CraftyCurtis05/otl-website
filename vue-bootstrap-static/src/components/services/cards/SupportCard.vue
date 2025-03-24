<!-- src/components/services/cards/SupportCard.vue -->
<template>
    <div>
      <ServicesCard
        :title="'Support'"
        :cardImageSrc="cardImage"
        :description="'Count on our support to minimize downtime and keep your business running smoothly.'"
        :modalId="'supportModal'"
        :modalLabelId="'supportModalLabel'"
        :modalTitle="'About Our Support Services'"
        :modalService="'support'"
        :modalNeeds="'Support services are essential to ensure your IT systems—whether network, VoIP, or other communication platforms—run smoothly and efficiently. With expert assistance readily available, you can address issues quickly, minimize downtime, and keep your operations running at full capacity. Our support ensures your systems are functioning optimally, and you have access to help when you need it most.'"
        :modalImageSrc="modalImage"
        :modalOffer="'At OTL Communications, we offer a range of flexible support options tailored to meet your needs'"
        :modalOfferings="modalOfferings"
        :modalContact="'Contact us to learn more about how our support services can help maintain your IT environment’s efficiency and security.'"
        :modalContactLink="'/contact#support'"
        :modalPricingLink="'/pricing#support'"
      />
    </div>
</template>
  
<script>
import ServicesCard from '@/components/services/Card.vue';
import cardImage from '@/assets/images/services/cards/support_card.png';
import modalImage from '@/assets/images/services/modals/support_modal.png';

export default {
    components: {
        ServicesCard,
    },
    data() {
        return {
            cardImage,
            modalImage,
            modalOfferings: [
                'Hourly Support: Get expert assistance on a per-hour basis, available Monday through Friday, from 8 AM to 5 PM EST. We also offer discounted hourly blocks for more extensive support requirements.',
                'Monthly Retainer: For comprehensive IT support, our monthly retainer covers everything from network management to VoIP, ensuring your IT infrastructure is consistently monitored and maintained.',
                'Emergency Support: Available outside normal business hours for urgent issues, ensuring minimal disruption to your operations. We also provide support during maintenance windows for projects requiring work after hours.',
                'Flexible Access: All support is provided remotely via platforms like Microsoft Teams or Zoom, with the option for onsite assistance (travel expenses apply).'
            ]
        };
    }
};
</script>