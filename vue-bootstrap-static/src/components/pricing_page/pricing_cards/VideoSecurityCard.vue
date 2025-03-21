<!-- ..\components\pricing_page\pricing_cards\VideoSecurityCard.vue -->
<template>
    <article class="card">
        <h1 class="title">Video Security Services</h1>
        <section class="dropdown-container">
            <details class="dropdown">
                <summary>Cameras, Door Access, and NVR Solutions</summary>
                <ul>
                    <li>Pricing available by proposal only.</li>
                </ul>
            </details>
        </section>
        <section class="contact">
            <p class="text">Contact us for a customized quote to fit your security needs.</p>
            <router-link class="btn btn-md" to="/contact" role="button">
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>
            <router-link to="/services#video-security" class="link">
                <p>Learn More About Our Video Security Services</p>
            </router-link>
        </section>
    </article>
</template>

<script>
export default {
    name: 'VideoSecurityCard'
};
</script>

<style scoped>
.card {
    width: 390px;
    text-align: center;
}

.title {
    font-size: 1.35rem;
    font-weight: 700;
    padding: .5rem;
    margin: 0;
}

.dropdown-container,
.contact {
    padding-block: .5rem;
    padding-inline: 1rem;
}

.dropdown-container {
    text-align: left;
}

.dropdown-container {
    text-align: left;
}

.dropdown {
    padding-inline-start: .1rem;
}

summary {
    font-weight: bold;
    padding: .2rem;
}

ul {
    padding-inline-start: 2rem;
}

ul li {
    padding-block: .2rem;
}

ul p {
    font-style: italic;
}

.contact .text:first-child {
    font-style: italic;
}

.btn {
    width: 90%;
    font-size: .9rem;
    color: black;
    background: linear-gradient(to right, #80E0FC, #187EC1);
    margin: 0 auto;
}

.btn,
.btn-text {
    transition: all 0.3s ease;
}

.btn:hover {
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

.btn:hover .btn-text {
    color: white;
    font-weight: 500;
}

.link {
    text-decoration: none;
    color: #0984D0;
}

.link p {
    padding: .5rem;
}

.link:hover {
    text-decoration: underline;
}
</style>