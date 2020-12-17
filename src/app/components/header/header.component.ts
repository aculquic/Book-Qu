import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BooksBuscar } from 'src/app/classes/general.interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  listabooks: BooksBuscar[];
  @ViewChild('busqueda')busqueda: ElementRef;
  termino: string="";

  constructor(
    private router: Router

  ) {

  }
  ngOnInit(): void {
  }

    buscar(termino: string){ 
      this.termino = termino;
     this.busqueda.nativeElement.value='';

      console.log('termino',termino);

     if(this.termino){
      this.router.navigate(['busqueda' , termino ]);
      this.termino='';
     }else{
      Swal.fire({
        icon:'warning',
       title: 'Ingrese articulo a buscar.'
      })
     }
      
    };

}

