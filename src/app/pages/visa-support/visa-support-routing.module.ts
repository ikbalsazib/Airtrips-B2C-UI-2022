import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisaSupportComponent } from './visa-support.component';

const routes: Routes = [
  {
    path:'',
    component: VisaSupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisaSupportRoutingModule { }
