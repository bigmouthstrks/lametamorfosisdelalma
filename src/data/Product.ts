export interface Product {
    id: number
    title: string
    shortDescription: string
    longDescription: string
    tags: string[]
    priceAsString: string
    pricesAsInt: number
    imageFileName: string
}