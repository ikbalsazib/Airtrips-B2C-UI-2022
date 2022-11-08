import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '../search-result/loader/loader.component';
import { SearchResultModule } from '../search-result/search-result.module';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatIconModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SearchResultModule
  ],
})
export class BookingModule {}
