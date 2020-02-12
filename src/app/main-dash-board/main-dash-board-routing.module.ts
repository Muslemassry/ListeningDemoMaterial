import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDashBoardPage } from './main-dash-board.page';

const routes: Routes = [
  {
    path: '',
    component: MainDashBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDashBoardPageRoutingModule {}
