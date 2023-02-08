import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortResultItemComponent } from './sort-result-item.component';

describe('SortResultItemComponent', () => {
  let component: SortResultItemComponent;
  let fixture: ComponentFixture<SortResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortResultItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
