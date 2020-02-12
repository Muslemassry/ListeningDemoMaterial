import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeTestClickablePage } from './take-test-clickable.page';

const routes: Routes = [
  {
    path: '',
    component: TakeTestClickablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeTestClickablePageRoutingModule {}
