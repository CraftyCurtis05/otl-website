<!-- src/components/pricing/cards/ConsultingCard.vue -->
<template>
    <article class="card">
        <h1 class="title">Consulting Services</h1>
        <section class="dropdown-container">
            <details class="dropdown-container">
                <summary>Pricing is available by proposal only.</summary>
            </details>
        </section>
        <section class="contact">
            <p class="text">Contact us to schedule an appointment, and our team will discuss your specific project and provide a tailored quote.</p>
            <router-link class="btn btn-md" to="/contact" role="button">
                <span class="btn-text">GET STARTED TODAY!</span>
            </router-link>
            <router-link to="/services#consulting" class="link">
                <p>Learn More About Our Consulting Services</p>
            </router-link>
        </section>
    </article>
</template>

<script>
export default {
    name: 'ConsultingCard'
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

.dropdown {
    padding-inline-start: .1rem;
}

summary {
    list-style: none;
    text-align: center;
    font-weight: bold;
    padding: .2rem;
    cursor: text;
}

ul {
    padding-inline-start: 2rem;
}

ul li {
    padding-block: .2rem;
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

<!-- <dialog></dialog> -->