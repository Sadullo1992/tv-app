import { Component, Input } from '@angular/core';
import { Channel } from 'src/app/core/models/channel.model';

@Component({
  selector: 'app-home-channel-category',
  templateUrl: './home-channel-category.component.html',
  styleUrls: ['./home-channel-category.component.scss'],
})
export class HomeChannelCategoryComponent {
  @Input() category!: string;
  @Input() channels: Channel[] = [];
}
