import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvRoutingModule } from './tv-routing.module';
import { TvPagesComponent } from './pages/tv-pages/tv-pages.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { TvCategoryComponent } from './components/tv-category/tv-category.component';
import { SharedModule } from '../shared/shared.module';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { ChannelListItemComponent } from './components/channel-list-item/channel-list-item.component';
import { HomeChannelCategoryComponent } from './components/home-channel-category/home-channel-category.component';

@NgModule({
  declarations: [
    TvPagesComponent,
    CarouselComponent,
    HomeComponent,
    TvCategoryComponent,
    ChannelListComponent,
    ChannelListItemComponent,
    HomeChannelCategoryComponent,
  ],
  imports: [CommonModule, TvRoutingModule, SharedModule],
})
export class TvModule {}
