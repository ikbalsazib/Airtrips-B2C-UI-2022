import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UtilsService} from '../../../services/utils.service';
// import {PaymentSslService} from '../../../../services/payment-ssl.service';
import {UiService} from '../../../services/ui.service';
// import {SslInit} from '../../../../interfaces/ssl-init';
// import {SslInitResponse} from '../../../../interfaces/ssl-init-response';
import {User} from '../../../interfaces/user';
// import {LaunchTrip} from '../../../../interfaces/launch-trip';
import {ReloadService} from '../../../services/reload.service';
import {environment} from '../../../../environments/environment';
import {DOCUMENT} from '@angular/common';
import {BulkSmsService} from '../../../services/bulk-sms.service';
import {StorageService} from '../../../services/storage.service';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-air-booking-confirmation',
  templateUrl: './air-booking-confirmation.component.html',
  styleUrls: ['./air-booking-confirmation.component.scss']
})
export class AirBookingConfirmationComponent implements OnInit {
  user: User = null;
  dataForm: FormGroup;
  couponData: any = null;
  @ViewChild('formRef') formRef: NgForm;
  discount = 0;
  constructor(
    public dialogRef: MatDialogRef<AirBookingConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private utilsService: UtilsService,
    private uiService: UiService,
    private reloadService: ReloadService,
    private bulkSmsService: BulkSmsService,
    private storageService: StorageService,
    private userService: UserService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    if (this.data) {
      console.log('Data', this.data);

      // this.selectedSeatData = this.data.selectedSeats;
      this.user = this.data.user;
      // this.trip = this.data.trip;
      // this.bookData = this.data.ticketData.bookData;
    }

    this.dataForm = this.fb.group({
      couponCode: [null, Validators.required]
    });
  }
  /**
   * COUPON LOGIC
   */

   onCouponApply() {
    if (this.dataForm.invalid) {
      return;
    }
    // this.checkCoupon();
  }

  removeCoupon() {
    this.couponData = null;
    this.discount = 0;
    this.formRef.resetForm();
  }
  onConfirmBooking() {
    this.dialogRef.close();

  }

    /**
   * HTTP REQ
   */


      /**
   * BULK SMS
   */
  private sentSingleSms(phoneNo: string, message: string) {
    this.bulkSmsService.sentSingleBulkSms(phoneNo, message)
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
  }
}
