import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AIR_CLASS, TRIP_TYPE} from '../../core/utils/app-data';
import {Select} from '../../interfaces/select';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AirportList} from '../../interfaces/airport';
import {TrendingPlaceCard} from '../../interfaces/trending-place-card';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],


})
export class HomeComponent implements OnInit {

  // Selected Trip
  selectedTrip: Select = TRIP_TYPE[0];
  trips: Select[] = TRIP_TYPE;

  // Selected Seat
  selectedClass: Select = AIR_CLASS[0];
  airClasses: Select[] = AIR_CLASS;
  //countries
  trendingCardData: TrendingPlaceCard[] = [];

  //Count
  adultCounter: number = 0;
  childCounter: number = 0;
  infantCounter: number = 0;

  //Data Form
  dataForm: FormGroup;

  // Airports
  filteredOptionsFrom: AirportList[];
  filteredOptionsTo: AirportList[];
  filteredOptionsFromMulti: AirportList[];
  filteredOptionsToMulti: AirportList[];
  filteredOptions: AirportList[];
  airports: AirportList[] | any;
  selectedSearchFromValue: any;
  selectedSearchToValue: any;

  // Date Picker
  minDate: Date;


  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {

  }


  ngOnInit(): void {
    this.initForm()
  }

  /*** data Form */
  initForm() {
    this.dataForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: ['', Validators.required],
      return: [null],
    });
  }

  /***
   * PACKGE-CARD-DATA
   */
  packegeData: any[] = [
    {
      _id: '1',
      title: '5 Days Refreshment Tour to Sri Lanka',
      image: './assets/images/image/pexels-alexandr-podvalny-319892.jpg',
      routerLink: '#',
      price: '33,000'
    },
    {
      _id: '2',
      title: '5 Days Refreshment Tour to Dubai',
      image: './assets/images/image/pexels-şinasi-müldür-2048865.jpg',
      routerLink: '#',
      price: '40,000'
    },
    {
      _id: '3',
      title: '7 Days Refreshment Tour to America',
      image: './assets/images/image/pexels-asad-photo-maldives-3601422.jpg',
      routerLink: '#',
      price: '70,000'
    },
    {
      _id: '4',
      title: '7 Days Refreshment Tour to America',
      image: './assets/images/image/pexels-denys-gromov-4612748.jpg',
      routerLink: '#',
      price: '70,000'
    }
  ];

  /**** Travel Data */
  travelData: any[] = [
    {
      _id: '1',
      image: './assets/images/image/ac5068f9-ctry-193-1689de0940f.jpg',
      routerLink: '/travel-details',
      title: 'Peru',
      tag: 'Restrictions',
      description: ['COVID-19 test required', 'Vaccinated travelers can visit']
    },
    {
      _id: '2',
      image: './assets/images/image/a04a5913-city-7362-165d76e12c1.jpg',
      routerLink: '/travel-details',
      title: 'Ireland',
      tag: 'Restrictions',
      description: ['COVID-19 test required', 'Vaccinated travelers can visit']
    },
    {
      _id: '3',
      image: './assets/images/image/9ebc193e-city-34713-1660ff764a9.jpg',
      routerLink: '/travel-details',
      title: 'Mexico',
      tag: 'Open',
      description: ['Vaccinated travelers can visit', 'Masks required']
    },
    {
      _id: '4',
      image: './assets/images/image/4486a68d-ctry-68-168763cd01a.jpg',
      routerLink: '/travel-details',
      title: 'Dominican Republic',
      tag: 'Open',
      description: ['Vaccinated travelers can visit', 'Masks required']
    },
    {
      _id: '5',
      image: './assets/images/image/75aebfbd-ctry-59-167f174407c.jpg',
      routerLink: '/travel-details',
      title: 'Peru',
      tag: 'Restrictions',
      description: ['COVID-19 test required', 'Vaccinated travelers can visit']
    },
    {
      _id: '6',
      image: './assets/images/image/4486a68d-ctry-68-168763cd01a.jpg',
      routerLink: '/travel-details',
      title: 'India',
      tag: 'Indian Girl',
      description: ['COVID-19 test required', 'Vaccinated travelers can visit']
    }
  ];


}
