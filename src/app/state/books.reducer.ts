import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/books.model";
import { retrievedBookList } from "./books.actions";

// função redutora para tratar da recuperação da lista de livros do estado e, consequentemente, atualizar o estado.
export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(retrievedBookList, (_state, { books }) => books)
);