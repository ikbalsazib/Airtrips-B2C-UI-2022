import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bottom-navbar-mobile',
  templateUrl: './bottom-navbar-mobile.component.html',
  styleUrls: ['./bottom-navbar-mobile.component.scss']
})
export class BottomNavbarMobileComponent implements OnInit {

  @Input() cartCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
