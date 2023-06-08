import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigLetters'
})
export class BigLettersPipe implements PipeTransform {

  transform(value: string): unknown {
    if(!value) return null;

    let values = value.split(' ');

    for(let i = 0; i < values.length; i++) {
      values[i] = values[i].charAt(0).toUpperCase() + values[i].slice(1).toLocaleLowerCase();
    }

    return values.join(' ');
  }

}
