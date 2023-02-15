import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AppSelects from '../../../redux/selectors/app.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  isSearch = false;

  query = '';

  channels$ = this.store.select(AppSelects.selectChannels);

  constructor(private router: Router, private store: Store) {}

  onSearch(value: string) {
    this.query = value;
    this.isSearch = this.query ? true : false;
  }

  goToChannelPage(channelId: string) {
    this.router.navigate(['channel', channelId]);
    this.isSearch = false;
  }
}
