import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Hls from 'hls.js';

@Component({
  selector: 'app-html-video-player',
  templateUrl: './html-video-player.component.html',
  styleUrls: ['./html-video-player.component.scss'],
})
export class HtmlVideoPlayerComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() streamUrl: string | undefined;

  @ViewChild('videoPlayer', { static: false })
  videoPlayer!: ElementRef<HTMLVideoElement>;

  hls!: Hls;

  ngAfterViewInit(): void {
    // this.playChannel(this.streamUrl);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['streamUrl'] && !changes['streamUrl'].firstChange) {
      this.playChannel(changes['streamUrl'].currentValue);
      // console.log(changes['channel']);
      // console.log(this.streamUrl);
    }
  }

  playChannel(streamUrl: string): void {
    if (this.hls) this.hls.destroy();
    const url = streamUrl;
    if (Hls && Hls.isSupported()) {
      console.log('... switching channel to ', url);
      this.hls = new Hls();
      this.hls.attachMedia(this.videoPlayer.nativeElement);
      this.hls.loadSource(url);
      this.handlePlayOperation();
    } else {
      console.error('something wrong with hls.js init...');
    }
  }

  disableCaptions(): void {
    for (let i = 0; i < this.videoPlayer.nativeElement.textTracks.length; i++) {
      this.videoPlayer.nativeElement.textTracks[i].mode = 'hidden';
    }
  }

  handlePlayOperation(): void {
    const playPromise = this.videoPlayer.nativeElement.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Automatic playback started!
          // if (!this.showCaptions) {
          //   this.disableCaptions();
          // }
        })
        .catch(() => {});
    }
  }

  ngOnDestroy(): void {
    if (this.hls) {
      this.hls.destroy();
    }
  }
}
