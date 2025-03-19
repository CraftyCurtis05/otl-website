<template>
    <main class="jumbotron">
        <section class="text-container col-md-6">
            <h1 class="text-white">Your Technology Needs,<br>Our Expertise.</h1>
            <hr class="text-secondary mx-auto">
            <article class="text mx-auto">
                <p class="text-white">We specialize in providing top-tier services designed to meet all your business technology needs, including:</p>
                <p class="text-info mx-auto"><b>Support, Installation, Maintenance, Consulting & VoIP Solutions</b></p>
                <p class="lead">
                    <router-link class="btn btn-md" to="/services" role="button">
                        <span class="btn-text">LEARN MORE&nbsp;</span>
                        <div class="btn-img">
                            <img class="black-img" src="@/assets/images/icons/button_arrow_black.png"/>
                            <img class="white-img" src="@/assets/images/icons/button_arrow_white.png"/>
                        </div>
                    </router-link>
                </p>
            </article>
        </section>
    </main>
</template>

<script>
export default {
    name: 'HomeJumbotron',
};
</script>

<style scoped>
.jumbotron {
    width: 100%;
    height: 25rem;
    background-image: url('@/assets/images/home_page/home_jumbotron.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.text-container {
    line-height: 1.3;
    padding-top: 3%;
}

hr {
    width: 35%;
    border: 3px solid;
}

.text {
    width: 85%;
    font-family: 'Helvetica', sans-serif;
    font-size: 1.5rem;
}

.text-info {
    width: 75%;
}

.btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30%;
    font-size: 1.1rem;
    color: black;
    background: linear-gradient(to right, #80E0FC, #187EC1);
    margin: 0 auto;
}

.btn,
.btn-text,
.btn-img {
    transition: all 0.3s ease;
}

.btn-img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: auto;
}

.btn-img img {
    position: absolute;
    width: 100%;
    height: auto;
}

.btn-img .black-img {
    opacity: 1;
}

.btn-img .white-img {
    opacity: 0;
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
    transform: scale(1.1); /* Scale only the text inside the button */
}

.btn:hover .btn-img {
    width: 20%;
    transform: translateX(8px);
}

.btn:hover .black-img {
    opacity: 0;
}

.btn:hover .white-img {
    opacity: 1;
}
</style>