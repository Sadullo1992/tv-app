import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareMenuStateService } from '../../services/share-menu-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isActive = false;

  isSearching = false;

  subscription!: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private shareMenuStateService: ShareMenuStateService
  ) {}

  ngOnInit(): void {
    this.getMenuState();
  }

  toggleMenu() {
    this.isActive = !this.isActive;
    this.switcher();
  }

  closeNavbar() {
    this.isActive = false;
    this.switcher();
  }

  toggleSearch() {
    this.isSearching = !this.isSearching;
  }

  private switcher() {
    if (this.isActive) {
      this.document.body.setAttribute('data-menu', `${this.isActive}`);
    } else {
      this.document.body.removeAttribute('data-menu');
    }
  }

  private getMenuState(): void {
    this.subscription = this.shareMenuStateService.getData().subscribe((state) => {
      this.isActive = state;
      this.switcher();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
