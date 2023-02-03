import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SortByCategoryPipe } from './pipes/sort-by-category.pipe';

@NgModule({
  declarations: [SearchComponent, SortByCategoryPipe],
  imports: [CommonModule],
  exports: [SearchComponent, SortByCategoryPipe],
})
export class SharedModule {}
