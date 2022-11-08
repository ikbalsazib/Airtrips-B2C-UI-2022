import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FareRulesComponent } from './fare-rules.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    FareRulesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FareRulesModule { }
