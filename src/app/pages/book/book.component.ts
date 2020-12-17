import { Component, OnInit, TemplateRef } from '@angular/core';
import { BooksGeneral } from 'src/app/classes/books.interface';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
books: BooksGeneral;
  constructor(
private booksService: BooksService,
private activatedRoute: ActivatedRoute,
private router: Router,
  ) {
 this.activatedRoute.params.subscribe(
   params => {
     this.books = this.booksService.getBook(params['nombre'].toString());
   }
 )

  }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigateByUrl('/booksGeneral');
  }

}
