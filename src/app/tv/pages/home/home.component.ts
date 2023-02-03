import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/core/models/channel.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  categories = ['news', 'sports', 'music', 'kids', 'movies', 'series'];

  channels: Channel[] = [];

  private subscription!: Subscription;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllChannels();
  }

  private getAllChannels(): void {
    this.subscription = this.api.getChannels().subscribe((channels) => {
      this.channels = channels;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
