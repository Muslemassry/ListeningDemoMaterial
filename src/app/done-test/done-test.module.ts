import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoneTestPageRoutingModule } from './done-test-routing.module';
import { MaterialModule } from './../material.module';
import { DoneTestPage } from './done-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoneTestPageRoutingModule, MaterialModule
  ],
  declarations: [DoneTestPage]
})
export class DoneTestPageModule {}
