import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MaterialModule } from './../material.module';
import { SystemTestsPageRoutingModule } from './system-tests-routing.module';

import { SystemTestsPage } from './system-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    SystemTestsPageRoutingModule, MaterialModule
  ],
  declarations: [SystemTestsPage]
})
export class SystemTestsPageModule {}
