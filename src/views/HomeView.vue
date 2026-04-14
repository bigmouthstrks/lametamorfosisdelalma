<template>
    <div class="home-page">
        <Navbar title="La Metamorfosis del Alma" :isBackVisible="false" backRoute="" />

        <!-- Hero -->
        <section class="home-hero">
            <div class="hero-vignette"></div>
            <div class="hero-content">
                <p class="text-eyebrow hero-eyebrow">✦ &nbsp; Psicología · Alma · Transformación &nbsp; ✦</p>
                <h1 class="hero-title special-title">La Metamorfosis<br />del Alma</h1>
                <div class="hero-divider">
                    <span class="hero-divider-line"></span>
                    <span class="hero-divider-ornament">⊱ ✦ ⊰</span>
                    <span class="hero-divider-line"></span>
                </div>
                <p class="hero-subtitle">Para un mundo psíquicamente sano y espiritualmente vivo</p>
            </div>
        </section>

        <!-- Grid de navegación -->
        <section class="home-nav-section">
            <div class="container">
                <div class="row row-cols-2 row-cols-sm-3 row-cols-xl-5 justify-content-center g-0">
                    <HomeNavItem
                        title="Conoce mis escritos"
                        :image="openBook"
                        destination="writings"
                        :enabled="true"
                    />
                    <HomeNavItem
                        title="Primera publicación digital"
                        :image="heart"
                        destination="writings"
                        :enabled="true"
                    />
                    <HomeNavItem
                        title="Fuerza instintiva femenina"
                        :image="bookCover"
                        destination="club-de-lectura"
                        :enabled="true"
                    />
                    <HomeNavItem
                        title="Agenda Tarot"
                        :image="rock"
                        destination="sessions#tarot"
                        :enabled="true"
                    />
                    <HomeNavItem
                        title="Iniciemos terapia juntos"
                        :image="tea"
                        destination="sessions#terapia"
                        :enabled="true"
                    />
                </div>
            </div>
        </section>

        <FooterComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeNavItem from '../components/HomeNavItem.vue'
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import bookCover from '@/assets/images/book-cover-art-transparent-bg.png'
import tea      from '@/assets/images/tea.png'
import openBook from '@/assets/images/open-book.png'
import heart    from '@/assets/images/heart.png'
import rock     from '@/assets/images/rock.png'

export default defineComponent({
    name: 'Home',
    components: { HomeNavItem, Navbar, FooterComponent },
    data() {
        return { bookCover, tea, openBook, heart, rock }
    }
})
</script>

<style scoped>
.home-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #120620 0%, #1e0b2e 40%, #3a0d1e 100%);
}

/* ---- Hero ---- */
.home-hero {
    position: relative;
    min-height: 72vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 110px 20px 60px;
    overflow: hidden;
}

.home-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201, 168, 76, 0.07) 0%, transparent 70%),
        radial-gradient(ellipse 60% 80% at 20% 80%, rgba(196, 122, 138, 0.06) 0%, transparent 60%);
    pointer-events: none;
}

.hero-vignette {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse at top, transparent 40%, rgba(18, 6, 32, 0.4) 100%);
    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 700px;
}

.hero-eyebrow {
    margin-bottom: 20px;
}

.hero-title {
    font-size: clamp(38px, 7vw, 82px);
    line-height: 1.1;
    color: #f2e2a8;
    text-shadow:
        0 0 40px rgba(201, 168, 76, 0.25),
        0 4px 16px rgba(18, 6, 32, 0.8);
    margin-bottom: 24px;
}

.hero-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    margin-bottom: 20px;
}

.hero-divider-line {
    width: 60px;
    height: 1px;
    background: linear-gradient(to right, transparent, #c9a84c, transparent);
    display: block;
}

.hero-divider-ornament {
    color: #c9a84c;
    font-size: 14px;
    letter-spacing: 4px;
}

.hero-subtitle {
    font-family: var(--font-body);
    font-style: italic;
    font-size: clamp(1rem, 2.2vw, 1.1875rem); /* 16–19px */
    color: #d4b87a;
    letter-spacing: 0.04em;
    line-height: 1.7;
}

/* ---- Grid ---- */
.home-nav-section {
    padding: 20px 0 60px;
}
</style>
