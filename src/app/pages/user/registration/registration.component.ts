import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UiService } from '../../../services/ui.service';
import { User } from '../../../interfaces/user';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../../../services/utils.service';
import { ActivatedRoute } from '@angular/router';
import { BulkSmsService } from '../../../services/bulk-sms.service';
import { MatDialog } from '@angular/material/dialog';
import { PhoneVerificationDialogComponent } from '../../../shared/lazy-component/phone-verification-dialog/phone-verification-dialog.component';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  redirectForm: string = null;
  public dataForm: FormGroup;

  isHiddenPass = true;
  isHiddenConPass = true;

  // OTP
  generatedOtpCode: string;

  // Registration User Data
  registrationData: User;
  redirectFrom: string = null;
  queryParam: any = null;

  constructor(
    public userService: UserService,
    private uiService: UiService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    public utilsService: UtilsService,
    private bulkSmsService: BulkSmsService,
    public dialog: MatDialog,
    private storageService: StorageService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      phoneNo: [null, Validators.required],
      email: [null, [Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      name: [null, Validators.required],
      agree: [true, Validators.required],
    });

    let bookingURL = this.storageService.getDataFromSession('BOOKING_URL');
    if (bookingURL) {
      this.redirectForm = bookingURL;
    }
    console.log('this.redirectForm[REGISTRATION]', this.redirectForm);
    // this.storageService.removeSessionData('BOOKING_URL');
    // GET REDIRECT DATA
    // this.activatedRoute.queryParams.subscribe(param => {
    //   const queryParamString = this.utilsService.queryStringToObject();
    //   this.redirectFrom = queryParamString.redirectFrom;
    //   delete queryParamString.redirectFrom;
    //   if (queryParamString) {
    //     this.queryParam = queryParamString;
    //   }
    // });
  }

  onSubmitForm() {
    if (this.dataForm.invalid) {
      this.dataForm.markAllAsTouched();
      this.uiService.warn('Please complete all the required field');
      return;
    }

    if (this.dataForm.value.password !== this.dataForm.value.confirmPassword) {
      this.uiService.warn('Password and confirm password not matched');
      return;
    }

    if (
      !this.utilsService.checkValidPhone(this.dataForm.value.phoneNo) ||
      this.dataForm.value.phoneNo.length !== 11
    ) {
      this.dataForm.get('phoneNo').setErrors({ invalid: true });
      this.uiService.warn('Please enter a valid 11 digit phone no');
      return;
    }

    if (this.dataForm.value.password.length < 6) {
      this.uiService.warn('Password must be at lest 6 characters!');
      return;
    }

    this.spinner.show();

    this.registrationData = {
      name: this.dataForm.value.name,
      phoneNo: this.dataForm.value.phoneNo,
      email: this.dataForm.value.email,
      password: this.dataForm.value.password,
      birthdate: null,
      gender: this.dataForm.value.gender,
      isPhoneVerified: true,
      registrationType: 'phone',
      isEmailVerified: false,
      hasAccess: true,
      username: this.dataForm.value.phoneNo,
    };

    this.checkAndGetUserByPhone(this.dataForm.value.phoneNo);
  }

  /**
   * HTTP REQ HANDLE
   * checkAndGetUserByPhone
   */

  private checkAndGetUserByPhone(phoneNo: string) {
    this.userService.checkAndGetUserByPhone(phoneNo).subscribe(
      (res) => {
        const status = res.data;
        if (!status) {
          // Create Message Data
          const finalPhoneNo = '88' + this.dataForm.value.phoneNo;
          this.generatedOtpCode = this.utilsService.getRandomOtpCode6();
          const message =
            this.generatedOtpCode +
            ' is your OTP (One-Time Password) for Airtrips. OTP will expire in 5 minutes.';
          // Sent Message
          console.log('generatedOtpCode[Registration]', this.generatedOtpCode);

          this.sendSmsBySslAPi(finalPhoneNo, message);
        } else {
          this.spinner.hide();
          this.uiService.warn('This phone no is already registered');
          this.dataForm.get('phoneNo').setErrors({ invalid: true });
          this.dataForm.get('phoneNo').markAsTouched({ onlySelf: true });
        }
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  /**
   * BULK SMS
   * sendSmsBySslAPi
   */
  private sendSmsBySslAPi(phoneNo: string, message: string) {
    this.bulkSmsService.sentSingleBulkSms(phoneNo, message).subscribe(
      (res) => {
        this.spinner.hide();
        if (res.success) {
          this.openComponentDialog();
        } else {
          this.spinner.hide();
          this.uiService.wrong('Something went wrong! Please try again.');
        }
      },
      (error) => {
        this.uiService.wrong('Something went wrong! Please try again.');
        console.log(error);
        this.spinner.hide();
      }
    );
  }

  /**
   *  COMPONENT DIALOG
   * openComponentDialog
   */
  public openComponentDialog() {
    const mData = {
      otpCode: this.generatedOtpCode,
      phoneNo: this.dataForm.value.phoneNo,
      registrationData: this.registrationData,
      redirectForm: this.redirectForm,
    };
    const dialogRef = this.dialog.open(PhoneVerificationDialogComponent, {
      data: mData,
      panelClass: ['theme-dialog', 'dialog-no-radius', 'small-padding-sm'],
      width: '95%',
      maxWidth: '400px',
      autoFocus: false,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult.regProgress) {
        this.spinner.show();
      }
    });
  }

  ngOnDestroy() {}
}
