<template>
    <div class="navbar-background navbar-container">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-2 d-flex align-items-center">
                    <router-link
                        v-if="isBackVisible"
                        :to="'/' + backRoute"
                        class="nav-back-link"
                        aria-label="Volver"
                    >
                        <font-awesome-icon icon="chevron-left" class="nav-back-icon" />
                    </router-link>
                </div>
                <router-link to="/" class="col-8 text-center nav-brand">
                    <span class="nav-ornament">✦</span>
                    <span class="nav-title">{{ title }}</span>
                    <span class="nav-ornament">✦</span>
                </router-link>
                <div class="col-2"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'NavBar',
    props: {
        title: {
            type: String,
            required: true
        },
        isBackVisible: {
            type: Boolean,
            required: true
        },
        backRoute: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.navbar-container {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 10px 0;
}

.nav-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-decoration: none;
}

.nav-title {
    font-family: var(--font-heading);
    font-size: clamp(0.875rem, 2.2vw, 1.125rem); /* 14–18px */
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #e8c96b;
    text-shadow: 0 0 12px rgba(201, 168, 76, 0.4);
    transition: color 0.3s ease;
}

.nav-brand:hover .nav-title {
    color: #f2e2a8;
}

.nav-ornament {
    color: #c9a84c;
    font-size: 12px;
    opacity: 0.8;
}

.nav-back-link {
    color: #c9a84c;
    text-decoration: none;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(201, 168, 76, 0.3);
    border-radius: 2px;
    transition: all 0.3s ease;
}

.nav-back-link:hover {
    background: rgba(201, 168, 76, 0.15);
    border-color: #c9a84c;
    color: #e8c96b;
}

.nav-back-icon {
    font-size: 1rem; /* 16px — ícono interactivo */
}
</style>
