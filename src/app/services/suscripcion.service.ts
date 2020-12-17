import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Suscrip } from '../classes/suscripcion.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  idSucripcion: '123';
  sucripcion: Suscrip[] = [];
  constructor(
    private fireStore: AngularFirestore) { 

    }

    registrar(nombres: string, correo: string){
      const suscripNuevo: Suscrip ={
        nombres: nombres,
        correo: correo,
       
      };
      this.fireStore.collection('123')
      .add(suscripNuevo)
      .then(res=>{
      });
    }

}
