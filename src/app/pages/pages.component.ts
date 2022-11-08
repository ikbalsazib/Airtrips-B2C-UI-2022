import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  menu = false;
  hour:any;
  min:any;
  sec:any;
  timeFormat:any;
  panelOpenState = false;

  constructor(

    private router: Router

  ) { }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    })
    /*** digital clock */
    setInterval(() => {
      this.digitalClock();
    },1000);

  }

  menuActive(){
    this.menu =true;
  }
  menuInactive(){
    this.menu =false;
  }

  /****
   * CLOCK Start
  */

  digitalClock(){
    var date = new Date();
    this.hour = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
    /***
    * format Logic
    */
      if(this.hour > 12 || this.hour == 12){
        this.timeFormat = "PM";
      }else{
        this.timeFormat = "AM";
      }
    /***
     * hour logic
     */
      if(this.hour > 12){
        this.hour = this.hour - 12;
      }
      if(this.hour < 10){
        this.hour= '0'+this.hour;
      }
      if(this.hour == 0){
        this.hour = 12;
      }
    /***
     * MIN LOGIC
     */
    if(this.min < 10){
      this.min = '0'+this.min;
    }
    /***
     * Second LOGIC
     */
       if(this.sec < 10){
        this.sec = '0'+this.sec;
      }
  } /***** CLOCK ENd*/


}
