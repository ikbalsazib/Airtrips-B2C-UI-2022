import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecomandedDestinationService } from 'src/app/services/recomanded-destination.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss']
})
export class TravelDetailsComponent implements OnInit {
  //id
  id:string
  travelDetails
  constructor(
    private activatedRoute:ActivatedRoute,
    private recomandedDestinationService:RecomandedDestinationService,
  ) { }

  ngOnInit(): void {
    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      console.log(this.id)
      if (this.id) {
        this.getSingleTrandingPlaceById();
      }

    });
  }

  /* HTTP REQ */
  getSingleTrandingPlaceById(){
    this.recomandedDestinationService.getSingleRecomandedDestinationById(this.id)
    .subscribe(res=>{
      console.log(res.data);
      this.travelDetails=res.data;
      // this.setFormData()
    })
  }
}
