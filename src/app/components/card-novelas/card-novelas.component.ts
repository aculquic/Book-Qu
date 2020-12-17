import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksNovelas } from 'src/app/classes/books.interface';

@Component({
  selector: 'app-card-novelas',
  templateUrl: './card-novelas.component.html',
  styleUrls: ['./card-novelas.component.scss']
})
export class CardNovelasComponent implements OnInit {
  @Input() booksNovela: BooksNovelas;
  @Output() respuesta = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  llamarBook(booksNovela: BooksNovelas){
    this.respuesta.emit(booksNovela.nombre);
    
  }
}
