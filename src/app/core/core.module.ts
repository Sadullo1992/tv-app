import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, NotFoundPageComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, HeaderComponent, NavbarComponent, FooterComponent, NotFoundPageComponent],
})
export class CoreModule {}
