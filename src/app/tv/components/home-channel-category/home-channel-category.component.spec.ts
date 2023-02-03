import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChannelCategoryComponent } from './home-channel-category.component';

describe('HomeChannelCategoryComponent', () => {
  let component: HomeChannelCategoryComponent;
  let fixture: ComponentFixture<HomeChannelCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChannelCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChannelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
