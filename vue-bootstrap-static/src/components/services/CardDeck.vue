<!-- src/components/services/CardDeck.vue -->
<template>
  <div class="card-deck">
    <ServicesCard
      v-for="(card, index) in serviceCards"
      :key="index"
      :id="card.id"
      :title="card.title"
      :description="card.description"
      :image="card.image"
      :modalId="card.modalId"
      :modalLabelId="card.modalLabelId"
      :modalNeeds="card.modalNeeds"
      :modalOffer="card.modalOffer"
      :modalOfferings="card.modalOfferings"
      :modalContact="card.modalContact"
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
          id: 'consulting',
          title: "Consulting Services",
          description: "Let us tailor a solution that drives efficiency, productivity, and growth for your business.",
          image: 'consulting.png',
          modalId: "consultingModal",
          modalLabelId: "consultingModalLabel",
          modalNeeds: "Consulting helps ensure that your technology infrastructure is aligned with your business goals, optimized for performance, and scalable for future growth. By leveraging expert insights, you can make informed decisions on the best technology solutions, improve network efficiency, and proactively address potential issues before they impact your operations.",
          modalOffer: "At OTL Communications, our consulting services include",
          modalOfferings: [
            { label: 'Network Design', text: 'We create customized network designs to ensure your system operates seamlessly, allowing for future expansion and smooth functionality.' },
            { label: 'Network Analysis', text: 'Our team conducts thorough performance analyses to identify areas for improvement, optimizing your network’s efficiency and monitoring it for real-time performance with email notifications.' },
            { label: 'IT Management', text: 'Outsource your IT management to us and get comprehensive support, including desktop management, reporting, and strategic IT direction tailored to your needs.' }
          ],
          isModalVisible: false
        },
        {
          id: 'support',
          title: "Support Services",
          description: "Count on our support to minimize downtime and keep your business running smoothly.",
          image: 'support.png',
          modalId: "supportModal",
          modalLabelId: "supportModalLabel",
          modalNeeds: "Support services are essential to ensure your IT systems—whether network, VoIP, or other communication platforms—run smoothly and efficiently. With expert assistance readily available, you can address issues quickly, minimize downtime, and keep your operations running at full capacity. Our support ensures your systems are functioning optimally, and you have access to help when you need it most.",
          modalOffer: "At OTL Communications, we offer a range of flexible support options tailored to meet your needs",
          modalOfferings: [
            { label: 'Hourly Support', text: 'Get expert assistance on a per-hour basis, available Monday through Friday, from 8 AM to 5 PM EST. We also offer discounted hourly blocks for more extensive support requirements.' },
            { label: 'Monthly Retainer', text: 'For comprehensive IT support, our monthly retainer covers everything from network management to VoIP, ensuring your IT infrastructure is consistently monitored and maintained.' },
            { label: 'Emergency Support', text: 'Available outside normal business hours for urgent issues, ensuring minimal disruption to your operations. We also provide support during maintenance windows for projects requiring work after hours.' },
            { label: 'Flexible Access', text: 'All support is provided remotely via platforms like Microsoft Teams or Zoom, with the option for onsite assistance (travel expenses apply).'}
          ],
          modalContact: "Contact us to learn more about how our support services can help maintain your IT environment’s efficiency and security.",
          isModalVisible: false
        },
        {
          id: 'video-security',
          title: "Video Security Services",
          description: "Secure your business with advanced video surveillance for peace of mind.",
          image:'video_security.png',
          modalId: "videoSecurityModal",
          modalLabelId: "videoSecurityModalLabel",
          modalNeeds: "Video security is essential for protecting your business from potential threats, ensuring the safety of employees, assets, and property. With advanced surveillance systems, you can monitor critical areas in real-time, deter criminal activity, and have access to valuable video footage for security and compliance purposes.",
          modalOffer: "At OTL Communications, we provide tailored video security solutions using the complete line of Ubiquiti products, including",
          modalOfferings: [
            { label: 'Cameras', text: 'High-quality surveillance cameras designed for reliable performance and clear footage.' },
            { label: 'Door Access', text: 'Secure, streamlined access control solutions to monitor and manage entry points.' },
            { label: 'NVR (Network Video Recorder)', text: 'Robust systems to store, manage, and review your video footage with ease.' }
          ],
          modalContact: "Contact us for a personalized quote and to learn more about how we can help safeguard your business.",
          isModalVisible: false
        },
        {
          id: 'voip',
          title: "VoIP Services",
          description: "Enhance communication with reliable, cost-effective VoIP solutions.",
          image: 'voip.png',
          modalId: "voipModal",
          modalLabelId: "voipModalLabel",
          modalNeeds: "VoIP (Voice over Internet Protocol) services provide a cost-effective, flexible, and reliable communication solution for your business. With VoIP, you can enhance communication, improve collaboration, and streamline your operations. Whether you're looking to reduce phone costs or integrate advanced features like voicemail-to-email and call management systems, VoIP is the modern solution for efficient business communication.",
          modalOffer: "At OTL Communications, we offer a comprehensive range of VoIP services to suit your needs:",
          modalOfferings: [
            { label: 'Hosted Phone System', text: 'Starting at $20 per month per extension, our hosted phone system includes standard features such as voicemail-to-email, Do Not Disturb (DND), IVR, call detail records, and more. See our pricing page for complete details on available add-ons.' },
            { label: 'Installation', text: 'We provide flexible installation options, including professional installation services or a self-install option if preferred.' },
            { label: 'Support & Maintenance', text: 'Get expert support for your VoIP and communication systems, along with ongoing maintenance to ensure optimal performance and uptime.' },
            { text: '*Our system is compatible with all SIP phones, but we recommend using Yealink phones for the best experience.'}
          ],
          modalContact: "Contact us today to learn more or get started with a tailored VoIP solution for your business.",
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
/* Desktop: 4 cards per row */
@media (min-width: 1280px) {}

/* Laptop: 2 cards per row */
@media (max-width: 1279px) and (min-width: 769px) {}

/* Tablet: 1 card per row */
@media (max-width: 768px) {}

/* Mobile: 1 card per row */
@media (max-width: 480px) {}
</style>