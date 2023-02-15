import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from './redux/actions/app.actions';
import * as AppSelects from './redux/selectors/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  status$ = this.store.select(AppSelects.selectAppStatus);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllChannels();
  }
  private getAllChannels(): void {
    this.store.dispatch(AppActions.loadChannels());
  }
}
