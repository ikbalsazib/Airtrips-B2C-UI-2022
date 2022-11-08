import { Component, OnInit } from '@angular/core';
import { ReloadService } from 'src/app/services/reload.service';
import { RussiaService } from 'src/app/services/russia.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-russia-tour',
  templateUrl: './russia-tour.component.html',
  styleUrls: ['./russia-tour.component.scss']
})
export class RussiaTourComponent implements OnInit {
  places: any[] = [];

  constructor(
    private russiaService:RussiaService,
    private uiService:UiService,
    private reloadService:ReloadService
  ) { }

  ngOnInit(): void {
    this.getAllTrendingPlaces();
  }

  private getAllTrendingPlaces(){
    this.russiaService.getAllPlaces(null)
    .subscribe(res=>{
      console.log(res.data)
      this.places=res.data;

    }, err => {
      console.log(err);

    })
  }


}
