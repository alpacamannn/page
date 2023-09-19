import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTitle'
})
export class ToTitlePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace('_', ' ').toUpperCase()
  }

}
