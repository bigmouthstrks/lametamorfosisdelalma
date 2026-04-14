<template>
    <div class="footer-container">
        <div class="container">
            <div class="footer-inner text-center">
                <span class="footer-ornament">⊱ ✦ ⊰</span>
                <p class="footer-text">
                    &copy; {{ currentYear }} La Metamorfosis del Alma &nbsp;·&nbsp; Todos los derechos reservados.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'FooterComponent',
    computed: {
        currentYear(): number {
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
.footer-container {
    width: 100%;
    padding: 20px 0 14px;
}

.footer-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}

.footer-ornament {
    font-size: 0.875rem;  /* 14px */
    color: #c9a84c;
    letter-spacing: 8px;
    opacity: 0.7;
}

.footer-text {
    font-family: var(--font-heading);
    font-size: 0.75rem;   /* 12px — texto legal secundario */
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d4b87a;
    opacity: 0.7;
    margin: 0;
}
</style>
