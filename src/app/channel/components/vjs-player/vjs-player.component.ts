import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import videoJs from 'video.js';
import 'videojs-hls-quality-selector';
import 'videojs-contrib-quality-levels';

@Component({
  selector: 'app-vjs-player',
  templateUrl: './vjs-player.component.html',
  styleUrls: ['./vjs-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('target', { static: true }) target!: ElementRef<Element>;

  @Input() options!: videoJs.PlayerOptions;

  player!: videoJs.Player;

  ngOnInit(): void {
    this.player = videoJs(
      this.target.nativeElement,
      {
        ...this.options,
        autoplay: true,
        controls: true,
      },
      function onPlayerReady() {
        this.volume(100);
      }
    );
    this.player.hlsQualitySelector({
      displayCurrentQuality: true,
    });
    this.player.fluid(true);
  }

  /**
   * Replaces the url source of the player with the changed source url
   * @param changes contains changed channel object
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'].previousValue) {
      this.player.src(changes['options'].currentValue.sources[0]);
    }
  }

  /**
   * Removes the players HTML reference on destroy
   */
  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }
}
