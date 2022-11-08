import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailsRoutingModule } from './country-details-routing.module';
import { CountryDetailsComponent } from './country-details.component';
import { PipesModule } from '../../shared/pipes/pipes.module';


@NgModule({
  declarations: [
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule,
    PipesModule
  ]
})
export class CountryDetailsModule { }
