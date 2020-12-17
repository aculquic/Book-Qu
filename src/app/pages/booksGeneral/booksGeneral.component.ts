import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksGeneral } from 'src/app/classes/books.interface';

@Component({
  selector: 'app-books',
  templateUrl: './booksGeneral.component.html',
  styleUrls: ['./booksGeneral.component.scss']
})
export class BooksGeneralComponent implements OnInit {
  listabooks: BooksGeneral[];
  constructor(
    private booksService: BooksService,
    private router: Router,
    private activadedRouter: ActivatedRoute

  ) {
  }

  ngOnInit(): void {
    this.listabooks = this.booksService.getAllBooks();
  }

  escucharHijo(nombre: string){
    this.router.navigateByUrl(`/book/${nombre}`);
  }

}
