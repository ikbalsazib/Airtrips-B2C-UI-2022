import {StorageService} from './../../services/storage.service';
import {Component, Input, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OneWaySearchTicket} from '../../interfaces/search-ticket';
import {Subscription} from 'rxjs';
import {TripService} from '../../services/trip.service';
import {UtilsService} from '../../services/utils.service';
// import { NgxSpinnerService } from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators,} from '@angular/forms';
import {User} from '../../interfaces/user';
import {UiService} from '../../services/ui.service';
import {UserService} from '../../services/user.service';
import {UserDataService} from '../../services/user-data.service';
import {MatDialog} from '@angular/material/dialog';
// import { StorageService } from '../../services/storage.service';
import {ReloadService} from '../../services/reload.service';
import {Result, Segments, TripInfo, TripQueryData,} from 'src/app/interfaces/trip-info';
import {Select} from 'src/app/interfaces/select';
import {AIR_CLASS, TRIP_TYPE} from 'src/app/core/utils/app-data';
import {DatePipe} from '@angular/common';
import {AirportList} from 'src/app/interfaces/airport';
import {MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {Options} from 'ng5-slider';
import {ServiceChargePipe} from '../../shared/pipes/service-charge.pipe';
import {AirImagePipe} from '../../shared/pipes/airImage.pipe';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  providers: [ServiceChargePipe, DatePipe, AirImagePipe],
})
export class SearchResultComponent implements OnInit {
  @Input() data: any;

  // Mat Autocomplete After Patch Value
  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
  details = false;

  change = true;
  cancel = false;
  panelOpenState = false;
  filterShow = false;

  // Selected Trip
  selectedTrip: Select = TRIP_TYPE[0];
  trips: Select[] = TRIP_TYPE;

  // Selected Seat
  selectedClass: Select = AIR_CLASS[0];
  airClasses: Select[] = AIR_CLASS;

  //Count
  adultCounter: any = 0;
  childCounter: any = 0;
  infantCounter: any = 0;

  user: User = null;

  // Collapse
  collapse = false;

  flightResults: Result[];
  filterdFlights: Result[];
  holdData: Result[] = [];


  // Show Hide
  oneWaySearchResult: Boolean = false;
  roundTripSearchResult: Boolean = false;
  multiCitySearchResult: Boolean = false;

  bookingDepartFlight: Result;
  bookingReturnFlight: Segments;

  dataForm: FormGroup;
  isDisabled: boolean = false;


  //loader
  loader: boolean = true;
  loaderAirData: TripQueryData;

  // Date Picker
  minDate: Date;

  //  Top search Form Info
  topSearchInfoBar: any;

  // Filtering
  cheapestValue: Result;
  quickestValue: Result;
  bestestValue: Result;

  // Duration Filter
  durationLowest: number = 2;
  durationHighValue: number = 50;
  duration: Options = {
    floor: 0,
    ceil: 100,
  };
  durationFloor: any;
  durationCeil: any;

  // Transit Time Out Bound
  outBoundTransitLowest: number = 40;
  outBoundTransitHighest: number = 60;
  transitOutBound: Options = {
    floor: 0,
    ceil: 100,
  };

  // Transit Time Out Bound
  inBoundTransitLowest: number = 40;
  inBoundTransitHighest: number = 60;
  transitInBound: Options = {
    floor: 0,
    ceil: 100,
  };

  // Departure Time Outbound
  outBoundDepartureLowest: number = 30;
  outBoundDepartureHighest: number = 50;
  departureOutBound: Options = {
    floor: 0,
    ceil: 100,
  };



  constructor(
    private utilsService: UtilsService,
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) {
    this.minDate = new Date();
  }

  ngOnInit(): void {

    this.initForm();


  }

  ngAfterViewInit() {

  }

  // FORMS
  initForm() {
    this.dataForm = this.fb.group({
      from: [null, Validators.required],
      to: [null, Validators.required],
      depart: [null, Validators.required],
      return: [null],
    });
  }

  /*** filter Toggle */
  filterToggle() {
    this.filterShow = !this.filterShow;
  }

  changeShow() {
    this.cancel = true;
    this.change = false;
  }
  cancelSearch() {
    this.cancel = false;
    this.change = true;
  }
}
