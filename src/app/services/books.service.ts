import { Injectable } from '@angular/core';
import { BooksGeneral, BooksNovelas, BooksFiccion } from '../classes/books.interface';
import { BooksBuscar } from '../classes/general.interface';
import { books, booksNovela, booksFiccion } from '../config/books';
import { booksBuscar } from '../config/general';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAll(): BooksBuscar[]{
    return booksBuscar;
  }

  getAllBooks(): BooksGeneral[]{
    return books;
  }

  getAllBooks2(): BooksNovelas[]{
    return booksNovela;
  }

  getAllBooks3(): BooksFiccion[]{
    return booksFiccion;
  }

  getBuscar(nombreBook: string): BooksBuscar{
    return booksBuscar.filter(booksBuscar => booksBuscar.nombre === nombreBook)[0];
  }
 getBook(nombreBook: string): BooksGeneral{
   return books.filter(books => books.nombre === nombreBook)[0];
 }

 getBook2(nombreBook: string): BooksNovelas{
  return booksNovela.filter(booksNovela => booksNovela.nombre === nombreBook)[0];
}

getBook3(nombreBook: string): BooksFiccion{
  return booksFiccion.filter(booksFiccion => booksFiccion.nombre === nombreBook)[0];
}

 getBusquedaBooks(termino: string): BooksBuscar []{
   return booksBuscar.filter(booksBuscar => booksBuscar.nombre.toUpperCase().includes(termino.toUpperCase()));
 }

}
