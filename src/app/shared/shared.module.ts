import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { IonicModule } from '@ionic/angular';
import { StoreComponent } from './modals/store/store.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


const COMPONENTS = [
  CardComponent
];
const MODALS = [ 
  StoreComponent
];
@NgModule({
  declarations: [
    ...COMPONENTS,
    ...MODALS
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    ...COMPONENTS,
    ...MODALS

  ]
})
export class SharedModule { }
