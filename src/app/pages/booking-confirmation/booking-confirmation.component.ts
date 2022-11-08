import { UserDataService } from 'src/app/services/user-data.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AirRetrieve, Results } from 'src/app/interfaces/air-retrieve';
import { Fares, Result, Segments, TripQueryData } from 'src/app/interfaces/trip-info';
import { TripService } from 'src/app/services/trip.service';
import { Router } from '@angular/router';
import { NotFoundComponent } from '../home/not-found/not-found.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { FareRulesComponent } from 'src/app/shared/dialog-view/fare-rules/fare-rules.component';
import { ConfirmationFareRulesComponent } from './confirmation-fare-rules/confirmation-fare-rules.component';
@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss'],
})
export class BookingConfirmationComponent implements OnInit {

  panelOpenState = false;

  //loader
  loader: boolean = false;
  loaderAirData: TripQueryData;


  constructor(
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    public userDataService: UserDataService,
    private tripService: TripService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

// Air Rules Dialogue
openDialog() {
  const dialogRef = this.dialog.open(FareRulesComponent);

  dialogRef.afterClosed().subscribe((result) => {
    console.log(`Dialog result: ${result}`);
  });
}

  /**
   * CONFIRM DIALOG
   */
  public openConfirmDialog() {
    const dialogRef = this.dialog.open(NotFoundComponent);

    dialogRef.afterClosed().subscribe((dialogResult) => {
      console.log('openConfirmDialog', dialogResult);

      if (dialogResult === true) {
        this.router.navigate(['/']);
      }
    });
  }


  /**
   *  OTHER FUNCTIONS
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
}
