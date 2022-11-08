import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-packege-card-one',
  templateUrl: './packege-card-one.component.html',
  styleUrls: ['./packege-card-one.component.scss'],
})
export class PackegeCardOneComponent implements OnInit {
  @Input() data?: any;

  constructor() {
    // console.log(this.data)
  }

  ngOnInit(): void {
  }
}
