import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Products } from '../../../models/product.interface';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';



const PRODUCTS = [{"name":"Palomitas","price":900},{"name":"Hot Dog","price":700},{"name":"Combo Doble","price":1100},{"name":"Nachos con queso","price":1600},{"name":"Refresco Grande","price":1500},{"name":"Refresco Mediano","price":1600},{"name":"Refresco pequeño","price":1600}]

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {

  public productSelected = [];
  public form =  this.fb.group({
    product: ['Hot Dog', Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]],
    price: [null] 
  });

  public products = PRODUCTS;

  constructor(
    private modal: ModalController,
    private fb: FormBuilder,
    private storage: Storage,
    private router: Router
    ) { }

  ngOnInit() {
  }

  addProduct(){
    const product = {...this.form.value} as Products;
    const productExist = this.productSelected.findIndex(el => el.product === product.product);
    const {price} = this.products.find(el => el.name === product.product);

    product.price = (price/10) *product.quantity;

    if(productExist !== -1) {
      const arrRef = this.productSelected[productExist];
      arrRef.quantity += product.quantity;
      arrRef.price += product.price;
    } else {
      this.productSelected.push(product);
     // localStorage.setItem('productItem', JSON.stringify(this.productSelected));

    }
       
  }
  accept(){
    this.storage.set('order',JSON.stringify(this.productSelected));
    this.modal.dismiss();

  }


  removeProduct(index) {
    
    if(this.productSelected[index].quantity > 1) {
      
      const product = {...this.productSelected[index]};
      const originalPrice = product.price/product.quantity;
      product.quantity -= 1;
      product.price -= originalPrice;

      this.productSelected[index] = product;
    } else {
      this.productSelected.splice(index, 1)
    }

  }

  close() {
    this.modal.dismiss();
  }

  get product(){
    return this.form.get('product');
  }

  get quantity(){
    return this.form.get('quantity');
  }

  get price(){
    return this.form.get('price');
  }

}
