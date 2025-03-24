<!-- src/components/services/cards/VoIPCard.vue -->
<template>
    <div>
      <ServicesCard
        :title="'VoIP'"
        :cardImageSrc="cardImage"
        :description="'Enhance communication with reliable, cost-effective VoIP solutions.'"
        :modalId="'voipModal'"
        :modalLabelId="'voipModalLabel'"
        :modalTitle="'About Our VoIP Services'"
        :modalService="'VoIP'"
        :modalNeeds="'VoIP (Voice over Internet Protocol) services provide a cost-effective, flexible, and reliable communication solution for your business. With VoIP, you can enhance communication, improve collaboration, and streamline your operations. Whether youre looking to reduce phone costs or integrate advanced features like voicemail-to-email and call management systems, VoIP is the modern solution for efficient business communication.'"
        :modalImageSrc="modalImage"
        :modalOffer="'At OTL Communications, we offer a comprehensive range of VoIP services to suit your needs'"
        :modalOfferings="modalOfferings"
        :modalContact="'Contact us today to learn more or get started with a tailored VoIP solution for your business.'"
        :modalContactLink="'/contact#voip'"
        :modalPricingLink="'/pricing#voip'"
      />
    </div>
</template>
  
<script>
import ServicesCard from '@/components/services/Card.vue';
import cardImage from '@/assets/images/services/cards/voip_card.png';
import modalImage from '@/assets/images/services/modals/voip_modal.png';

export default {
    components: {
        ServicesCard,
    },
    data() {
        return {
            cardImage,
            modalImage,
            modalOfferings: [
                'Hosted Phone System: Starting at $20 per month per extension, our hosted phone system includes standard features such as voicemail-to-email, Do Not Disturb (DND), IVR, call detail records, and more. See our pricing page for complete details on available add-ons.',
                'Installation: We provide flexible installation options, including professional installation services or a self-install option if preferred.',
                'Support & Maintenance: Get expert support for your VoIP and communication systems, along with ongoing maintenance to ensure optimal performance and uptime.',
                '*Our system is compatible with all SIP phones, but we recommend using Yealink phones for the best experience.'
            ]
        };
    }
};
</script>