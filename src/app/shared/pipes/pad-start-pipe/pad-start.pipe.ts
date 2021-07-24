import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padStart',
})
export class PadStartPipe implements PipeTransform {
  transform(value: number, targetLength: number, padString = '0'): string {
    return value.toString().padStart(targetLength, padString);
  }
}
