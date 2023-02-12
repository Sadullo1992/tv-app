import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, NotFoundPageComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, SharedModule],
  exports: [
    RouterModule,
    HttpClientModule,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundPageComponent,
  ],
})
export class CoreModule {}
