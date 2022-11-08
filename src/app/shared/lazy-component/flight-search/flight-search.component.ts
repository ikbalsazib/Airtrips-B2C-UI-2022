import { Component, OnInit } from '@angular/core';
import {Select} from '../../../interfaces/select';
import {AIR_CLASS, TRIP_TYPE} from '../../../core/utils/app-data';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AirportList} from '../../../interfaces/airport';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  // Selected Trip
  selectedTrip: Select = TRIP_TYPE[0];
  trips: Select[] = TRIP_TYPE;

  // Selected Seat
  selectedClass: Select = AIR_CLASS[0];
  airClasses: Select[] = AIR_CLASS;

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
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  /*** data Form */
  initForm() {
    this.dataForm = this.fb.group({
      from: [''],
      to: [''],
      depart: [''],
      return: [null],
    });
  }

  /**
   * One Way and Two Way Form Submit
   * onSubmit()
   */

  onSubmit() {
    console.log('this.dataForm?', this.dataForm.value)
    // if (this.dataForm?.invalid) {
    //   console.log('Invalid Form');
    // } else {
    //   console.log(this.dataForm?.value);
    // }
    this.router.navigate(['search-result'])
  }

  /**
   * Filter Data From and To
   * filterDataFrom()
   * filterDataTo()
   * filterDataFromMulti()
   * filterDataToMulti()
   */
  filterDataFrom(enteredData) {
    this.filteredOptionsFrom = this.airports.filter((item) => {
      const filterValue = enteredData.toString().toLowerCase();
      const itemValue = String(item.value);
      const itemName = String(item.name);

      if (enteredData.length > 3) {
        return itemName.toLowerCase().includes(filterValue);
      } else {
        return itemValue.toLowerCase().includes(filterValue);
      }
    });
  }

  filterDataTo(enteredData) {
    this.filteredOptionsTo = this.airports.filter((item) => {
      const filterValue = enteredData.toString().toLowerCase();
      const itemValue = String(item.value);
      const itemName = String(item.name);

      if (enteredData.length > 3) {
        return itemName.toLowerCase().includes(filterValue);
      } else {
        return itemValue.toLowerCase().includes(filterValue);
      }
    });
  }

  filterDataFromMulti(enteredData) {
    this.filteredOptionsFromMulti = this.airports.filter((item: any) => {
      const filterValue = enteredData.toString().toLocaleLowerCase();
      const itemValue = String(item.value);
      const itemName = String(item.name);

      if (enteredData.length > 3) {
        return itemName.toLowerCase().includes(filterValue);
      } else {
        return itemValue.toLowerCase().includes(filterValue);
      }
    });
  }

  filterDataToMulti(enteredData) {
    this.filteredOptionsToMulti = this.airports.filter((item) => {
      const filterValue = enteredData.toString().toLowerCase();
      const itemValue = String(item.value);
      const itemName = String(item.name);

      if (enteredData.length > 3) {
        return itemName.toLowerCase().includes(filterValue);
      } else {
        return itemValue.toLowerCase().includes(filterValue);
      }
    });
  }

  getOptionText(option) {
    return option.name;
  }

}
