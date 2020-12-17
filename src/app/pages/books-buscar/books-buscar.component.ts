import { Component, OnInit } from '@angular/core';

import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
import { BooksBuscar } from 'src/app/classes/general.interface';

@Component({
  selector: 'app-books-buscar',
  templateUrl: './books-buscar.component.html',
  styleUrls: ['./books-buscar.component.scss']
})
export class BooksBuscarComponent implements OnInit {
  listabooks: BooksBuscar[];
  constructor(
    private booksService: BooksService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listabooks = this.booksService.getAll();
  }
  escucharHijo(nombre: string){
    this.router.navigateByUrl(`/book-buscar/${nombre}`);
  }
}
