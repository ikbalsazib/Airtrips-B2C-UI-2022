import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupOfferComponent } from './popup-offer.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PopupOfferComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class PopupOfferModule { }
