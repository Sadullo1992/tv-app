import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelPageComponent } from './pages/channel-page/channel-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: ChannelPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelRoutingModule {}
