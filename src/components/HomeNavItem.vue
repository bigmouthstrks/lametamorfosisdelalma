<template>
    <div class="col nav-item-col">
        <router-link :to="enabled ? '/' + destination : '#'" class="nav-item-link">
            <div class="nav-item-card" :class="{ 'nav-item-disabled': !enabled }">
                <div class="nav-item-image-wrap">
                    <img :src="image" class="nav-item-img" alt="" />
                    <div v-if="!enabled" class="nav-item-overlay">
                        <span class="nav-item-soon">Próximamente</span>
                    </div>
                    <div v-if="enabled" class="nav-item-glow"></div>
                </div>
                <p class="nav-item-title">{{ title }}</p>
                <span v-if="enabled" class="nav-item-cta">Explorar ✦</span>
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
export default {
    name: 'HomeNavItem',
    props: {
        title:       { type: String,  required: true },
        image:       { type: String,  required: true },
        destination: { type: String,  required: true },
        enabled:     { type: Boolean, required: true }
    }
}
</script>

<style scoped>
.nav-item-col {
    padding: 10px;
    min-width: 0;
}

.nav-item-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.nav-item-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 12px 16px;
    background: linear-gradient(160deg, rgba(244, 228, 193, 0.06) 0%, rgba(58, 13, 30, 0.3) 100%);
    border: 1px solid rgba(201, 168, 76, 0.25);
    border-radius: 3px;
    transition: all 0.35s ease;
    position: relative;
    cursor: pointer;
}

.nav-item-card::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(201, 168, 76, 0.08);
    border-radius: 2px;
    pointer-events: none;
    transition: border-color 0.35s ease;
}

.nav-item-card:not(.nav-item-disabled):hover {
    background: linear-gradient(160deg, rgba(201, 168, 76, 0.12) 0%, rgba(58, 13, 30, 0.4) 100%);
    border-color: rgba(201, 168, 76, 0.6);
    transform: translateY(-6px);
    box-shadow:
        0 8px 32px rgba(20, 5, 10, 0.5),
        0 0 20px rgba(201, 168, 76, 0.12);
}

.nav-item-card:not(.nav-item-disabled):hover::before {
    border-color: rgba(201, 168, 76, 0.25);
}

.nav-item-disabled {
    opacity: 0.5;
    cursor: default;
}

/* Imagen */
.nav-item-image-wrap {
    position: relative;
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-item-img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    filter: drop-shadow(0 6px 16px rgba(20, 5, 10, 0.6));
    transition: filter 0.35s ease, transform 0.35s ease;
}

.nav-item-card:not(.nav-item-disabled):hover .nav-item-img {
    filter:
        drop-shadow(0 0 12px rgba(201, 168, 76, 0.45))
        drop-shadow(0 8px 20px rgba(20, 5, 10, 0.7));
    transform: scale(1.06);
}

/* Overlay "próximamente" */
.nav-item-overlay {
    position: absolute;
    inset: 0;
    background: rgba(18, 6, 32, 0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
}

.nav-item-soon {
    font-family: var(--font-heading);
    font-size: 0.75rem;      /* 12px */
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d4b87a;
    border: 1px solid rgba(201, 168, 76, 0.4);
    padding: 5px 12px;
}

/* Brillo hover */
.nav-item-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.18) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
}

.nav-item-card:hover .nav-item-glow {
    opacity: 1;
}

/* Texto */
.nav-item-title {
    font-family: var(--font-heading);
    font-size: 0.8125rem;    /* 13px — legible en tamaño pequeño */
    font-weight: 600;
    letter-spacing: 0.08em;  /* menos compresión que antes */
    text-transform: uppercase;
    color: #e8c96b;
    text-align: center;
    margin-top: 14px;
    margin-bottom: 6px;
    line-height: 1.45;
}

.nav-item-cta {
    font-family: var(--font-heading);
    font-size: 0.6875rem;    /* 11px — puramente decorativo/hover */
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #c9a84c;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.nav-item-card:hover .nav-item-cta {
    opacity: 0.8;
}
</style>
