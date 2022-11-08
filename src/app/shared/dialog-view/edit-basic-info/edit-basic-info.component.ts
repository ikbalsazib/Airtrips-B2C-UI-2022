import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-basic-info',
  templateUrl: './edit-basic-info.component.html',
  styleUrls: ['./edit-basic-info.component.scss'],
})
export class EditBasicInfoComponent implements OnInit {
 

  genders: any[] = [
    { viewValue: 'Male', value: 'Male' },
    { viewValue: 'Female', value: 'Female' },
    { viewValue: 'Others', value: 'Others' },
  ];

  constructor(


  ) {}

  ngOnInit(): void {

  }


}
