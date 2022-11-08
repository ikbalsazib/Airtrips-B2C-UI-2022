import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackegeCardComponent } from './packege-card.component';



@NgModule({
  declarations: [
    PackegeCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PackegeCardComponent
  ]
})
export class PackegeCardModule { }
