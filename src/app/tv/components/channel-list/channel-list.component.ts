import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/app/core/models/channel.model';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
})
export class ChannelListComponent {
  @Input() channels: Channel[] = [];

  constructor(private router: Router) {}

  goToChannelPage(channelId: string) {
    this.router.navigate(['channel', channelId]);
  }
}
