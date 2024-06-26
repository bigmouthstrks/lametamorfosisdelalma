<template>
    <div class="col-8 col-md-4 col-lg-2 ml-1 mr-1">
        <div v-if="enabled">
            <router-link :to="'/' + destination">
                <div class="text-center">
                    <img :src="image" class="navigation-img" alt="Image" />
                </div>
                <p class="home-opt-title text-center special-title">{{ title }}</p>
            </router-link>
        </div>
        <div v-if="!enabled">
            <router-link to="#">
                <div class="text-center image-container">
                    <div class="d-flex justify-content-center">
                        <img :src="image" class="navigation-img" alt="Image" />
                    </div>
                    <div class="overlay">
                        <p class="text-light overlay-text">Próximamente</p>
                    </div>
                </div>
                <p class="home-opt-title text-center special-title">{{ title }}</p>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'HomeNavItem',
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        enabled: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit the color from the parent element */
}

a.custom-link {
    color: #ffbaba; /* Custom color for links */
}

a:hover {
    color: #ffbaba; /* Change color on hover */
}

.home-opt-title {
    font-size: 20px;
}

.navigation-img {
    width: 175;
    height: 175px;
    -webkit-filter: drop-shadow(8px 18px 8px #36638a);
    filter: drop-shadow(8px 12px 2px #36638a);
}

.navigation-img:hover {
    transition: transform 0.3s ease; /* Smooth transition for the zoom effect */
    transform: scale(1.07); /* Zoom in effect */
}

.image-container {
    position: relative;
    width: 175;
    height: 175px;
}

.image-container img {
    width: 175;
    height: 175px;
    display: block;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
    opacity: 1;
}

.overlay-text {
    color: white;
    font-size: 20px; /* Adjust the font size as needed */
    text-align: center;
}
</style>
