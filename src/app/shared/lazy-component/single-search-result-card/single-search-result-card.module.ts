import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSearchResultCardComponent } from './single-search-result-card.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [SingleSearchResultCardComponent],
  imports: [CommonModule, RouterModule, PipesModule,MatTabsModule],
  exports: [SingleSearchResultCardComponent],
})
export class SingleSearchResultCardModule {}
