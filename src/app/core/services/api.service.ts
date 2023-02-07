import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import data from '../../../assets/data/db.json';
import { AvailableChannel } from '../models/available-channel.model';
import { Channel } from '../models/channel.model';
import { Stream } from '../models/stream.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseChannels: AvailableChannel[] = data.channels;

  constructor(private httpClient: HttpClient) {}

  getChannels(): Observable<Channel[]> {
    return this.httpClient
      .get<Channel[]>('https://iptv-org.github.io/api/channels.json')
      .pipe(
        map((channels) =>
          channels.filter((item) =>
            this.baseChannels.some((baseChannel) => baseChannel.id === item.id)
          )
        )
      );
  }
  getStreams(): Observable<Stream[]> {
    return this.httpClient
      .get<Stream[]>('https://iptv-org.github.io/api/streams.json')
      .pipe(
        map((streams) =>
          streams.filter((item) =>
            this.baseChannels.some(
              (baseChannel) => baseChannel.id === item.channel && baseChannel.url === item.url
            )
          )
        )
      );
  }
}
