import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownCategory } from 'src/app/core/models/dropdownData.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() isSearchFeature = false;

  @Input() dropdownCategories: DropdownCategory[] = [];

  @Output() sort = new EventEmitter<string>();

  activeSortType = '';

  isDropped = false;

  query = '';

  ngOnInit(): void {
    this.activeSortType = this.dropdownCategories[0].name;
  }

  toggleDropdown(): void {
    this.isDropped = !this.isDropped;
  }

  selectSortType(item: DropdownCategory) {
    this.activeSortType = item.name;
    this.sort.emit(item.value);
    this.isDropped = false;
  }

  onSearch(value: string): void {
    this.query = value;
  }
}
