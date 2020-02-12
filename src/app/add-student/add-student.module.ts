import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddStudentPageRoutingModule } from './add-student-routing.module';

import { AddStudentPage } from './add-student.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { CommonAppModule } from './../common-app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    AddStudentPageRoutingModule, CommonAppModule
  ],
  declarations: [AddStudentPage]
})
export class AddStudentPageModule {}
