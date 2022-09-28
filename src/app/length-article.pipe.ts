import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lengthArticle'
})
export class LengthArticlePipe implements PipeTransform {

  transform(value: string): string {
    let length = value.length
    if (length > 100) value = value.substring(0, 100) + '....';
    return value;
  }

}
