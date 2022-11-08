import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisaSupportDetailsComponent } from './visa-support-details.component';

const routes: Routes = [
  {
    path: '',
    component: VisaSupportDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisaSupportDetailsRoutingModule { }
