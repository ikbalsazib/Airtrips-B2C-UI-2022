import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AirNameSplitPipe} from './name-split.pipe';
import {SafeHtmlCustomPipe} from './safe-html.pipe';
import {AirImagePipe} from './airImage.pipe';
import {ServiceChargePipe} from './service-charge.pipe';
import {SortPipe} from './sort.pipe';

@NgModule({
  declarations: [
    AirNameSplitPipe,
    SafeHtmlCustomPipe,
    AirImagePipe,
    ServiceChargePipe,
    SortPipe
  ],
  imports: [CommonModule],
  exports: [
    AirNameSplitPipe,
    SafeHtmlCustomPipe,
    AirImagePipe,
    ServiceChargePipe,
    SortPipe
  ],
})
export class PipesModule {
}
