<template>
    <div class="card-deck">
        <ServiceCard
            v-for="(card, index) in serviceCards"
            :key="index"
            :id="card.id"
            :title="card.title"
            :pricing="card.pricing"
            :text="card.text"
        />
    </div>
</template>

<script>
import ServiceCard from '@/components/pricing/Card.vue';

export default {
    name: 'CardDeck',
    components: {
        ServiceCard
    },
    data() {
        return {
            serviceCards: [
                {
                    id: 'consulting',
                    title: "Consulting Services",
                    pricing: [
                        {
                            title: 'Consulting Services',
                            amounts: [
                                { label: 'Pricing is available by proposal only' }
                            ]
                        }
                    ],
                    text: "Contact us to discuss your specific project and our team will provide a tailored quote.",
                },
                {
                    id: 'support',
                    title: "Support Services",
                    pricing: [
                        {
                            title: 'Hourly Support',
                            amounts: [
                                { label: 'Per hour: ', amount: '$150.00' }
                            ],
                            extra: '(8 AM - 5 PM EST, Monday to Friday)'  
                        },
                        {
                            title: 'Emergency Support',
                            amounts: [
                                { label: 'Per hour: ', amount: '$250.00' }
                            ],
                            extra: '(After business hours or for urgent issues)'
                        },
                        {
                            title: 'Discounted Hourly Blocks (Business Hours)',
                            amounts: [
                                { label: '10 hours: ', amount: '$1,400.00' },
                                { label: '25 hours: ', amount: '$3,000.00' },
                                { label: '50 hours: ', amount: '$5,000.00' }
                            ],
                            extra: '(8 AM - 5 PM EST, Monday to Friday)'
                        },
                        {
                            title: 'Discounted Hourly Blocks (After Hours)',
                            amounts: [
                                { label: '10 hours: ', amount: '$2,000.00' },
                                { label: '25 hours: ', amount: '$4,250.00' },
                                { label: '50 hours: ', amount: '$6,500.00' }
                            ],
                            extra: '(24/7 availability, pre-purchased hours, add-ons)'
                        }
                    ],
                    text: "Contact us to discuss your support needs and find the best solution for your business."
                },
                {
                    id: 'video-security',
                    title: "Video Security Services",
                    pricing: [
                        {
                            title: 'Cameras, Door Access, and NVR Solutions',
                            amounts: [
                                { label: 'Pricing is available by proposal only' }
                            ]
                        }
                    ],
                    text: "Contact us for a customized quote to fit your business security needs."
                },
                {
                    id: 'voip',
                    title: "VoIP Services",
                    pricing: [
                        {
                            title: 'Hosted VoIP Extension*',
                            amounts: [
                                { label: 'Per Extension: ', amount: '*$20.00 per month' }
                            ],
                            extra: '*Discounts for multiple extensions and locations. (includes standard features)'
                        },
                        {
                            title: 'Standard Features',
                            amounts: [
                                { label: 'Admin Portal' },
                                { label: 'Announcements' },
                                { label: 'Blacklist' },
                                { label: 'Boss / Administrative Assistant' },
                                { label: 'Busy Lamp Field (BLF)' },
                                { label: 'Call Back' },
                                { label: 'Call Detail Records' },
                                { label: 'Call Forward', amount: ' (busy, no answer, unconditional)' },
                                { label: 'Call Monitoring' },
                                { label: 'Call Pickup' },
                                { label: 'Call Parking' },
                                { label: 'Call Screening' },
                                { label: 'Call Transfer', amount: ' (blind, attended)' },
                                { label: 'Call Waiting' },
                                { label: 'Caller ID' },
                                { label: 'Caller ID Routing' },
                                { label: 'Do Not Disturb (DND)' },
                                { label: 'Direct Inward Dial (DID)' },
                                { label: 'Find / Follow Me' },
                                { label: 'Hunt / Ring Groups' },
                                { label: 'Menu Systems (IVR)' },
                                { label: 'Music On Hold' },
                                { label: 'Paging', amount: ' (extra equipment may be required)' },
                                { label: 'Phone Books' },
                                { label: 'Pickup Groups' },
                                { label: 'Remote Call Pickup' },
                                { label: 'Speed Dials' },
                                { label: 'Three Way Calling' },
                                { label: 'Time Conditions' },
                                { label: 'Time Groups' },
                                { label: 'User Portal' },
                                { label: 'Voicemail' },
                                { label: 'Voicemail to Email' }
                            ],
                            extra: '(All included with monthly service)'
                        },
                        {
                            title: 'Advanced Features',
                            amounts: [
                                { label: 'Call Center: ', amount: 'Contact for quote' },
                                { label: 'Call Recording: ', amount: '$1.00 per GB*' },
                                { label: 'Conferencing: ', amount: 'Contact for quote' },
                                { label: 'Dictation: ', amount: '$1.00 per extension*' },
                                { label: 'Hotelling: ', amount: 'Contact for quote' },
                                { label: 'Mobile App: ', amount: '$5.00 per extension*' },
                                { label: 'SMS: ', amount: '$5.00 per extension*' },
                                { label: 'Salesforce Connector: ', amount: 'Contact for quote' },
                                { label: 'Switchboard: ', amount: '$1.00 per extension*' },
                                { label: 'Teams Integration: ', amount: '$10.00 per extension*' },
                                { label: 'WhatsApp Connector: ', amount: '$5.00 per extension*' },
                                { label: 'Remote Extension: ', amount: '$5.00 per extension*' }
                            ],
                            extra: '(*Add-ons pricing is monthly, excluding taxes and fees)'
                        }
                    ],
                    text: "Contact us to learn more about our VoIP solutions and the best plan for your business."
                }
            ]
        };
    }
};
</script>