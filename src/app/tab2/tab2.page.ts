import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Order } from '../models/order.interface';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  orders: Order[];

  constructor( private orderService: OrdersService) {}

  ngOnInit(){
    this.getOrder(); 
  }

  getOrder(){
    this.orderService.getAllOrders()
    .subscribe( orders => this.orders = orders);
  }

  

}
