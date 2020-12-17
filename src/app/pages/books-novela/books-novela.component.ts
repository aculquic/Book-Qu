import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksNovelas} from 'src/app/classes/books.interface';


@Component({
  selector: 'app-books-novela',
  templateUrl: './books-novela.component.html',
  styleUrls: ['./books-novela.component.scss']
})
export class BooksNovelaComponent implements OnInit {
   listabooks: BooksNovelas[];

  constructor(
    private booksService: BooksService,
    private router: Router,
    private activadedRouter: ActivatedRoute

  ) { }

  ngOnInit(): void {
     this.listabooks = this.booksService.getAllBooks2();
  }

  escucharHijo(nombre: string){
    this.router.navigateByUrl(`/book-novelas/${nombre}`);
  }


}
