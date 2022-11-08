import {Component, OnInit} from '@angular/core';
import {CountryList} from '../../../interfaces/countires';
import {TripService} from '../../../services/trip.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  language = false;
  slideMenu = false;
  currency= false;

  //Country list
  countries: CountryList | any;
  selectCountry: boolean[] = [];
  countryData: any =null;

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

  /**
   * country select
   * onSelectedCountry()
   */
  onSelectedCountry(i: any, $event){
    this.countryData = i;
    console.log("country", this.countryData);

    this.selectCountry = []
    this.selectCountry[i] = !this.selectCountry[i];

    this.language = false;
    $event.preventDefault();
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

}
