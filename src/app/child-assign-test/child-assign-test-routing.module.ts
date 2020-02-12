import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildAssignTestPage } from './child-assign-test.page';

const routes: Routes = [
  {
    path: '',
    component: ChildAssignTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildAssignTestPageRoutingModule {}
