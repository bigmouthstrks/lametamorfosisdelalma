import authorsJson from './authors.json'
import { type Author } from './Author'

export class AuthorController {
    public getAuthor(name: String) {
        const authors: Author[] = authorsJson.authors
        const author = authors.find((author) => author.name == name);
        return author
    }
}