import { Component, OnInit } from '@angular/core';
import { BooksBuscar } from 'src/app/classes/general.interface';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-buscar',
  templateUrl: './book-buscar.component.html',
  styleUrls: ['./book-buscar.component.scss']
})
export class BookBuscarComponent implements OnInit {
  booksBuscar: BooksBuscar;
  constructor(
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) {
    this.activatedRoute.params.subscribe(
      params => {
        this.booksBuscar = this.booksService.getBuscar(params['nombre'].toString());
        console.log(this.booksBuscar);
      }
    )

   }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigateByUrl('/booksBuscar');
  }
}
