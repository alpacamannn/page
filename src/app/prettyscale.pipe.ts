import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyscale'
})
export class PrettyscalePipe implements PipeTransform {

  transform(value: number):boolean[]{
    let arr: boolean[] = []

    for(let i = 0; i < value; i++){
      arr.push(true)
    }



    return arr;
  }

}
