import { Pipe, PipeTransform } from '@angular/core';
import { Channel } from 'src/app/core/models/channel.model';

@Pipe({
  name: 'searchChannel',
})
export class SearchChannelPipe implements PipeTransform {
  transform(value: Channel[], query: string): Channel[] {
    return value.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).slice();
  }
}
