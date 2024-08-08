<template>
    <h1>Products</h1>
    <ul>
        <li v-for="item in productsList" :key="item.id">
            <p>{{ item.id }}</p>
            <p>{{ item.title }}</p>
            <p>{{ item.shortDescription }}</p>
            <p>{{ item.longDescription }}</p>
            <p>{{ item.editorial }}</p>
            <p>{{ item.tags }}</p>
            <p>{{ item.author }}</p>
            <p>{{ item.priceAsString }}</p>
        </li>
    </ul>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { ProductController } from '../store/Product/ProductController'
import Product from '../store/Product/Product'

export default {
    name: 'ProductsManagerView',
    setup() {
        const productsList = ref<Product[]>([])
        onMounted(async () => {
            try {
                const products: Product[] = await ProductController.getProducts()
                productsList.value = products
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        })

        return { productsList }
    }
}
</script>
