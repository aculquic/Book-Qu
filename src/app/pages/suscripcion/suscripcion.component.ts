import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Suscrip } from '../../classes/suscripcion.interface';
import {  AngularFirestore } from '@angular/fire/firestore';
import { SuscripcionService } from '../../services/suscripcion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss']
})
export class SuscripcionComponent implements OnInit {
  idSucripcion: string;
  nombres: string;
  correo: string;
  sucripcion$ = new Observable<Suscrip[]>();
  suscrip: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private suscripcionService: SuscripcionService
    ){
      this.suscrip = new FormGroup({
        nombreCompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(6)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(10)])
        }),
        correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      });
    }
  
  ngOnInit(): void {
  } 

  enviar(nombres: string, correo: string){
    this.nombres = nombres;
    this.correo = correo;

    if(this.nombres && this.correo){
      console.log('nombres',nombres);
      console.log('correo',correo);
      this.suscripcionService.registrar(nombres,correo);
      Swal.fire({
        title:'¡Suscripción Exitosa!',
        text:'Pronto recibirás nuestras mejores ofertas y novedades.',
        icon:'success',
        confirmButtonText:'OK',
        showConfirmButton: true,
      }).then(value =>{
        if(value.isConfirmed){
          this.router.navigateByUrl('/inicio');
        }
      })
    }else{
      Swal.fire({
        text:'Los campos se encuentran vacios',
        icon:'warning'
      });
    }
  };

}
  