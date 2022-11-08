import { TravelCardModule } from './../../shared/lazy-component/travel-card/travel-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTravelRoutingModule } from './all-travel-routing.module';
import { AllTravelComponent } from './all-travel.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AllTravelComponent
  ],
  imports: [
    CommonModule,
    AllTravelRoutingModule,
    TravelCardModule,
    NgxPaginationModule
  ]
})
export class AllTravelModule { }
