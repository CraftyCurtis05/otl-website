<template>
    <router-link to="/services#video-security" class="link">
        <article class="card">
            <section class="card-body">
                <h1 class="card-title">Video Security</h1>
                <span class="card-click">Click to learn more</span>
            </section>
            <section class="image-container">
                <img :src="imageSrc" class="card-img-top" alt="Video Security Image"/>
            </section>
            <section class="card-text">
                <p>Secure your business with advanced video surveillance for peace of mind.</p>
            </section>
        </article>
    </router-link>
</template>

<script>
import image from '@/assets/images/services_page/cards/video_security_card.png';

export default {
    name: 'ConsultingCard',
    data() {
        return {
            imageSrc: image
        };
    }
};
</script>

<style scoped>
.link {
    text-decoration: none;
}

.card {
    width: 390px;
    border: 0;
    line-height: 1.2;
    transition: all 0.4s ease;
}

.card h1 {
    font-size: 1.35rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
}

.card-body{
    padding: .5rem;
}

.card-click {
    font-size: .95rem;
    font-style: italic;
    color: #002373;
}

.image-container {
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

.card-text {
    width: 60%;
    margin: auto;
}

.card:hover {
    background-color: #8b8b8b;
    transform: scale(1.1);
    z-index: 10;
}

.card:hover .link {
    font-weight: 800;
}

.card:hover .card-click {
    text-decoration: underline;
}

.card:hover .image-container {
    border-color: #00FFFF;
    box-shadow: 0 0 15px 5px rgba(128, 224, 252, 0.9);
    transform: translateY(-1px);
}
</style>