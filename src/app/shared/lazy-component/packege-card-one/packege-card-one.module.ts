import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackegeCardOneComponent } from './packege-card-one.component';



@NgModule({
  declarations: [
    PackegeCardOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PackegeCardOneComponent
  ]
})
export class PackegeCardOneModule { }
