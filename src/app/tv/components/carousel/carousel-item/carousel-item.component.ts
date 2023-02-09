import { Component, Input } from '@angular/core';
import { Slide } from 'src/app/tv/models/slide.model';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
  @Input() item!: Slide;
  @Input() isEven!: boolean;
}
