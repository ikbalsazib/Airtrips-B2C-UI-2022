import {TravelCardModule} from './../../shared/lazy-component/travel-card/travel-card.module';
import {PackegeCardOneModule} from './../../shared/lazy-component/packege-card-one/packege-card-one.module';
import {PackegeCardModule} from './../../shared/lazy-component/packege-card/packege-card.module';
import {MaterialModule} from './../../material/material.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Ng5SliderModule} from 'ng5-slider';
import {MatDialogModule} from '@angular/material/dialog';
import {NotFoundComponent} from './not-found/not-found.component';
import {PipesModule} from 'src/app/shared/pipes/pipes.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {SwiperModule} from 'swiper/angular';
import {FlightSearchModule} from '../../shared/lazy-component/flight-search/flight-search.module';

@NgModule({

  declarations: [
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
    FlightSearchModule
  ],
})
export class HomeModule {
}
