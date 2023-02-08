import { Component, Input } from '@angular/core';
import { Channel } from 'src/app/core/models/channel.model';

@Component({
  selector: 'app-sort-result-item',
  templateUrl: './sort-result-item.component.html',
  styleUrls: ['./sort-result-item.component.scss'],
})
export class SortResultItemComponent {
  @Input() item!: Channel;
}
