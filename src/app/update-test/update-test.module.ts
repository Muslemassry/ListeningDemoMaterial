import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTestPageRoutingModule } from './update-test-routing.module';
import { MaterialModule } from './../material.module';
import { UpdateTestPage } from './update-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, 
    IonicModule,
    UpdateTestPageRoutingModule, MaterialModule
  ],
  declarations: [UpdateTestPage]
})
export class UpdateTestPageModule {}
