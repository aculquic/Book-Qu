import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksGeneral } from 'src/app/classes/books.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() books: BooksGeneral;
  @Output() respuesta = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  llamarBook(books: BooksGeneral){

    this.respuesta.emit(books.nombre);

  }


}
