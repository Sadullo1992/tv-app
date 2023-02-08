import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortResultComponent } from './sort-result.component';

describe('SortResultComponent', () => {
  let component: SortResultComponent;
  let fixture: ComponentFixture<SortResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
