import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingConfirmationRoutingModule } from './booking-confirmation-routing.module';
import { BookingConfirmationComponent } from './booking-confirmation.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchResultModule } from '../search-result/search-result.module';
import { ConfirmationFareRulesComponent } from './confirmation-fare-rules/confirmation-fare-rules.component';


@NgModule({
  declarations: [
    BookingConfirmationComponent,
    ConfirmationFareRulesComponent
  ],
  imports: [
    CommonModule,
    BookingConfirmationRoutingModule,
    MaterialModule,
    SharedModule,
    SearchResultModule
  ]
})
export class BookingConfirmationModule { }
