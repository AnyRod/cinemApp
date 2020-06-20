import { Injectable } from '@angular/core';
/*import { Peliculas } from '../models/pelicula.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';*/
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
import { Orders } from '../models/orders';




@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private url = 'https://movieapp-7e0c3.firebaseio.com';

  constructor( private db: AngularFirestore ) { }

  getPeliculas(){}

 /* getPeliculas(){
      return  this.http.get(`${this.url}/peliculas.json`)
      .pipe(
        map( this.crearArreglo)
      );
  }
  private crearArreglo( peliculasobj: Object){
    const peliculas: Peliculas[] = [];

        Object.keys( peliculasobj ).forEach( key => {
        const pelicula: Peliculas = peliculasobj[key];
        pelicula.id =key;
        peliculas.push( pelicula );
    })
    if(peliculasobj === null){ return[]; }
    return peliculas;

  }*/
}


