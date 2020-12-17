import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { BookComponent } from './pages/book/book.component';
import { BooksNovelaComponent } from './pages/books-novela/books-novela.component';
import { BooksGeneralComponent } from './pages/booksGeneral/booksGeneral.component';
import { BookNovelasComponent } from './pages/book-novelas/book-novelas.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { BookFiccionComponent } from './pages/book-ficcion/book-ficcion.component';
import { BooksFiccionComponent } from './pages/books-ficcion/books-ficcion.component';
import { BookBuscarComponent } from './pages/book-buscar/book-buscar.component';
import { BooksBuscarComponent } from './pages/books-buscar/books-buscar.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},

  {path: 'booksBuscar', component: BooksBuscarComponent },
  {path: 'booksGeneral', component: BooksGeneralComponent },
  {path: 'booksNovela', component: BooksNovelaComponent },
  {path: 'booksFiccion', component: BooksFiccionComponent },
  
  {path: 'book/:nombre', component: BookComponent},
  {path: 'book-novelas/:nombre', component: BookNovelasComponent},
  {path: 'book-ficcion/:nombre', component: BookFiccionComponent},
  {path: 'book-buscar/:nombre', component: BookBuscarComponent},
  {path: 'busqueda/:termino', component: BusquedaComponent},
  {path: 'suscripcion', component: SuscripcionComponent},
  {path: 'promociones', component: PromocionesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
