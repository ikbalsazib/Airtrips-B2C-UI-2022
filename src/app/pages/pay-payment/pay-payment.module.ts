import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayPaymentRoutingModule } from './pay-payment-routing.module';
import { PayPaymentComponent } from './pay-payment.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PayPaymentComponent
  ],
  imports: [
    CommonModule,
    PayPaymentRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PayPaymentModule { }
