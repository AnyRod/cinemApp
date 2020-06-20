import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StoreComponent } from '../shared/modals/store/store.component';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  ngOnInit(){
    
  }

  constructor( 
    private modal: ModalController
    ) {}

  async displayModal(){
    const modal = await this.modal.create({
      component: StoreComponent,
      cssClass: 'shortModal'
    });
    await modal.present();
  }
}


