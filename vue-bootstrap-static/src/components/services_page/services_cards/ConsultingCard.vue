<template>
    <!-- Card -->
    <article class="card" type="button" data-bs-toggle="modal" data-bs-target="#modal">
        <section class="header">
            <h1 class="title">Consulting</h1>
            <p class="link">Click to learn more</p>
        </section>
        <section class="img-container">
            <img :src="imageSrc1" class="card-img-top" alt="Consulting Image"/>
        </section>
        <section class="text">
            <p>Let us tailor a solution that drives efficiency, productivity and growth for your business.</p>
        </section>
    </article>
  
    <!-- Modal -->
    <article class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <section class="modal-header">
                    <h1 class="modal-title" id="modalLabel">About Our Consulting Services</h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </section>
                <section class="modal-body col-12">
                    <div class="top">
                        <aside class="col-8">
                            <h2>Why do I need consulting services?</h2>
                            <hr>
                            <p>Consulting helps ensure that your technology infrastructure is aligned with your business goals, 
                                optimized for performance, and scalable for future growth. By leveraging expert insights, 
                                you can make informed decisions on the best technology solutions, improve network efficiency, 
                                and proactively address potential issues before they impact your operations.
                            </p>
                        </aside>
                        <aside class="col-4">
                            <img :src="imageSrc2"/>
                        </aside>
                    </div>
                    <div class="bottom">
                        <aside>
                            <h2>What do we offer?</h2>
                            <hr>
                            <p>At OTL Communications, our consulting services include:</p>
                            <ul>
                                <li><b>Network Design:</b> We create customized network designs to ensure your system operates seamlessly, allowing for future expansion and smooth functionality.</li>
                                <li><b>Network Analysis:</b> Our team conducts thorough performance analyses to identify areas for improvement, optimizing your network’s efficiency and monitoring it for real-time performance with email notifications.</li>
                                <li><b>IT Management:</b> Outsource your IT management to us and get comprehensive support, including desktop management, reporting, and strategic IT direction tailored to your needs.</li>
                            </ul>
                        </aside>
                        <span class="about">Our consulting services are offered on a proposal basis. Contact us today for a personalized quote and let us help you choose and implement the right technology solutions for your business.</span>
                        <div class="btn-container">
                            <router-link class="btn btn-sm" to="/contact#consulting" role="button">
                                <span class="btn-text">CONTACT US</span>
                            </router-link>
                            <router-link class="btn btn-sm" to="/pricing#consulting" role="button">
                                <span class="btn-text">VIEW PRICING</span>
                            </router-link>
                        </div>    
                    </div>   
                </section>
                <section class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </section>
            </div>
        </div>
    </article>
</template>

<script>
import image1 from '@/assets/images/services_page/cards/consulting_card.png';
import image2 from '@/assets/images/services_page/modals/consulting_modal.png';

export default {
    name: 'ConsultingCard',
    data() {
        return {
            imageSrc1: image1,
            imageSrc2: image2
        };
    }
};
</script>

<style scoped>
.card {
    width: 390px;
    border: 0;
    padding: .5rem;
    line-height: 1.2;
    transition: all 0.4s ease;
}

.link {
    text-decoration: none;
}

.header h1 {
    font-size: 1.35rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
}

.link {
    font-size: .95rem;
    font-style: italic;
    color: #002373;
}

.img-container {
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 5px solid #545454;
    border-radius: 50%;
    margin: auto;
    margin-bottom: .5rem;
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text {
    width: 60%;
    margin: auto;
}

.card:hover {
    background-color: #8b8b8b;
    transform: scale(1.1);
    z-index: 10;
}

.card:hover .link {
    text-decoration: underline;
}

.card:hover .img-container {
    border-color: #00FFFF;
    box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.9);
    transform: translateY(-1px);
}

/* Modal Styling */
.modal-header,
.modal-footer {
    background-image: url('@/assets/images/services_page/modals/modal_header.png');
    background-size: cover;
    background-position: center center;
}

.modal-title {
    text-align: center;
    font-size: 1.5rem;
    color: white;
}

/* Change the close button icon color to white */
.btn-close {
    background-color: transparent; /* Ensure background is transparent */
    border: none; /* Remove any border */
}

.modal-body {
    text-align: start;
}

.top {
    display: flex;
    flex-direction: row;
}

.top img {
    width: 25vw;
}

.about {
    text-align: center;
}

.btn-container {
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: auto;
}

.btn-container .btn {
    width: 40%;
    font-size: .9rem;
    color: black;
    background: linear-gradient(to right, #80E0FC, #187EC1);
    margin: 0 auto;
}

.btn-container .btn,
.btn-text {
    transition: all 0.3s ease;
}

.btn-container .btn:hover {
    color: black;
    background-image: radial-gradient(circle, #80E0FC, #187EC1, #074c7b);
    background-size: 300% 300%;
    transform: scale(1.1);
    transform: translateY(-1px);
    box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.4); /* Glowing effect */
    border-color: #00FFFF; /* Optional: Change the border color to match the glow */
    animation: gradient-animation 4s ease infinite;
}

/* Animation for button */
@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.btn-container .btn:hover .btn-text {
    color: white;
    font-weight: 500;
}
</style>