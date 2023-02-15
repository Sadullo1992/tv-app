import { Channel } from '../core/models/channel.model';

export interface AppState {
  channels: Channel[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}
