import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import * as AppActions from '../actions/app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  fetchChannels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadChannels),
      switchMap(() =>
        this.apiService.getChannels().pipe(
          map((channels) => AppActions.loadChannelsSuccess({ channels })),
          catchError((err) => of(AppActions.loadChannelsFailed({ error: err?.statusText })))
        )
      )
    )
  );
}
