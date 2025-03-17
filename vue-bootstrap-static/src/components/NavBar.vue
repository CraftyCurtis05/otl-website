<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/"><img src="@/assets/images/otl-logo.png" alt="Logo" width="50"/></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/services" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a class="dropdown-item" href="/services">Consulting</a></li>
                            <li><a class="dropdown-item" href="/services">Support</a></li>
                            <li><a class="dropdown-item" href="/services">Video Security</a></li>
                            <li><a class="dropdown-item" href="/services">VoIP</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="/support" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Support
                        </router-link>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a class="dropdown-item" href="/support">Hourly</a></li>
                            <li><a class="dropdown-item" href="/support">Emergency</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/pricing">Pricing</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-info" type="submit">Search</button>
                </form>
            </div>
        </div>    
    </nav>
</template>

<script>
export default {
    name: 'NavBarComponent'
}
</script>

<style scoped>
/* Desktop Screen Size Styling */
@media only screen and (min-width: 1280px) {

}

/* Laptop Screen Size Styling */
@media only screen and (min-width: 769px) and (max-width: 1279px) {
    
}

/* Tablet Screen Size Styling */
@media only screen and (min-width: 481px) and (max-width: 768px) {
    
}

/* Mobile Screen Size Styling */
@media only screen and (max-width: 480px) {
    
}
</style>