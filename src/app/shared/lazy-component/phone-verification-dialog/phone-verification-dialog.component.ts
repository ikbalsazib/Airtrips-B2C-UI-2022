import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from '../../../services/ui.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BulkSmsService } from '../../../services/bulk-sms.service';
import { UtilsService } from '../../../services/utils.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-phone-verification-dialog',
  templateUrl: './phone-verification-dialog.component.html',
  styleUrls: ['./phone-verification-dialog.component.scss'],
})
export class PhoneVerificationDialogComponent implements OnInit {

  constructor(

  ) {}

  ngOnInit(): void {

  }


}
