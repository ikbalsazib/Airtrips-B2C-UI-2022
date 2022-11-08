import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Result, Segments } from 'src/app/interfaces/trip-info';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-single-search-result-card',
  templateUrl: './single-search-result-card.component.html',
  styleUrls: ['./single-search-result-card.component.scss'],
  providers: [DatePipe],
})
export class SingleSearchResultCardComponent implements OnInit {
  inBoundFound:number;
  details = false;
  @Input() data;

  @Input() open=false;
  // cityCode:any;
  baggageWaight:any;
  OutBoundSegment:any[]=[];
 InBoundSegment:any[]=[];

  menu = false;
  /*** details */
  // details = false;
  flightDetails = true;
  fareSummary = false;
  badggage = false;
  cancellation = false;
  dataChange = false;
  /*** end */

  constructor(
    private utilsService: UtilsService,
  ) {}

  ngOnInit(): void {

    // this.OutBoundSegment=this.data?.segments?.TripIndicator=='OutBound'
    // this.InBoundSegment=this.data?.segments?.TripIndicator=='InBound'
    for(let data of this.data.segments  ){

      if(  data.TripIndicator=="OutBound"){
       this.OutBoundSegment.push(data);
      }
    else if(data.TripIndicator=="InBound"){
      this.InBoundSegment.push(data);
    }
    console.log("data result",data);

    }
this.inBoundFound=this.InBoundSegment.length ;
console.log("inBoundFound",this.inBoundFound);
console.log("data result2",this.data);

  }


  menuActive(){
    this.menu =true;
  }
  menuInactive(){
    this.menu =false;
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
