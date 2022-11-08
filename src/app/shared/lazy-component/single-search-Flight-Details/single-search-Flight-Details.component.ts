import {DatePipe} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-search-flight-details',
  templateUrl: './single-search-flight-details.component.html',
  styleUrls: ['./single-search-flight-details.component.scss'],
  providers: [DatePipe],
})
export class SingleSearchFlightDetailsComponent implements OnInit {


  inBoundFound: number;
  details = false;
  @Input() data;

  @Input() open = false;
  // cityCode:any;


  menu = false;
  /*** details */
    // details = false;
  flightDetails = true;
  fareSummary = false;
  badggage = false;
  cancellation = false;
  dataChange = false;

  /*** end */

  constructor() {
  }

  ngOnInit(): void {


  }


  menuActive() {
    this.menu = true;
  }

  menuInactive() {
    this.menu = false;
  }


  /***
   * flight details
   */
  flightDetailsShow() {
    this.flightDetails = true;
    this.fareSummary = false;
    this.cancellation = false;
    this.badggage = false;
    this.dataChange = false;
  }

  fareSummaryShow() {
    this.fareSummary = true;
    this.flightDetails = false;
    this.cancellation = false;
    this.badggage = false;
    this.dataChange = false;
  }

  fareSummaryHide() {
    this.fareSummary = false;
    this.flightDetails = true;
    this.cancellation = false;
    this.badggage = false;
    this.dataChange = false;
  }

  badggageShow() {
    this.badggage = true;
    this.flightDetails = false;
    this.fareSummary = false;
    this.cancellation = false;
    this.dataChange = false;
  }

  badggageHide() {
    this.badggage = false;
    this.flightDetails = true;
    this.fareSummary = false;
    this.cancellation = false;
    this.dataChange = false;
  }

  cancellationShow() {
    this.badggage = false;
    this.flightDetails = false;
    this.fareSummary = false;
    this.cancellation = true;
    this.dataChange = false;
  }

  cancellationHide() {
    this.badggage = false;
    this.flightDetails = true;
    this.fareSummary = false;
    this.cancellation = false;
    this.dataChange = false;
  }

  dataChangeShow() {
    this.badggage = false;
    this.flightDetails = false;
    this.fareSummary = false;
    this.cancellation = false;
    this.dataChange = true;
  }

  dataChangeHide() {
    this.badggage = false;
    this.flightDetails = true;
    this.fareSummary = false;
    this.cancellation = false;
    this.dataChange = false;
  }


  detailsToggle() {
    this.details = !this.details;
  }


}
