<!-- src/components/contact/ContactJumbotron.vue -->
<template>
    <article class="jumbotron col-5">
        <div class="container col-10">
            <header>
                <h1>Get Started Today!</h1>
                <p><b>We’re here to help your business thrive with the right technology solutions.</b></p>
                <p>If you’re ready to learn more about our services, or if you’d like to discuss your project and get a personalized quote, contact us today! Our team is ready to support you every step of the way.</p>
                <p>Fill out the form or reach us via email or phone. Please allow 24 hours during business hours for a reply.</p>
            </header>
            <section class="contact">
                <ul>
                    <li>
                        <img 
                            :src="image1" 
                            width="20" 
                            alt="Phone icon" 
                            loading="lazy"
                        />
                        <a 
                            href="tel:18448898885" 
                            class="text-white" 
                            aria-label="Call us at +1 (844) 889-8885" 
                            title="Call us at +1 (844) 889-8885"
                            >+1 (844) 889-8885
                        </a>
                    </li>
                    <li>
                        <img 
                            :src="image2" 
                            width="25" 
                            alt="Email icon" 
                            loading="lazy"
                        />
                        <a 
                            href="mailto:support@otlcommunications.com" 
                            class="text-white" 
                            aria-label="Email us at support@otlcommunications.com" 
                            title="Email us at support@otlcommunications.com"
                            >support@otlcommunications.com
                        </a>
                    </li>
                </ul>
            </section>
            <section class="hours">
                <h2>Business Hours</h2>
                <p>Monday - Friday .......... 8:00am - 5:00pm EST</p>
            </section>
            <p class="last">Need help outside our business hours?<br><b><em>We offer emergency support 24/7!</em></b></p>
        </div>
    </article>
</template>

<script>
import image1 from '@/assets/images/icons/phone_icon_white.png';
import image2 from '@/assets/images/icons/email_icon_white.png';

export default {
    name: 'ContactJumbotron',
    data() {
        return {
            image1: image1,
            image2: image2
        }
    }
};
</script>

<style scoped>
.jumbotron {
    height: 100vh;
    color: white;
    font-size: 1.1rem;
    text-align: start;
    background-image: url('@/assets/images/contact/contact_jumbotron.png');
    background-size: cover; /* Optional: Adjusts the image to cover the entire element */
    background-position: center center; /* Optional: Centers the image */
    padding: 4vw 2vw;
    margin: auto;
}

header h1 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-block: 5%;
}

.contact img {
    margin: 2%;
}

.hours h2 {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>