import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildAssignTestPageRoutingModule } from './child-assign-test-routing.module';
import { MaterialModule } from './../material.module';
import { ChildAssignTestPage } from './child-assign-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, 
    IonicModule,
    ChildAssignTestPageRoutingModule,
    MaterialModule
  ],
  declarations: [ChildAssignTestPage]
})
export class ChildAssignTestPageModule {}
