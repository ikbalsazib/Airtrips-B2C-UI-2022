import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss']
})
export class TravelCardComponent implements OnInit {

  @Input() data?: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log()
  }

}
