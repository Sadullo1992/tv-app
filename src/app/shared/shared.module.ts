import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './components/search/search.component';
import { SortByCategoryPipe } from './pipes/sort-by-category.pipe';
import { SearchChannelPipe } from './pipes/search-channel.pipe';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';

@NgModule({
  declarations: [SearchComponent, SortByCategoryPipe, SearchChannelPipe, SearchResultItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchComponent, SortByCategoryPipe],
})
export class SharedModule {}
