import {Component, HostListener, OnInit} from '@angular/core';
import {CountryList} from '../../../interfaces/countires';
import {TripService} from '../../../services/trip.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language = false;
  slideMenu = false;
  currency= false;
  headerFixed = false;

  //Country list
  countries: CountryList | any;
  selectCountry: boolean[] = [];
  countryData: any =null;


  /*** clock */
  menu = true;
  hour:any;
  min:any;
  sec:any;
  timeFormat:any;


  constructor(
    private tripService: TripService,
    ) {
  }

  ngOnInit(): void {
    this.getFilteredCountries();
  }


  /**
   *   get country name from json
    */

  private getFilteredCountries() {
    this.tripService.getFilteredCountries().subscribe(
      (res) => {
        this.countries = res.data;
        console.log("Show json countries data", this.countries);
      },
      (err) => {
        console.log("Error in countries data", err);

      }
    )
  }


  /***
   * Language Active
   */
  languageActive(){
    this.language =! this.language;
    this.currency = false;
  }
  languageInactive(){
    this.language = false;
  }
  currencyActive(){
    this.language = false;
    this.currency =! this.currency;
  }
  currencyInactive(){
    this.currency = false;
  }
  slideMenuActive(){
    this.slideMenu =! this.slideMenu
  }
  slideOut(){
    this.slideMenu = false;
  }

  /**** Header fixed */
  @HostListener('window:scroll') headerScrollFixed(){
    if(window.scrollY > 100){
      this.headerFixed = true
    }else{
      this.headerFixed = false;
    }
  }




  /****
   * CLOCK Start
   */

  digitalClock(){
    var date = new Date();
    this.hour = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
    /***
     * format Logic
     */
    if(this.hour > 12 || this.hour == 12){
      this.timeFormat = "PM";
    }else{
      this.timeFormat = "AM";
    }
    /***
     * hour logic
     */
    if(this.hour > 12){
      this.hour = this.hour - 12;
    }
    if(this.hour < 10){
      this.hour= '0'+this.hour;
    }
    if(this.hour == 0){
      this.hour = 12;
    }
    /***
     * MIN LOGIC
     */
    if(this.min < 10){
      this.min = '0'+this.min;
    }
    /***
     * Second LOGIC
     */
    if(this.sec < 10){
      this.sec = '0'+this.sec;
    }
  } /***** CLOCK ENd*/

  /**
   * onSelectedCountry
   */

  onSelectedCountry(i: any){
    this.countryData = i;
    this.selectCountry = []
    this.selectCountry[i] = !this.selectCountry[i];


    this.language = false;
  }

}




