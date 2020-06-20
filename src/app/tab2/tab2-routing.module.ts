import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { AccessGuard } from '../guards/access.guard';


const routes: Routes = [
  {
    path: '',
    component: Tab2Page, canActivate: [AccessGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
