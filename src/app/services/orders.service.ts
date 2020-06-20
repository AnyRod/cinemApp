import { Injectable } from '@angular/core';
/*import { Peliculas } from '../models/pelicula.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';*/
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Orders } from '../models/orders';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../models/order.interface';




@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  orderCollection: AngularFirestoreCollection<Order>;
  orders: Observable<Order[]>; 
  order: Observable<Order>;
 

  constructor( private db: AngularFirestore ) { 
    this.orderCollection =  this.db.collection('orders', ref => ref);
  }

  addOrder(order: Order){
    this.orderCollection.add(order);
  }

  getAllOrders():Observable<any[]>{
    this.orders = this.orderCollection.snapshotChanges().pipe(
      map( changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Order;
          data.id = action.payload.doc.id;
          return data;
        });
      })
   );
   return this.orders;

  }
}


