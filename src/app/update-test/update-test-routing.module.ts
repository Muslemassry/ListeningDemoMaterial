import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTestPage } from './update-test.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTestPageRoutingModule {}
