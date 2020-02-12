import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepPageRoutingModule } from './step-routing.module';
import { MaterialModule } from './../material.module';
import { StepPage } from './step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, 
    IonicModule,
    StepPageRoutingModule, MaterialModule
  ],
  declarations: [StepPage]
})
export class StepPageModule {}
