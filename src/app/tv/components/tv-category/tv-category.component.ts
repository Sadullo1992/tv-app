import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/core/models/channel.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-tv-category',
  templateUrl: './tv-category.component.html',
  styleUrls: ['./tv-category.component.scss'],
})
export class TvCategoryComponent implements OnInit {
  category = '';

  channels: Channel[] = [];

  private subscription1!: Subscription;
  private subscription2!: Subscription;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCategoryFromRoute();
    this.getAllChannels();
  }

  private getCategoryFromRoute(): void {
    this.subscription1 = this.route.params.subscribe((params) => {
      this.category = params['id'];
    });
    this.subscriptions.push(this.subscription1);
  }

  private getAllChannels(): void {
    this.subscription2 = this.apiService.getChannels().subscribe((channels) => {
      this.channels = channels;
    });
    this.subscriptions.push(this.subscription2);
  }
}
