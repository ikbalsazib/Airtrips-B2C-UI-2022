import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RussiaTourRoutingModule } from './russia-tour-routing.module';
import { RussiaTourComponent } from './russia-tour.component';


@NgModule({
  declarations: [
    RussiaTourComponent
  ],
  imports: [
    CommonModule,
    RussiaTourRoutingModule
  ]
})
export class RussiaTourModule { }
