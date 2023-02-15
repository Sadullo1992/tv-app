import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state.models';

export const selectAppState = createFeatureSelector<AppState>('appStore');
export const selectChannels = createSelector(selectAppState, (state: AppState) => state.channels);

export const selectChannelsByCategory = (category: string) =>
  createSelector(selectAppState, (state: AppState) =>
    state.channels
      .filter((item) => item.categories.some((categoryItem) => categoryItem === category))
      .slice()
  );

export const selectChannel = (id: string) =>
  createSelector(selectAppState, (state: AppState) =>
    state.channels.find((item) => item.id === id)
  );

export const selectAppStatus = createSelector(selectAppState, (state: AppState) => state.status);
