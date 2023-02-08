import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/app/core/models/channel.model';

@Component({
  selector: 'app-sort-result',
  templateUrl: './sort-result.component.html',
  styleUrls: ['./sort-result.component.scss'],
})
export class SortResultComponent {
  @Input() channels: Channel[] = [];

  constructor(private router: Router) {}

  goToChannelPage(channelId: string) {
    this.router.navigate(['channel', channelId]);
  }
}
