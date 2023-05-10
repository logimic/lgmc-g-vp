import { Pipe, PipeTransform } from '@angular/core';
import { LgmcVPPreferredPosition } from '../model/lgmc-g-vp-language.model';

@Pipe({
  name: 'testPos'
})
export class LgmcGVpTestPosPipe implements PipeTransform {

  transform(i: number, length: number, prefered: boolean, list?: LgmcVPPreferredPosition[]): boolean {
    if(!list) {
      return true;
    } else {
      for(let j = 0; j < list.length; j++) {
        if(typeof list[j] === "number") {
          if(i === list[j]) {
            return prefered;
          }
        } else {
          if(i === 0 && list[j] === "first") {
            return prefered;
          } else if(i > 0 && i < length-1 && list[j] === "middle") {
            return prefered;
          } else if(i === length-1 && list[j] === "last") {
            return prefered;
          }
        }
      }
    }

    return !prefered;
  }

}
