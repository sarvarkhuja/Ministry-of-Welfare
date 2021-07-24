import { Pipe, PipeTransform } from '@angular/core';
import { format } from '@core/utils';

@Pipe({
  name: 'stringformat',
})
export class StringFormatPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return format(value, args);
  }
}
