import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppSelects from '../../../redux/selectors/app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categories = ['news', 'sports', 'music', 'kids', 'movies', 'series'];

  channels$ = this.store.select(AppSelects.selectChannels);

  constructor(private store: Store) {}
}
