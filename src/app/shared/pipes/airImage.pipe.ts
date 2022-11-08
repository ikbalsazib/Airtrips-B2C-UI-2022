import {Pipe, PipeTransform} from '@angular/core';
import { AIR_IMAGE } from 'src/app/core/utils/app-data';
import {RoleModifyEnum} from '../../enum/role-modify';

@Pipe({
  name: 'airImage'
})
export class AirImagePipe implements PipeTransform {

  transform(airName: string, type?: string): string {

    const airImages = AIR_IMAGE;
    if(airName){
      return airImages.find(f => f?.name === airName)?.img
    } else{
      return ''
    }

  }

}
