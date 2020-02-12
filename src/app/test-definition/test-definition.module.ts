import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from './../material.module';

import { TestDefinitionPageRoutingModule } from './test-definition-routing.module';

import { TestDefinitionPage } from './test-definition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule, 
    IonicModule,
    TestDefinitionPageRoutingModule, MaterialModule
  ],
  declarations: [TestDefinitionPage]
})
export class TestDefinitionPageModule {}
