<template>
    <article class="jumbotron">
        <div class="container">
            <header>
                <h1>Get Started Today!</h1>
                <hr>
                <p class="text"><b>We’re here to help your business thrive with the right technology solutions.</b></p>
                <p class="text none">If you’re ready to learn more about our services, or if you’d like to discuss your project and get a personalized quote, contact us today! Our team is ready to support you every step of the way.</p>
                <p class="text">Fill out the form or reach us via email or phone. Please allow 24 hours during business hours for a reply.</p>
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
                            class="text-white text" 
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
                            class="text-white text" 
                            aria-label="Email us at support@otlcommunications.com" 
                            title="Email us at support@otlcommunications.com"
                            >support@otlcommunications.com
                        </a>
                    </li>
                </ul>
            </section>
            <section class="hours">
                <h2>Business Hours</h2>
                <p class="text">Monday - Friday .......... 8:00am - 5:00pm EST</p>
            </section>
            <p class="text last">Need help outside our business hours?<br><b><em>We offer emergency support 24/7!</em></b></p>
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
    background-size: cover;
    background-position: center center;
    padding: 4vw 2vw;
    margin: auto;
}

.container {
    width: 40vw;
}

.form {
    display: none;
}

header h1 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-block: 2%;
}

hr {
    width: 50%;
}

.contact img {
    margin: 2%;
    width: 5%;
}

.hours h2 {
    font-size: 1.5rem;
    font-weight: bold;
}

@media only screen and (min-width: 2001px) {

    header h1 {
        font-size: 2.5rem;
    }

    .text {
        font-size: 1.4rem;
    }
}

@media only screen and (min-width: 1440px) and (max-width: 2000px) {

    header h1 {
        font-size: 1.8rem;
    }

    .text {
        font-size: 1.1rem;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1439px){

    header h1 {
        font-size: 1.6rem;
    }

    .text {
        font-size: 1rem;
    }
}

@media only screen and (min-width: 767px) and (max-width: 1023px) {

    header h1 {
        font-size: 1.5rem;
    }

    .text {
        font-size: .9rem;
    }
}

@media only screen and (max-width: 768px) {

    .jumbotron {
        background-image: none;
        padding: 1vh;
        padding-top: 3vh;
    }

    .container,
    header,
    .text {
        text-align: center;
        width: 100%;
        padding: 0;
    }

    header h1 {
        font-size: 1.4rem;
        margin: 0;
    }

    hr {
        margin: 1vh auto;
        width: 30%;
    }

    .text {
        font-size: .95rem;
    }

    .text {
        font-size: .9rem;
    }

    .contact,
    li,
    .hours,
    .last {
        display: none;
    }
}

@media only screen and (max-width: 480px) {

    header h1 {
        font-size: 1.25rem;
    }

    .text {
        font-size: .9rem;
    }
}

@media only screen and (max-width: 425px) {

    .none {
        display: none;
    }
}
</style>