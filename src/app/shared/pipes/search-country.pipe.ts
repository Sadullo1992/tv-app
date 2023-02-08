import { Pipe, PipeTransform } from '@angular/core';
import { DropdownCategory } from 'src/app/core/models/dropdownData.model';

@Pipe({
  name: 'searchCountry',
  pure: false,
})
export class SearchCountryPipe implements PipeTransform {
  transform(value: DropdownCategory[], query: string, isSearch: boolean): DropdownCategory[] {
    if (isSearch) {
      return value.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).slice();
    }
    return value;
  }
}
