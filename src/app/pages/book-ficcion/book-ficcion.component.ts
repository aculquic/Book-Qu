import { Component, OnInit } from '@angular/core';
import { BooksFiccion } from 'src/app/classes/books.interface';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-ficcion',
  templateUrl: './book-ficcion.component.html',
  styleUrls: ['./book-ficcion.component.scss']
})
export class BookFiccionComponent implements OnInit {
booksFiccion: BooksFiccion;

  constructor(
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.activatedRoute.params.subscribe(
      params => {
        this.booksFiccion = this.booksService.getBook3(params['nombre'].toString());
      }
    )

  }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigateByUrl('/booksFiccion');
  }
}
