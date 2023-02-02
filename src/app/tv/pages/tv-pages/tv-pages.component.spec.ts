import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPagesComponent } from './tv-pages.component';

describe('TvPagesComponent', () => {
  let component: TvPagesComponent;
  let fixture: ComponentFixture<TvPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
