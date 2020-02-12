import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestStepPage } from './test-step.page';

const routes: Routes = [
  {
    path: '',
    component: TestStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestStepPageRoutingModule {}
