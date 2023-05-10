import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lgmcGVpGenerate'
})
export class LgmcGVpGeneratePipe implements PipeTransform {

  transform(program: any): unknown {
    return JSON.stringify(program, null, 2);
  }

}
