import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/core/models/channel.model';
import { ApiService } from 'src/app/core/services/api.service';

import data from '../../../../assets/data/db.json';

@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.scss'],
})
export class ChannelPageComponent implements OnInit, OnDestroy {
  channelId = '';

  streamUrl = '';

  channel: Channel | undefined = undefined;

  private subscription1!: Subscription;
  private subscription2!: Subscription;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getChannelIdFromRoute();
  }

  private getChannelIdFromRoute(): void {
    this.subscription1 = this.route.params.subscribe((params) => {
      this.channelId = params['id'];
      this.getChannel();
      this.getChannelStream();
    });
    this.subscriptions.push(this.subscription1);
  }

  private getChannel(): void {
    this.subscription2 = this.apiService.getChannels().subscribe((channels) => {
      this.channel = channels.find((item) => item.id === this.channelId);
    });
    this.subscriptions.push(this.subscription2);
  }

  private getChannelStream(): void {
    this.streamUrl = data.channels.find((item) => item.id === this.channelId)?.url as string;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
