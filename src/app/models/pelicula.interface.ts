import { DocumentReference } from '@angular/fire/firestore';

export interface  Peliculas {
    id?: string;
    ref?:DocumentReference;
    nombre: string;
    horario: string;
    precio: number;
    imagen: string;

}