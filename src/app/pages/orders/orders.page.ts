import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Peliculas } from '../../models/pelicula.interface';
import { PeliculasService } from '../../services/peliculas.service';





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




  constructor( 
    private orderService: OrdersService,
    private peliculaService: PeliculasService) { 

    }

  ngOnInit() {
    this.numTickect= 1;
    this.pelicula = this.peliculaService.getPeliculas();

    //let peli:Array<Peliculas> = new Array<Peliculas>();
    console.log(this.pelicula);
    // this.pelicula.forEach( movie =>{
    //   console.log(movie);
    //   //  peli.push(movie);
    // })
    
  //   if(localStorage.getItem('productItem')){
  //     this.productselected = JSON.parse(localStorage.getItem('productItem'));
  //  }

   
    
  }

  totalProducts(){
    let total = 0;
    this.productselected.forEach(productItem => {
      total += productItem.price * productItem.quantity;
    });
    return total;
  }
 /* verPelicula(){

    let pelicula: Array<any> = new Array<any>();
    this.orderService.getPeliculas()
    .subscribe( resp => {
      pelicula.push(resp );
      
    });
    return pelicula[0];
  }*/
  saveOrder(){
    


    localStorage.setItem('pelicula',JSON.stringify(this.pelicula));
    //localStorage.setItem('orden',JSON.stringify(this.productselected));
    //console.log(myOrder);
  }

  
}
