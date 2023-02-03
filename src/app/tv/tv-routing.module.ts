import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TvCategoryComponent } from './components/tv-category/tv-category.component';
import { TvPagesComponent } from './pages/tv-pages/tv-pages.component';

const routes: Routes = [
  { path: '', redirectTo: 'tv', pathMatch: 'full' },
  {
    path: 'tv',
    component: TvPagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: ':id', component: TvCategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvRoutingModule {}
