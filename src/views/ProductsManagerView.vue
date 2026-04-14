<template>
    <div class="manager-page">
        <Navbar title="Gestión de productos" :isBackVisible="true" backRoute="" />

        <div class="manager-content">
            <div class="manager-header">
                <p class="text-eyebrow manager-eyebrow">✦ &nbsp; Panel de administración &nbsp; ✦</p>
                <h2 class="manager-heading cinzel-heading text-gold">Productos</h2>
                <div class="manager-ornament">⊱ ✦ ⊰</div>
            </div>

            <div class="container">
                <div class="manager-list" v-if="products.length">
                    <div
                        class="manager-row"
                        v-for="product in products"
                        :key="product.id"
                    >
                        <span class="manager-row-id text-gold">#{{ product.id }}</span>
                        <span class="manager-row-title">{{ product.title }}</span>
                        <span class="manager-row-price text-gold">{{ product.priceAsString }}</span>
                    </div>
                </div>
                <p v-else class="manager-empty">Cargando productos…</p>
            </div>
        </div>

        <FooterComponent />
    </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import Navbar             from '../components/Navbar.vue'
import FooterComponent    from '../components/FooterComponent.vue'
import { ProductController } from '../store/Product/ProductController'

export default {
    name: 'ProductsManagerView',
    components: { Navbar, FooterComponent },
    setup() {
        const products = ref<any[]>(ProductController.getLocalProducts())

        onMounted(async () => {
            try {
                const result = await ProductController.getProducts()
                if (result?.products && Array.isArray(result.products)) {
                    products.value = result.products
                } else if (Array.isArray(result)) {
                    products.value = result
                }
            } catch {
                // Ya cargó los locales como fallback en el ref inicial
            }
        })

        return { products }
    }
}
</script>

<style scoped>
.manager-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #120620 0%, #1e0b2e 50%, #3a0d1e 100%);
    display: flex;
    flex-direction: column;
}

.manager-content {
    flex: 1;
    padding: 100px 0 60px;
}

.manager-header {
    text-align: center;
    padding: 0 20px 40px;
}

.manager-eyebrow {
    opacity: 0.8;
    margin-bottom: 12px;
}

.manager-heading {
    font-size: clamp(22px, 3vw, 32px);
    margin-bottom: 14px;
}

.manager-ornament {
    color: #c9a84c;
    font-size: 14px;
    letter-spacing: 6px;
    opacity: 0.6;
}

/* Tabla de productos */
.manager-list {
    border: 1px solid #8a6f28;
    border-radius: 3px;
    overflow: hidden;
}

.manager-row {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 20px;
    border-bottom: 1px solid rgba(138, 111, 40, 0.2);
    background: linear-gradient(90deg, rgba(201, 168, 76, 0.04) 0%, transparent 100%);
    transition: background 0.2s ease;
}

.manager-row:last-child {
    border-bottom: none;
}

.manager-row:hover {
    background: rgba(201, 168, 76, 0.08);
}

.manager-row-id {
    font-family: var(--font-heading);
    font-size: 11px;
    letter-spacing: 0.1em;
    min-width: 36px;
    opacity: 0.7;
}

.manager-row-title {
    font-family: var(--font-body);
    font-size: 15px;
    color: #f2e2a8;
    flex: 1;
}

.manager-row-price {
    font-family: var(--font-heading);
    font-size: 12px;
    letter-spacing: 0.08em;
}

.manager-empty {
    font-family: var(--font-body);
    font-style: italic;
    color: #c9a84c;
    text-align: center;
    opacity: 0.6;
    padding: 40px;
}
</style>
