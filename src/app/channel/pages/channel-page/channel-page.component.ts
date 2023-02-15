import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Channel } from 'src/app/core/models/channel.model';
import { Store } from '@ngrx/store';
import * as AppSelects from '../../../redux/selectors/app.selectors';

import data from '../../../../assets/data/db.json';

@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.scss'],
})
export class ChannelPageComponent implements OnInit, OnDestroy {
  channelId = '';

  streamUrl = '';

  channel$!: Observable<Channel | undefined>;

  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.getChannelIdFromRoute();
  }

  private getChannelIdFromRoute(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.channelId = params['id'];
      this.getChannel(this.channelId);
      this.getChannelStream();
    });
  }

  private getChannel(id: string): void {
    this.channel$ = this.store.select(AppSelects.selectChannel(id));
  }

  private getChannelStream(): void {
    this.streamUrl = data.channels.find((item) => item.id === this.channelId)!.url;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
