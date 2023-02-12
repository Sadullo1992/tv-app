import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareMenuStateService } from '../../services/share-menu-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  innerWidth = 0;

  categories = ['news', 'sports', 'music', 'kids', 'movies', 'series'];

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private shareMenuStateService: ShareMenuStateService) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  closeNavbar() {
    if (this.innerWidth < 991) {
      this.shareMenuStateService.shareData(false);
    }
  }
}
