import { Pipe, PipeTransform } from '@angular/core';

import countries from '../../../assets/data/countries.json';

@Pipe({
  name: 'findCountryByCode',
})
export class FindCountryByCodePipe implements PipeTransform {
  transform(code: string): string {
    let countryName = countries.find((item) => item.code === code)?.name;
    if (countryName) {
      return countryName;
    }
    return code;
  }
}
