import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dots',
})
export class DotsPipe implements PipeTransform {
  transform(value: any): any {
    return value || '----';
  }
}
