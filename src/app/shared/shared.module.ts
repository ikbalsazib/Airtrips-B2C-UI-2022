import {FlexLayoutModule} from '@angular/flex-layout';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackbarNotificationComponent} from './component/ui/snackbar-notification/snackbar-notification.component';
import {MessageDialogComponent} from './component/ui/message-dialog/message-dialog.component';
import {ConfirmDialogComponent} from './component/ui/confirm-dialog/confirm-dialog.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FareRulesModule} from './dialog-view/fare-rules/fare-rules.module';
import {PopupOfferModule} from './lazy-component/popup-offer/popup-offer.module';
import {SwiperModule} from 'swiper/angular';
import {PackegeCardModule} from './lazy-component/packege-card/packege-card.module';
import {Ng5SliderModule} from 'ng5-slider';
import {PackegeCardOneModule} from './lazy-component/packege-card-one/packege-card-one.module';
import {TravelCardModule} from './lazy-component/travel-card/travel-card.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {PipesModule} from './pipes/pipes.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ImageCropComponent} from './dialog-view/image-crop/image-crop.component';
import {ImageCropperModule} from 'ngx-image-cropper';


@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FareRulesModule,
    FlexLayoutModule,
    PopupOfferModule,
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
    ImageCropperModule,
  ],
  exports: [
    FlexLayoutModule,
    SnackbarNotificationComponent,
    MessageDialogComponent,
    NgxSpinnerModule,
    FareRulesModule,
    PopupOfferModule,
    ImageCropComponent
  ],
  declarations: [
    SnackbarNotificationComponent,
    MessageDialogComponent,
    ConfirmDialogComponent,
    ImageCropComponent
  ],
  providers: [],
  entryComponents: []
})
export class SharedModule {
}
