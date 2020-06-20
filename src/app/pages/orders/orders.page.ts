import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Peliculas } from '../../models/pelicula.interface';
import { PeliculasService } from '../../services/peliculas.service';
import { Storage } from '@ionic/storage';






@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  pelicula :Array<any> = new Array<any>(); //Array<any> = new Array<any>();

  productselected: Array<any> = new Array<any>();
  
  orders: Array<any> = new Array<any>();
  numTickect: number;

  arregloArticulos: Array<any>;
   
  total =0;



  constructor( 
    private orderService: OrdersService,
    private peliculaService: PeliculasService,
    private storage: Storage
    ) { 

    }

  ngOnInit() {
    this.numTickect= 1;
    this.pelicula = this.peliculaService.getPeliculas();
    this.initStorage();
    //calculo
    

    //let peli:Array<Peliculas> = new Array<Peliculas>();
    console.log(this.pelicula);
  
    
  }

  initStorage(){
    this.storage.get('order').then(value => {
      if(value){
        this.productselected = JSON.parse(value);
        return;
      }      
      
    })
  }

  totalProducts(qty, precio){
    let total = 0;
    this.productselected.forEach(productItem => {
      total += productItem.price * productItem.quantity;
    });
    
    this.total = total + (qty*precio);
    this.numTickect = qty;
  }

  saveOrder(){
    this.orderService.addOrder({

      entrada: 0,
      "metodoPago": 'Paypal',
      pelicula: 'Avengers End-Game',
      snack: { 
        cantidad: 0, precio: this.total, snack: ''
      }
      
      
      
    });
  }

  tenerPelicula(){
    let peli: any
    this.pelicula.forEach(movie => {
      peli = {
        horario: movie.horario,
        imagen: movie.imagen,
        nombre: movie.nombre,
        precio: movie.precio,
        producto: movie.snack
      };
    });
    return peli;
  }
 
  
  
  
}
