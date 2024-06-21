<template>
    <Navbar title="La metamorfosis del Alma" />
    <div class="view-container d-flex justify-content-center home-container">
        <div class="row justify-content-center align-items-center">
            <HomeNavItem title="Conoce mis escritos" :image="openBook" destination="writings" />
            <HomeNavItem
                title="Consigue la primera publicación digital"
                :image="heart"
                destination="writings"
            />
            <HomeNavItem
                title="Descubre la fuerza instintiva femenina"
                :image="bookCover"
                destination="reading-club"
            />
            <HomeNavItem title="Agenda Tarot" :image="rock" destination="sessions" />
            <HomeNavItem title="Iniciemos terapia juntos" :image="tea" destination="sessions" />
        </div>
    </div>
    <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeNavItem from '../components/HomeNavItem.vue'
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import bookCover from '@/assets/images/book-cover-art-transparent-bg.png'
import tea from '@/assets/images/tea.png'
import openBook from '@/assets/images/open-book.png'
import heart from '@/assets/images/heart.png'
import rock from '@/assets/images/rock.png'

export default defineComponent({
    name: 'Home',
    components: {
        HomeNavItem,
        Navbar,
        FooterComponent
    },
    data() {
        return {
            bookCover,
            tea,
            openBook,
            heart,
            rock
        }
    }
})
</script>

<style scoped>
.navbar-container,
.footer-container,
.view-container {
    background-color: #699ac4 !important;
    color: #fffdd0 !important;
}
</style>
