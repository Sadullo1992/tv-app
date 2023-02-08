import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/core/models/channel.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  isSearch = false;

  query = '';

  subscription!: Subscription;

  channels: Channel[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllChannels();
  }

  onSearch(value: string) {
    this.query = value;
    this.isSearch = this.query ? true : false;
  }

  goToChannelPage(channelId: string) {
    this.router.navigate(['channel', channelId]);
    this.isSearch = false;
  }

  private getAllChannels(): void {
    this.subscription = this.apiService.getChannels().subscribe((channels) => {
      this.channels = channels;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
