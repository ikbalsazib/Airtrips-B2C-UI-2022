import {Directive, HostListener} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[type="number"]'
})
export class IgnoreWheelDirective {

  @HostListener('wheel', ['$event'])
  @HostListener('scroll', ['$event'])
  onWheel(event: Event) {
    event.preventDefault();
  }

}
