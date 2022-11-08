import {Pipe, PipeTransform} from '@angular/core';
import {ServiceCharge} from '../../interfaces/service-charge';

@Pipe({
  name: 'serviceCharge'
})
export class ServiceChargePipe implements PipeTransform {

  transform(total: number, serviceCharge: ServiceCharge, type: string): number {

    if (serviceCharge) {
      switch (type) {
        case 'total': {
          const serviceAmount = (serviceCharge?.amount / 100) * total;
          return Math.floor(serviceAmount + total);
        }
        case 'charge': {
          const serviceAmount = (serviceCharge?.amount / 100) * total;
          return Math.floor(serviceAmount);
        }
        default: {
          return 0;
        }
      }

    } else {
      return total;
    }


  }

}
