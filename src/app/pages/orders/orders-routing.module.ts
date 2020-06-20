import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { OrdersPage } from './orders.page';
import { AccessGuard } from '../../guards/access.guard';

const routes: Routes = [
  {
    path: '',
    component: OrdersPage, canActivate: [AccessGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPageRoutingModule {}
