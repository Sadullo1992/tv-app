import { createReducer, on } from '@ngrx/store';
import * as AppActions from '../actions/app.actions';
import { AppState } from '../state.models';

export const initialState: AppState = {
  channels: [],
  error: null,
  status: 'pending',
};

export const appReducer = createReducer(
  initialState,
  on(
    AppActions.loadChannels,
    (state): AppState => ({
      ...state,
      error: null,
      status: 'loading',
    })
  ),
  on(AppActions.loadChannelsSuccess, (state, { channels }) => ({
    ...state,
    channels,
    error: null,
    status: 'success',
  })),
  on(AppActions.loadChannelsFailed, (state, { error }) => ({
    ...state,
    error,
    status: 'error',
  }))
);
