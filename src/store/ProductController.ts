import productsAsJson from './products.json'
import Product from './Product'

export class ProductController {
    static getProducts() {
        const products: Product[] = productsAsJson.products
        return products
    }
    static getProduct(id: number) {
        const products: Product[] = productsAsJson.products
        const product = products.find((product) => product.id == id);
        return product
    }
}