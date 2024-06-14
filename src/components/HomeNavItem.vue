<template>
    <div class="col-8 col-md-4 col-lg-2 ml-1 mr-1">
        <router-link :to="'/' + destination">
            <div class="text-center">
                <img :src="image" class="navigation-img" alt="Image" />
            </div>
            <p class="home-opt-title text-center special-title">{{ title }}</p>
        </router-link>
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
    -webkit-filter: drop-shadow(8px 18px 8px #ffbaba);
    filter: drop-shadow(8px 12px 2px #fbb1b1);
}

.navigation-img:hover {
    transition: transform 0.3s ease; /* Smooth transition for the zoom effect */
    transform: scale(1.07); /* Zoom in effect */
}
</style>
