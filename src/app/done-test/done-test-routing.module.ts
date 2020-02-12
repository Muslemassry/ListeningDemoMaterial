import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoneTestPage } from './done-test.page';

const routes: Routes = [
  {
    path: '',
    component: DoneTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoneTestPageRoutingModule {}
