import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BooksBuscar } from 'src/app/classes/general.interface';
import { booksBuscar } from '../../config/general';


@Component({
  selector: 'app-card-buscar',
  templateUrl: './card-buscar.component.html',
  styleUrls: ['./card-buscar.component.scss']
})
export class CardBuscarComponent implements OnInit {
  @Input() booksBuscar: BooksBuscar;
  @Output() respuesta = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  llamarBook(booksBuscar: BooksBuscar){
    if(booksBuscar){
      this.respuesta.emit(booksBuscar.nombre);
      console.log(this.respuesta);
      
    }else{
      alert('error de card buscar')
    }

  }
}
