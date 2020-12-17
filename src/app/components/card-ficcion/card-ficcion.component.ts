import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksFiccion } from '../../classes/books.interface';


@Component({
  selector: 'app-card-ficcion',
  templateUrl: './card-ficcion.component.html',
  styleUrls: ['./card-ficcion.component.scss']
})
export class CardFiccionComponent implements OnInit {
@Input() booksFiccion: BooksFiccion;
@Output() respuesta = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  llamarBook(booksFiccion: BooksFiccion){
    this.respuesta.emit(booksFiccion.nombre);
    
  }
}
