<template>
    <main class="jumbotron col-md-5">
        <section class="col-md-10 p-5 m-auto">
            <h1 class="display-4 text-white">Get Started Today!</h1>
            <p class="lead text-start text-white">We’re here to help your business thrive with the right technology solutions.
                                       If you’re ready to learn more about our services, or if you’d like to discuss your project and get a personalized quote, contact us today! 
                                       Our team is ready to support you every step of the way.</p>
            <p class="text-start text-info">Fill out the form or reach us via email or phone. Please allow 24 hours during business hours for a reply.</p>
        
            <ul class="list-unstyled text-start">
                <li>
                  <img src="@/assets/images/footer/phone_icon_white.png" width="20" alt="Phone icon" />
                  <a href="tel:18448898885" class="text-white" aria-label="Call support at +1 (844) 889-8885">+1 (844) 889-8885</a>
                </li>
                <li>
                  <img src="@/assets/images/footer/email_icon_white.png" width="25" alt="Email icon" />
                  <a href="mailto:support@otlcommunications.com" class="text-white" aria-label="Email support at support@otlcommunications.com">support@otlcommunications.com</a>
                </li>
            </ul>

            <h5 class="text-start text-white">Business Hours</h5>
            <p class="text-start text-white">Monday - Friday .......... 8:00am - 5:00pm EST</p>

            <p class="text-start text-white">Need help outside our business hours?<br><b><em>We offer emergency support 24/7!</em></b></p>
        </section>
    </main>
</template>

<script>
export default {
    name: 'ContactJumbotron'
};
</script>

<style scoped>
.jumbotron {
    height: 100vh;
    background-image: url('@/assets/images/contact_page/contact_jumbotron.png');
    background-size: cover; /* Optional: Adjusts the image to cover the entire element */
    background-position: center center; /* Optional: Centers the image */
}
</style>