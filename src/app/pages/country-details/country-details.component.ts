import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { TrendingPlaceCard } from 'src/app/interfaces/trending-place-card';
import { TrendingPlaceService } from 'src/app/services/trending-place.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {


  id: string = null;
  country: any;


  subRoute: Subscription;
  subDataOne: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private trendingPlaceService: TrendingPlaceService
  ) { }

  ngOnInit(): void {
    // this.subRoute = this.activatedRoute.paramMap.subscribe(param => {
    //   this.countrySlug = param.get('slug');
    //   this.getSingleCountryBySlug();
    // });


    // GET ID FORM PARAM
    this.subRoute = this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      this.getSingleCountryBySlug();
    });
  }


  private getSingleCountryBySlug() {
    this.spinner.show();
    this.subDataOne = this.trendingPlaceService.getSingleTrendingPlaceById(this.id)
      .subscribe(res => {

        this.spinner.hide();
        this.country = res.data;
        console.log("country", this.country);


      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }



}
