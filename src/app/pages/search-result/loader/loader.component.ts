import { Component, OnInit, Input } from '@angular/core';
import { TripQueryData } from 'src/app/interfaces/trip-info';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() loader: any;
  @Input() qureyData: any;
  constructor() {}

  ngOnInit(): void {}
}
