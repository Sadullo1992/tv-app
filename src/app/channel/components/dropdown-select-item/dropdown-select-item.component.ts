import { Component, Input } from '@angular/core';
import { DropdownCategory } from 'src/app/core/models/dropdownData.model';

@Component({
  selector: 'app-dropdown-select-item',
  templateUrl: './dropdown-select-item.component.html',
  styleUrls: ['./dropdown-select-item.component.scss'],
})
export class DropdownSelectItemComponent {
  @Input() item!: DropdownCategory;
}
