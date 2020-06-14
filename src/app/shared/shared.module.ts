import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { IonicModule } from '@ionic/angular';



const COMPONENTS = [
  CardComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ...COMPONENTS

  ]
})
export class SharedModule { }
