import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectItemComponent } from './dropdown-select-item.component';

describe('DropdownSelectItemComponent', () => {
  let component: DropdownSelectItemComponent;
  let fixture: ComponentFixture<DropdownSelectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownSelectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
