import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestStepPageRoutingModule } from './test-step-routing.module';
import { MaterialModule } from './../material.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { LoadingSpinnerComponent } from './../ui/loading-spinner/loading-spinner.component'
import { AppDialogComponent } from './../modal/app-dialog/app-dialog.component'
import { TestStepPage } from './test-step.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestStepPageRoutingModule, MaterialModule
  ],
  declarations: [TestStepPage, LoadingSpinnerComponent, AppDialogComponent],
  providers: [
    ScreenOrientation
  ]
})
export class TestStepPageModule {}
