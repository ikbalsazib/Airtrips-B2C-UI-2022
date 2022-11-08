import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from './account.component';
import {MaterialModule} from '../../../material/material.module';
import {SharedModule} from '../../../shared/shared.module';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {OrderListComponent} from './order-list/order-list.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {EditBasicInfoModule} from '../../../shared/dialog-view/edit-basic-info/edit-basic-info.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderDetailsComponent} from './order-list/order-details/order-details.component';
// import { NgxPrintModule } from 'ngx-print';
// import { PrintInvoiceComponent } from './order-list/print-invoice/print-invoice.component';
import {MyBookingComponent} from './my-booking/my-booking.component';
import {FormsModule} from '@angular/forms';
import {ImageCropComponent} from './image-crop/image-crop.component';
import {ImageCropperModule} from 'ngx-image-cropper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AccountComponent,
    BasicInfoComponent,
    OrderListComponent,
    TransactionsComponent,
    OrderDetailsComponent,
    // PrintInvoiceComponent,
    MyBookingComponent,
    ImageCropComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    SharedModule,
    EditBasicInfoModule,
    NgxPaginationModule,
    // NgxPrintModule,
    FormsModule,
    ImageCropperModule,
    MatProgressSpinnerModule,
  ]
})
export class AccountModule {
}
