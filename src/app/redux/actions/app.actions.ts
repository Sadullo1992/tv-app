import { createAction, props } from '@ngrx/store';
import { Channel } from 'src/app/core/models/channel.model';

export const loadChannels = createAction('[Channels] Load');
export const loadChannelsSuccess = createAction(
  '[Channels] Load Success',
  props<{ channels: Channel[] }>()
);
export const loadChannelsFailed = createAction(
  '[Channels] Load Failed',
  props<{ error: string }>()
);
