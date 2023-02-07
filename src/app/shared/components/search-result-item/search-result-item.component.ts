import { Component, Input } from '@angular/core';
import { Channel } from 'src/app/core/models/channel.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent {
  @Input() item!: Channel;
}
