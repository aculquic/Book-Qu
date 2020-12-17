import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksNovelas } from 'src/app/classes/books.interface';

@Component({
  selector: 'app-book-novelas',
  templateUrl: './book-novelas.component.html',
  styleUrls: ['./book-novelas.component.scss']
})
export class BookNovelasComponent implements OnInit {
booksNovela: BooksNovelas;

  constructor(
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.activatedRoute.params.subscribe(
      params => {
        this.booksNovela = this.booksService.getBook2(params['nombre'].toString());
      }
    )

  }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigateByUrl('/booksNovela');
  }
}
