export interface ProductInterface {
    id: number
    title: string
    shortDescription: string
    longDescription: string
    tags: string[]
    priceAsString: string
    pricesAsInt: number
    imageFileName: string
    releaseYear: number
    pagesNumber: number
    editorial: string
    author: string
}
export default class Product implements ProductInterface {
    id: number
    title: string
    shortDescription: string
    longDescription: string
    tags: string[]
    priceAsString: string
    pricesAsInt: number
    imageFileName: string
    releaseYear: number
    pagesNumber: number
    editorial: string
    author: string

    constructor(
        id: number,
        title: string,
        shortDescription: string,
        longDescription: string,
        tags: string[],
        priceAsString: string,
        pricesAsInt: number,
        imageFileName: string,
        releaseYear: number,
        pagesNumber: number,
        editorial: string,
        author: string
    ) {
        this.id = id
        this.title = title
        this.shortDescription = shortDescription
        this.longDescription = longDescription
        this.tags = tags
        this.priceAsString = priceAsString
        this.pricesAsInt = pricesAsInt
        this.imageFileName = imageFileName
        this.releaseYear = releaseYear
        this.pagesNumber = pagesNumber
        this.editorial = editorial
        this.author = author
    }
}
