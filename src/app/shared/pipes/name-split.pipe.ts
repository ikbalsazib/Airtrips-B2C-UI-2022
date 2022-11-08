import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'airNameSplit'
})
export class AirNameSplitPipe implements PipeTransform {

  transform(airName: string, type?: number): any {

    if(airName){
      const data = airName.split("-");
      if(data.length){
        if(type===0){
          return data[0]
        } else if(type === 1){
          return data[1]
        }
      } else{
        return ''
      }
    } else{
      return ''
    }

  }

}
