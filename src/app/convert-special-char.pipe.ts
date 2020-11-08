import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpecialChar'
})
export class ConvertSpecialCharPipe implements PipeTransform {

  transform(value: string, character:string): unknown {
    return value.replace(character,'XXX');
  }

}
