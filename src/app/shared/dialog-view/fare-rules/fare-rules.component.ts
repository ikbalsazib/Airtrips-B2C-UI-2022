import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fare-rules',
  templateUrl: './fare-rules.component.html',
  styleUrls: ['./fare-rules.component.scss']
})
export class FareRulesComponent implements OnInit {



  list1 = true;
  list2 = false;
  list3 = false;
  list4 = false;
  list5 = false;
  list6 = false;
  list7 = false;

  constructor() { }

  ngOnInit(): void {
  }

  showList1(){
    this.list1 = true;
    this.list2 = false;
    this.list3 = false;
    this.list4 = false;
    this.list5 = false;
    this.list6 = false;
    this.list7 = false;
  }
  showList2(){
    this.list2 = true;
    this.list1 = false;
    this.list3 = false;
    this.list4 = false;
    this.list5 = false;
    this.list6 = false;
    this.list7 = false;
  }
  showList3(){
    this.list3 = true;
    this.list1 = false;
    this.list2 = false;
    this.list4 = false;
    this.list5 = false;
    this.list6 = false;
    this.list7 = false;
  }
  showList4(){
    this.list4 = true;
    this.list1 = false;
    this.list2 = false;
    this.list3 = false;
    this.list5 = false;
    this.list6 = false;
    this.list7 = false;
  }
  showList5(){
    this.list5 = true;
    this.list1 = false;
    this.list2 = false;
    this.list3 = false;
    this.list4 = false;
    this.list6 = false;
    this.list7 = false;
  }
  showList6(){
    this.list6 = true;
    this.list1 = false;
    this.list2 = false;
    this.list3 = false;
    this.list4 = false;
    this.list5 = false;
    this.list7 = false;
  }
  showList7(){
    this.list7 = true;
    this.list1 = false;
    this.list2 = false;
    this.list3 = false;
    this.list4 = false;
    this.list5 = false;
    this.list6 = false;
  }

}
