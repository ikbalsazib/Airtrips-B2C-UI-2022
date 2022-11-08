import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgnoreWheelDirective } from './ignore-wheel.directive';
import {ScrollToBottomDirective} from './scroll-to-bottom.directive';



@NgModule({
  declarations: [
    IgnoreWheelDirective,
    ScrollToBottomDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IgnoreWheelDirective,
    ScrollToBottomDirective
  ]
})
export class DirectivesModule { }
