import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { BookComponent } from './pages/book/book.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BooksGeneralComponent } from './pages/booksGeneral/booksGeneral.component';
import { BooksFiccionComponent } from './pages/books-ficcion/books-ficcion.component';
import { BooksNovelaComponent } from './pages/books-novela/books-novela.component';
import { CardNovelasComponent } from './components/card-novelas/card-novelas.component';
import { BookNovelasComponent } from './pages/book-novelas/book-novelas.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { BooksBuscarComponent } from './pages/books-buscar/books-buscar.component';
import { BookBuscarComponent } from './pages/book-buscar/book-buscar.component';
import { CardBuscarComponent } from './components/card-buscar/card-buscar.component';
import { BookFiccionComponent } from './pages/book-ficcion/book-ficcion.component';
import { CardFiccionComponent } from './components/card-ficcion/card-ficcion.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    InicioComponent,
    BusquedaComponent,
    BookComponent,
    BooksGeneralComponent,
    BooksFiccionComponent,
    BooksNovelaComponent,
    FilterPipe,
    CardNovelasComponent,
    BookNovelasComponent,
    SuscripcionComponent,
    PromocionesComponent,
    BooksBuscarComponent,
    BookBuscarComponent,
    CardBuscarComponent,
    BookFiccionComponent,
    CardFiccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
}) 
export class AppModule { }
