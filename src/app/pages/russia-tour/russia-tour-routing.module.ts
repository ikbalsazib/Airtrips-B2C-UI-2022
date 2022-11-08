import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RussiaTourComponent } from './russia-tour.component';

const routes: Routes = [
  {
    path:'',
    component: RussiaTourComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RussiaTourRoutingModule { }
