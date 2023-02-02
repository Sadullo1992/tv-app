import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { SortComponent } from './components/sort/sort.component';
import { ChannelPageComponent } from './pages/channel-page/channel-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SortComponent, ChannelPageComponent],
  imports: [CommonModule, ChannelRoutingModule, SharedModule],
})
export class ChannelModule {}
