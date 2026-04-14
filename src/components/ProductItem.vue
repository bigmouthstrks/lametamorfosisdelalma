<template>
    <div class="product-card">
        <!-- Esquinas decorativas -->
        <span class="corner corner-tl">✦</span>
        <span class="corner corner-tr">✦</span>
        <span class="corner corner-bl">✦</span>
        <span class="corner corner-br">✦</span>

        <div class="row g-0 align-items-center">
            <!-- Portada -->
            <div class="col-5 col-md-4 product-cover-col">
                <router-link
                    :to="{ name: 'ProductDetailView', params: { id: product.id } }"
                    class="product-cover-link"
                >
                    <div class="product-cover-wrap">
                        <img
                            src="../assets/images/products/la-revolucion-simbolica-cover.png"
                            alt="Portada del libro"
                            class="product-cover-img"
                        />
                        <div class="product-cover-overlay">
                            <span class="product-cover-overlay-text">Ver detalle</span>
                        </div>
                    </div>
                </router-link>
            </div>

            <!-- Info -->
            <div class="col-7 col-md-8 product-info-col">
                <div class="product-info">
                    <h4 class="product-title">{{ product.title }}</h4>

                    <div class="product-divider">
                        <span class="product-divider-line"></span>
                        <span class="product-divider-star">✦</span>
                        <span class="product-divider-line"></span>
                    </div>

                    <p class="product-description d-none d-sm-block">
                        {{ product.shortDescription }}
                    </p>

                    <div class="product-tags">
                        <span
                            class="product-tag"
                            v-for="(tag, i) in product.tags"
                            :key="i"
                        >{{ tag }}</span>
                    </div>

                    <router-link
                        :to="{ name: 'ProductDetailView', params: { id: product.id } }"
                        class="product-btn-link"
                    >
                        <button class="purchase-button product-btn">
                            Descubrir ✦
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Product from '../store/Product/Product'
export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Product,
            required: true
        }
    }
}
</script>

<style scoped>
.product-card {
    position: relative;
    background: linear-gradient(145deg, #f5e6c0 0%, #efe0b0 60%, #e8d090 100%);
    border: 1px solid #8a6f28;
    border-radius: 3px;
    box-shadow:
        0 6px 30px rgba(20, 5, 10, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    overflow: visible;
    margin-bottom: 28px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 12px 48px rgba(20, 5, 10, 0.6),
        0 0 24px rgba(201, 168, 76, 0.12);
}

/* Esquinas decorativas */
.corner {
    position: absolute;
    font-size: 10px;
    color: #8a6f28;
    line-height: 1;
    opacity: 0.7;
}
.corner-tl { top: -6px;  left: -6px; }
.corner-tr { top: -6px;  right: -6px; }
.corner-bl { bottom: -6px; left: -6px; }
.corner-br { bottom: -6px; right: -6px; }

/* Portada */
.product-cover-col {
    padding: 16px 8px 16px 16px;
}

.product-cover-link {
    display: block;
}

.product-cover-wrap {
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    box-shadow:
        4px 4px 12px rgba(20, 5, 10, 0.4),
        -1px -1px 6px rgba(255, 255, 255, 0.2);
}

.product-cover-img {
    width: 100%;
    display: block;
    transition: transform 0.35s ease;
}

.product-cover-overlay {
    position: absolute;
    inset: 0;
    background: rgba(58, 13, 30, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.product-cover-wrap:hover .product-cover-img {
    transform: scale(1.04);
}

.product-cover-wrap:hover .product-cover-overlay {
    opacity: 1;
}

.product-cover-overlay-text {
    font-family: var(--font-heading);
    font-size: 0.75rem;      /* 12px */
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #e8c96b;
    border: 1px solid rgba(201, 168, 76, 0.5);
    padding: 6px 12px;
}

/* Info */
.product-info-col {
    padding: 20px 20px 20px 12px;
}

.product-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.product-title {
    font-family: var(--font-heading);
    font-size: clamp(1rem, 2.5vw, 1.375rem); /* 16–22px */
    font-weight: 700;
    letter-spacing: 0.06em;
    color: #3a0d1e;
    line-height: 1.35;
    margin: 0;
}

.product-divider {
    display: flex;
    align-items: center;
    gap: 8px;
}

.product-divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, #8a6f28, transparent);
    display: block;
}

.product-divider-star {
    color: #8a6f28;
    font-size: 10px;
}

.product-description {
    font-family: var(--font-body);
    font-size: clamp(0.875rem, 1.4vw, 1rem); /* 14–16px */
    color: #2e1018;
    line-height: 1.7;
    text-align: justify;
    opacity: 0.85;
    margin: 0;
}

.product-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.product-tag {
    font-family: var(--font-heading);
    font-size: 0.6875rem;    /* 11px — decorativo, aceptable en uppercase */
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5c1a2e;
    border: 1px solid rgba(92, 26, 46, 0.35);
    padding: 4px 10px;
    border-radius: 1px;
    background: rgba(92, 26, 46, 0.06);
}

.product-btn-link {
    text-decoration: none;
}

.product-btn {
    font-size: 0.875rem;     /* 14px — botón interactivo */
    letter-spacing: 0.1em;
    padding: 10px 22px;
    min-width: 0;
    margin-top: 4px;
}
</style>
