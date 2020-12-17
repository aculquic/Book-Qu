import { Component, DoCheck, OnInit, Output } from '@angular/core';
import { BooksBuscar } from 'src/app/classes/general.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  listabooks: BooksBuscar[];
  busqueda = 0;
  termino: any[];

  constructor(
    private router: Router,
    private activadedRoute: ActivatedRoute,
    private booksService: BooksService,

  ) { 
   this.obtenerLibros();
  }
 
  ngOnInit(): void {
   
  }

  obtenerLibros(){
    this.activadedRoute.params.subscribe(
      params => {
        this.listabooks = this.booksService.getBusquedaBooks(params['termino'].toString());
      },);

if(this.listabooks.length>0){

}else{
  Swal.fire({
    text:'La búsqueda no ha devuelto ningún resultado.',
    icon:'warning',
    confirmButtonText:'OK',
    showConfirmButton: true,
  }).then(value =>{
    if(value.isConfirmed){
      this.router.navigateByUrl('/inicio');
    }
  });
}
  }
  escucharHijo(nombre: string){
  this.router.navigate(['book-buscar', nombre]); }
  };


