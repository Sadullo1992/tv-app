import { Component, Input } from '@angular/core';
import { Channel } from 'src/app/core/models/channel.model';

@Component({
  selector: 'app-channel-list-item',
  templateUrl: './channel-list-item.component.html',
  styleUrls: ['./channel-list-item.component.scss'],
})
export class ChannelListItemComponent {
  @Input() item!: Channel;
}
