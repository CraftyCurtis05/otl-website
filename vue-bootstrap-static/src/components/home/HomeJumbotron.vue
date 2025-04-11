<template>
    <main class="jumbotron">
        <article class="text-container col-md-6">
            <h1>Your Technology Needs,<br>Our Expertise.</h1>
            <hr>
            <section class="text">
                <p>We specialize in providing top-tier services designed to meet all your business technology needs, including:</p>
                <p class="text-blue">Support, Installation, Maintenance, Consulting & VoIP Solutions</p>
                <router-link 
                    to="/services" 
                    class="btn btn-md" 
                    role="button"
                    aria-label="Learn more about our services"
                    title="Learn more about our services"
                    >
                    <span class="btn-text">LEARN MORE&nbsp;</span>
                    <div class="img-container">
                        <img 
                            class="img-black" 
                            :src="imageBlack" 
                            loading="lazy"
                        />
                        <img 
                            class="img-white" 
                            :src="imageWhite" 
                            loading="lazy"
                        />
                    </div>
                </router-link>
            </section>
        </article>
    </main>
</template>

<script>
import imageBlack from "@/assets/images/icons/button_arrow_black.png";
import imageWhite from "@/assets/images/icons/button_arrow_white.png";

export default {
    name: 'HomeJumbotron',
    data() {
        return {
            imageBlack: imageBlack,
            imageWhite: imageWhite
        };
    }
};
</script>

<style scoped>
.jumbotron {
    height: 45%;
    background-image: url('@/assets/images/home/home_jumbotron.png');
}

.text-container {
    margin-block: 5vh;
}

h1,
.text {
    width: 50%;
    margin: auto;
    margin-block: 1%;
}

h1 {
    font-size: 1.9rem;
    font-weight: bold;
}

hr {
    margin: auto;
}

.btn {
    display: flex;
    flex-direction: row;
    font-size: .9rem;
    margin-top: 1vh;
    width: 10rem;
}

@media only screen and (min-width: 2001px) {

    h1,
    .text {
        width: 60%;
    }

    h1 {
        font-size: 3rem;
    }

    .text {
        font-size: 1.5rem;
    }

    .btn {
        font-size: 1.2rem;
        width: 15rem;
    }
}

@media only screen and (min-width: 1440px) and (max-width: 2000px) {

    h1,
    .text {
        width: 60%;
    }

    h1 {
        font-size: 1.75rem;
    }

    .text {
        font-size: 1rem;
    }

    .btn {
        font-size: .9rem;
        width: 10rem;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1439px){
    
    .text-container {
        margin-block: 4vh;
        margin-left: -15%;
        width: 80%;
    }

    h1 {
        font-size: 1.5rem;
    }

    .text {
        font-size: .9rem;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
    
    .text-container {
        margin-block: 4vh;
        margin-left: -20%;
        width: 90%;
    }

    h1 {
        font-size: 1.5rem;
    }

    .text {
        font-size: .9rem;
    }
}

@media only screen and (min-width: 481px) and (max-width: 767px) {

    .jumbotron {
        background-image: url('@/assets/images/home/home_jumbotron_tablet.png');
    }
    
    .text-container {
        margin-block: 1%;
        margin-left: -15%;
        width: 90%;
    }

    h1,
    .text,
    .btn {
        margin-block: 1%;
    }

    h1 {
        font-size: 1.4rem;
        width: 100%;
    }

    .text {
        font-size: .9rem;
        width: 50%;
    }

    .btn {
        font-size: .8rem;
        width: 9rem;
    }
}

@media only screen and (max-width: 480px) {

    .jumbotron {
        background-image: url('@/assets/images/home/home_jumbotron_mobile.png');
    }
    
    .text-container {
        margin: 3vh auto;
        width: 100%;
    }

    h1 {
        font-size: 1.3rem;
        width: 100%;
    }

    .text {
        width: 75%;
    }

    .btn {
        font-size: .8rem;
        width: 8rem;
    }
}

@media only screen and (max-width: 328px) {

    .jumbotron {
        height: 40vh;
    }

    h1 {
        font-size: 1.2rem;
    }

    .text {
        font-size: .9rem;
        width: 80%;
    }

    .btn {
        font-size: .75rem;
        width: 7.5rem;
    }
}
</style>