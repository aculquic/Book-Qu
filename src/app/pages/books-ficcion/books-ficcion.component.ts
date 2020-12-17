import { Component, OnInit } from '@angular/core';
import { BooksFiccion } from '../../classes/books.interface';
import { BooksService } from 'src/app/services/books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-ficcion',
  templateUrl: './books-ficcion.component.html',
  styleUrls: ['./books-ficcion.component.scss']
})
export class BooksFiccionComponent implements OnInit {
  listabooks: BooksFiccion[];
  constructor(
    private booksService: BooksService,
    private router: Router,
    private activadedRouter: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.listabooks = this.booksService.getAllBooks3();
  }
  escucharHijo(nombre: string){
    this.router.navigateByUrl(`/book-ficcion/${nombre}`);
  }

}
