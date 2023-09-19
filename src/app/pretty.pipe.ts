import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pretty'
})
export class PrettyPipe implements PipeTransform {

  transform(value: string) {

    switch (value) {

      case 'ja':
        return `https://www.countryflagicons.com/FLAT/64/JP.png`
      case 'en':
        return `https://www.countryflagicons.com/FLAT/64/GB.png`
      case 'ko':
        return `https://www.countryflagicons.com/FLAT/64/KR.png`
      default:
        return `https://www.countryflagicons.com/FLAT/64/${value.toUpperCase()}.png`
    }



  }

}
