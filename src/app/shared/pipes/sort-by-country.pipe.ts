import { Pipe, PipeTransform } from '@angular/core';
import { Channel } from 'src/app/core/models/channel.model';

@Pipe({
  name: 'sortByCountry',
})
export class SortByCountryPipe implements PipeTransform {
  transform(value: Channel[], queryByCountry: string): Channel[] {
    if (queryByCountry === 'all') {
      return value;
    }
    return value.filter((item) => item.country === queryByCountry).slice();
  }
}
