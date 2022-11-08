import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search.component';
import {SwiperModule} from 'swiper/angular';
import {MaterialModule} from '../../../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PackegeCardModule} from '../packege-card/packege-card.module';
import {Ng5SliderModule} from 'ng5-slider';
import {PackegeCardOneModule} from '../packege-card-one/packege-card-one.module';
import {TravelCardModule} from '../travel-card/travel-card.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {PipesModule} from '../../pipes/pipes.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    FlightSearchComponent,
  ],
  exports: [
    FlightSearchComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MaterialModule,
    ReactiveFormsModule,
    PackegeCardModule,
    Ng5SliderModule,
    PackegeCardOneModule,
    TravelCardModule,
    MatDialogModule,
    MatAutocompleteModule,
    PipesModule,
    MatDatepickerModule,
  ]
})
export class FlightSearchModule { }
