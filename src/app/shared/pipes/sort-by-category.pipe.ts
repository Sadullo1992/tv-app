import { Pipe, PipeTransform } from '@angular/core';
import { Channel } from 'src/app/core/models/channel.model';

@Pipe({
  name: 'sortByCategory',
})
export class SortByCategoryPipe implements PipeTransform {
  transform(value: Channel[], category: string): Channel[] {
    if (category === 'all') {
      return value;
    }
    return value
      .filter((item) => item.categories.some((categoryItem) => categoryItem === category))
      .slice();
  }
}
