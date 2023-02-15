import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Channel } from 'src/app/core/models/channel.model';
import * as AppSelects from '../../../redux/selectors/app.selectors';

@Component({
  selector: 'app-tv-category',
  templateUrl: './tv-category.component.html',
  styleUrls: ['./tv-category.component.scss'],
})
export class TvCategoryComponent implements OnInit, OnDestroy {
  category = '';

  channels$!: Observable<Channel[]>;

  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.getCategoryFromRoute();
  }

  private getCategoryFromRoute(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.category = params['id'];
      this.getChannelsByCategory();
    });
  }

  private getChannelsByCategory(): void {
    this.channels$ = this.store.select(AppSelects.selectChannelsByCategory(this.category));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
