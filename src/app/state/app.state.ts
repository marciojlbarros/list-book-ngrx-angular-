import { Book } from "../book-list/books.model";

//Defina o estado como uma lista de livros e uma lista de IDs de livros de coleção
export interface AppState {
    books: ReadonlyArray<Book>;
    collection: ReadonlyArray<string>;
}