import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NotFoundPageComponent,
    FooterComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, SharedModule],
  exports: [
    RouterModule,
    HttpClientModule,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundPageComponent,
    LoadingSpinnerComponent,
  ],
})
export class CoreModule {}
