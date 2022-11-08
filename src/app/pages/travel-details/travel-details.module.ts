import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelDetailsRoutingModule } from './travel-details-routing.module';
import { TravelDetailsComponent } from './travel-details.component';


@NgModule({
  declarations: [
    TravelDetailsComponent
  ],
  imports: [
    CommonModule,
    TravelDetailsRoutingModule
  ]
})
export class TravelDetailsModule { }
