import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      title: 'The newest movies and cartoons are on our site!',
      imgUrl: '../../../assets/images/carousel-img-1.png',
    },
    {
      title: 'The newest movies and cartoons are on our site!',
      imgUrl: '../../../assets/images/carousel-img-2.png',
    },
  ];

  currentIndex = 0;

  interval$ = interval(5000);

  subscription!: Subscription;

  ngOnInit(): void {
    this.switchInfinite();
  }

  setActiveSlide(index: number): void {
    this.currentIndex = index;
    this.subscription.unsubscribe();
    this.switchInfinite();
  }

  private switchInfinite(): void {
    this.subscription = this.interval$.subscribe(() => {
      this.goToNextSlide();
    });
  }

  private goToNextSlide(): void {
    this.currentIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
