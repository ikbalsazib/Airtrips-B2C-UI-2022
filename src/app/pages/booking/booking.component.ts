import { UiService } from 'src/app/services/ui.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs/internal/Subscription';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  AirBook,
  AirBookQueryData,
  AirRules,
  AirRulesQueryData,
  Result,
  Segments,
  TripInfo,
  TripQueryData,
} from 'src/app/interfaces/trip-info';
import { TripService } from 'src/app/services/trip.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { UtilsService } from 'src/app/services/utils.service';
import { FareRulesComponent } from 'src/app/shared/dialog-view/fare-rules/fare-rules.component';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit, OnDestroy {
  //Subscription
  private subAcRoute: Subscription;
  private subAirPriceRoute: Subscription;
  private subAirRulesRoute: Subscription;
  private subAddPreBookRoute: Subscription;
  private subAirBookRoute: Subscription;


  // Passenger Data Form Multi
  dataForm: FormGroup;

  //loader
  loader: boolean = false;
  loaderAirData: TripQueryData;

  // DUMMY DATA
  genders: any[] = [
    { viewValue: 'Male', value: 'Male' },
    { viewValue: 'Female', value: 'Female' },
    { viewValue: 'Others', value: 'Others' },
  ];
  adultTitles: any[] = [
    { viewValue: 'Mr', value: 'Mr' },
    { viewValue: 'Ms', value: 'Ms' },
    { viewValue: 'Mrs', value: 'Mrs' },
  ];
  childTitles: any[] = [
    { viewValue: 'Mstr', value: 'Mstr' },
    { viewValue: 'Miss', value: 'Miss' },
  ];
  panelOpenState = false;

  // Adult birthdate Validation
  maxAdultDate: any;

  // Child birthdate Validation
  minChildDate: any;
  maxChildDate: any;

  // Infant Birthdate Validation
  minInfantDate: any;
  maxInfantDate: any;

  // Book and Hold Button
  isDisabled: boolean = false;

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    // private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private router: Router,
    private tripService: TripService,
    private utilsService: UtilsService,
    private uiService: UiService,
    private userDataService: UserDataService
  ) {

  }



  ngOnInit(): void {
    this.initForms();

  }

  initForms() {
    // Form for multi city
    this.dataForm = new FormGroup({
      adult: new FormArray([]),
      child: new FormArray([]),
      infant: new FormArray([]),
      emailMulti: new FormControl(''),
      travelersMulti: new FormControl(false),
      phoneMulti: new FormControl(''),
      smsMulti: new FormControl(false),
      readMulti: new FormControl(false),
      termsMulti: new FormControl(true, [
        (control) => {
          return !control.value ? { required: true } : null;
        },
      ]),
    });
  }

  /**
   * onSubmit()
   */
  onSubmit(){
    console.log(this.dataForm.value)
  }
  /**
   * Passenger Form Submit
   */
  get adult(): FormArray {
    return this.dataForm.get('adult') as FormArray;
  }
  get child(): FormArray {
    return this.dataForm.get('child') as FormArray;
  }
  get infant(): FormArray {
    return this.dataForm.get('infant') as FormArray;
  }

  // Air Rules Dialogue
  openDialog() {
    const dialogRef = this.dialog.open(FareRulesComponent, {
      width: '100%',
      maxWidth: '900px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /**
   *  OTHER FUNCTIONS
   * convertHoursToMin
   * convertSteps
   * onTitleChangeAdult
   */
  convertHoursToMin(data: Segments) {
    let journeyDuration = parseInt(data?.JourneyDuration);

    let hours = Math.floor(journeyDuration / 60);
    let minutes = journeyDuration % 60;

    let duration = hours + 'h' + ' ' + minutes + 'm';
    return duration;
  }

  convertSteps(data: Segments) {
    return data && data && data.StopQuantity
      ? data.StopQuantity + ' Stop'
      : 'N/A';
  }



  validateEmail(email: any) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  /**
   * DESTROY SESSIONS
   */
  ngOnDestroy(): void {
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
    if (this.subAirPriceRoute) {
      this.subAirPriceRoute.unsubscribe();
    }
    if (this.subAirRulesRoute) {
      this.subAirRulesRoute.unsubscribe();
    }
    if (this.subAddPreBookRoute) {
      this.subAddPreBookRoute.unsubscribe();
    }
  }
}
