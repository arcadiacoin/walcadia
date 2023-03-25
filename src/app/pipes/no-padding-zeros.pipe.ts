import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noPaddingZeros'
})
export class NoPaddingZerosPipe implements PipeTransform {
  transform(input: string): string {
    const sig = input.split('.')[0];
    const frac = input.split('.')[1].replace(/0+$/g, '');

    // 1.000000 ADIA >> 1 ADIA
    if (!frac) {
      return sig;
    }

    // 0.002200 >> 0.0022 ADIA
    return `${sig}.${frac}`;
  }
}
