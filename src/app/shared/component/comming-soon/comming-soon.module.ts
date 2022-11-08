import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommingSoonComponent } from './comming-soon.component';



@NgModule({
  declarations: [
    CommingSoonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CommingSoonComponent
  ]
})
export class CommingSoonModule { }
