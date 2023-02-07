import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { SortComponent } from './components/sort/sort.component';
import { ChannelPageComponent } from './pages/channel-page/channel-page.component';
import { SharedModule } from '../shared/shared.module';
import { VjsPlayerComponent } from './components/vjs-player/vjs-player.component';
import { HtmlVideoPlayerComponent } from './components/html-video-player/html-video-player.component';

@NgModule({
  declarations: [SortComponent, ChannelPageComponent, VjsPlayerComponent, HtmlVideoPlayerComponent],
  imports: [CommonModule, ChannelRoutingModule, SharedModule],
})
export class ChannelModule {}
