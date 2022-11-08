import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from '../../../services/ui.service';
import { UtilsService } from '../../../services/utils.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  redirectForm: string = null;
  public dataForm: FormGroup;

  constructor(
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private uiService: UiService,
    public router: Router,
    private storageService: StorageService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      console.log('param [Login]', param);
      this.redirectForm = param['redirectFrom'];
      let bookingURL = this.storageService.getDataFromSession('BOOKING_URL');
      if (bookingURL) {
        this.redirectForm = bookingURL;
      }
      console.log('this.redirectForm[Login]', this.redirectForm);
      // this.storageService.removeSessionData('BOOKING_URL');
    });

    this.dataForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
    console.log('R URL [Login]', this.router.url);
  }

  onLoginFormSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required field');
      return;
    }

    if (
      !this.utilsService.checkValidPhone(this.dataForm.value.username) ||
      this.dataForm.value.username.length !== 11
    ) {
      this.dataForm.get('username').setErrors({ invalid: true });
      this.uiService.warn('Please enter a valid 11 digit phone no');
      return;
    }

    if (this.dataForm.value.password.length < 6) {
      this.uiService.warn('Password must be at lest 6 characters!');
      return;
    }

    this.spinner.show();
    this.userLogin(this.dataForm.value);
  }

  /**
   * HTTP REQ HANDLE
   */

  private userLogin(data: any) {
    this.userService.userLogin(data, this.redirectForm);
  }

  /**
   * Form Validations
   */
  get username() {
    return this.dataForm.get('username');
  }

  get password() {
    return this.dataForm.get('password');
  }
}
