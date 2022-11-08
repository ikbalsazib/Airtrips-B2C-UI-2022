import { Component, OnInit } from '@angular/core';
import { TrendingPlaceCard } from 'src/app/interfaces/trending-place-card';
import { TrendingPlaceService } from 'src/app/services/trending-place.service';

@Component({
  selector: 'app-visa-support',
  templateUrl: './visa-support.component.html',
  styleUrls: ['./visa-support.component.scss']
})
export class VisaSupportComponent implements OnInit {


  trendingCardData: TrendingPlaceCard[] = [];


  constructor(
    private trendingPlaceService: TrendingPlaceService,
  ) { }

  ngOnInit(): void {
    this.getTrendingPalces();
  }


  getTrendingPalces() {
    this.trendingPlaceService.getAllTrendingPlace().subscribe((res) => {
      // console.log("trending place",res.data);
      this.trendingCardData = res.data;
    });
  }

}
