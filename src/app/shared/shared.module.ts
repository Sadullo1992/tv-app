import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './components/search/search.component';
import { SortByCategoryPipe } from './pipes/sort-by-category.pipe';
import { SearchChannelPipe } from './pipes/search-channel.pipe';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SearchCountryPipe } from './pipes/search-country.pipe';
import { FindCountryByCodePipe } from './pipes/find-country-by-code.pipe';
import { SortByCountryPipe } from './pipes/sort-by-country.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    SortByCategoryPipe,
    SearchChannelPipe,
    SearchResultItemComponent,
    ClickOutsideDirective,
    SearchCountryPipe,
    FindCountryByCodePipe,
    SortByCountryPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    SearchComponent,
    SortByCategoryPipe,
    ClickOutsideDirective,
    SearchCountryPipe,
    FindCountryByCodePipe,
    SortByCategoryPipe,
    SortByCountryPipe,
  ],
})
export class SharedModule {}
