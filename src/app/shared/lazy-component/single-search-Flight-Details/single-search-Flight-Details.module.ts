import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SingleSearchResultCardComponent } from './single-search-result-card.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import {MatTabsModule} from '@angular/material/tabs';
import { SingleSearchFlightDetailsComponent } from './single-search-Flight-Details.component';

@NgModule({
  declarations: [SingleSearchFlightDetailsComponent],
  imports: [CommonModule, RouterModule, PipesModule,MatTabsModule],
  exports: [SingleSearchFlightDetailsComponent],
})
export class SingleSearchFlightDetailsModule {}
