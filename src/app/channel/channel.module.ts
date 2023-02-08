import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChannelRoutingModule } from './channel-routing.module';
import { SortComponent } from './components/sort/sort.component';
import { ChannelPageComponent } from './pages/channel-page/channel-page.component';
import { SharedModule } from '../shared/shared.module';
import { VjsPlayerComponent } from './components/vjs-player/vjs-player.component';
import { HtmlVideoPlayerComponent } from './components/html-video-player/html-video-player.component';
import { SortResultComponent } from './components/sort-result/sort-result.component';
import { SortResultItemComponent } from './components/sort-result-item/sort-result-item.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownSelectItemComponent } from './components/dropdown-select-item/dropdown-select-item.component';

@NgModule({
  declarations: [
    SortComponent,
    ChannelPageComponent,
    VjsPlayerComponent,
    HtmlVideoPlayerComponent,
    SortResultComponent,
    SortResultItemComponent,
    DropdownComponent,
    DropdownSelectItemComponent,
  ],
  imports: [CommonModule, ChannelRoutingModule, SharedModule, FormsModule],
})
export class ChannelModule {}
