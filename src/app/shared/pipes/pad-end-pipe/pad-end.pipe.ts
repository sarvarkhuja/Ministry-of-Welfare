import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padEnd',
})
export class PadEndPipe implements PipeTransform {
  transform(value: number, targetLength: number, padString = '0'): string {
    return value.toString().padEnd(targetLength, padString);
  }
}
