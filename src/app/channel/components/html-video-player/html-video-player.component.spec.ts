import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlVideoPlayerComponent } from './html-video-player.component';

describe('HtmlVideoPlayerComponent', () => {
  let component: HtmlVideoPlayerComponent;
  let fixture: ComponentFixture<HtmlVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlVideoPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
