import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisaSupportRoutingModule } from './visa-support-routing.module';
import { VisaSupportComponent } from './visa-support.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng5SliderModule } from 'ng5-slider';
import { MaterialModule } from 'src/app/material/material.module';
import { PackegeCardOneModule } from 'src/app/shared/lazy-component/packege-card-one/packege-card-one.module';
import { PackegeCardModule } from 'src/app/shared/lazy-component/packege-card/packege-card.module';
import { TravelCardModule } from 'src/app/shared/lazy-component/travel-card/travel-card.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    VisaSupportComponent
  ],
  imports: [
    CommonModule,
    VisaSupportRoutingModule,
    SwiperModule,
    MaterialModule,
    ReactiveFormsModule,
    PackegeCardModule,
    Ng5SliderModule,
    PackegeCardOneModule,
    TravelCardModule,
    MatDialogModule,
    MatAutocompleteModule,
    PipesModule
  ]
})
export class VisaSupportModule { }
