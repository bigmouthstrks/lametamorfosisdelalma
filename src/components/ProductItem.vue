<template>
    <div class="card-container card shadow">
        <div class="row">
            <div class="col-6 col-md-4">
                <router-link
                    :to="{
                        name: 'ProductDetailView',
                        params: { id: product.id }
                    }"
                >
                    <img
                        src="../assets/images/products/la-revolucion-simbolica-cover.png"
                        alt="product image"
                        class="img-fluid rounded-start"
                    />
                </router-link>
            </div>
            <div class="col-6 col-md-8 row d-flex text-center">
                <div class="more-info-container text-end">
                    <!-- TODO: Dropdown -->
                    <!-- <div class="dropdown">
                        <button
                            class="btn border-0"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <strong>...</strong>
                        </button>
                        <ul class="dropdown-menu border-0 shadow-sm">
                            <li><a class="dropdown-item" href="#">Compartir </a></li>
                            <li><a class="dropdown-item" href="#">Ver más</a></li>
                        </ul>
                    </div> -->
                </div>
                <div class="justify-content-center card-body">
                    <h4 class="magazine-title text-wrap">{{ product.title }}</h4>
                    <p class="card-text text-wrap d-none d-sm-block small-description">
                        <small class="text-body-secondary">{{ product.shortDescription }}</small>
                    </p>
                    <div
                        class="badge rounded-pill ml-1 me-1 text-dark d-none d-sm-inline"
                        v-for="(tag, i) in product.tags"
                        :key="i"
                    >
                        <small>{{ tag }}</small>
                    </div>
                </div>
                <div class="justify-content-center">
                    <router-link
                        :to="{
                            name: 'ProductDetailView',
                            params: { id: product.id }
                        }"
                    >
                        <button class="purchase-button">Ver más</button>
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
.more-info-container {
    height: 4px;
}

.badge {
    background-color: var(--bs-danger-bg-subtle);
}

.price {
    font-size: 32px;
    font-weight: lighter;
}

.dropdown-item.active,
.dropdown-item:active {
    background-color: #6696c8;
    color: white;
}

.card-container {
    border: white 5px solid;
}
.small-description {
    font-size: 16px;
    line-height: 14px !important;
    text-align: justify;
}
</style>
