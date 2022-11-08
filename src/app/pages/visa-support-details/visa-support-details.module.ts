import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisaSupportDetailsRoutingModule } from './visa-support-details-routing.module';
import { VisaSupportDetailsComponent } from './visa-support-details.component';


@NgModule({
  declarations: [
    VisaSupportDetailsComponent
  ],
  imports: [
    CommonModule,
    VisaSupportDetailsRoutingModule
  ]
})
export class VisaSupportDetailsModule { }
