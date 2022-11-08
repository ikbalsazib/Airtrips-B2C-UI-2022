import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AirBookingConfirmationComponent } from './air-booking-confirmation/air-booking-confirmation.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { LoaderComponent } from './loader/loader.component';
import { SingleSearchResultCardModule } from 'src/app/shared/lazy-component/single-search-result-card/single-search-result-card.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SingleSearchFlightDetailsModule } from 'src/app/shared/lazy-component/single-search-Flight-Details/single-search-Flight-Details.module';
import {FlightSearchModule} from '../../shared/lazy-component/flight-search/flight-search.module';


@NgModule({
  declarations: [
    SearchResultComponent,
    AirBookingConfirmationComponent,
    LoaderComponent,
  ],
    imports: [
        // BrowserAnimationsModule,
        CommonModule,
        SearchResultRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        SwiperModule,
        SwiperModule,
        MatAutocompleteModule,
        PipesModule,
        SingleSearchResultCardModule,
        SingleSearchFlightDetailsModule,
        NgxSliderModule,
        MatFormFieldModule,
        FlightSearchModule
    ],
  exports: [
    LoaderComponent
  ]
})
export class SearchResultModule {}
