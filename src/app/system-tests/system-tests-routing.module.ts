import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemTestsPage } from './system-tests.page';

const routes: Routes = [
  {
    path: '',
    component: SystemTestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemTestsPageRoutingModule {}
