import {CommingSoonModule} from './../shared/component/comming-soon/comming-soon.module';
import {MaterialModule} from './../material/material.module';
import {FooterModule} from './../shared/component/footer/footer.module';
import {HeaderModule} from './../core/menu/header/header.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {SwiperModule} from 'swiper/angular';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    FooterModule,
    MaterialModule,
    CommingSoonModule,
    SwiperModule
  ]
})
export class PagesModule {
}
