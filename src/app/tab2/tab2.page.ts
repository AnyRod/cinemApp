import { Component, OnInit } from '@angular/core';
import {  Storage } from '@ionic/storage';
import { OrdersService } from '../services/orders.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor( private orderService: OrdersService) {}

  ngOnInit(){
    this.getOrder(); 
  }

  getOrder(){
    this.orderService.getAllOrders()
    .subscribe( order => {
      console.log(order);
    });
  }

  

}
