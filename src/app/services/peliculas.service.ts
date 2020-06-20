import { Injectable } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
import { Peliculas } from '../models/pelicula.interface';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {s

  constructor( private db: AngularFirestore ) { }


  getPeliculas() {
    let peliculas:Array<Peliculas> = new Array<Peliculas>();
    this.db.collection<Peliculas>('peliculas').get().subscribe( (respuesta) => {
      respuesta.forEach((contenido) => {
        let pelicula = contenido.data() as Peliculas;
        pelicula.id = contenido.id;
        pelicula.ref = contenido.ref;
        peliculas.push(pelicula);
      });
    });
    return peliculas;
  }
  
}
