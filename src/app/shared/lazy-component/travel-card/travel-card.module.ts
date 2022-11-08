import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelCardComponent } from './travel-card.component';



@NgModule({
  declarations: [
    TravelCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TravelCardComponent
  ]
})
export class TravelCardModule { }
