import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from './../material.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { TakeTestPageRoutingModule } from './take-test-routing.module';
import { TakeTestPage } from './take-test.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeTestPageRoutingModule, MaterialModule
  ],
  declarations: [TakeTestPage],
  providers: [
    ScreenOrientation
  ]
})
export class TakeTestPageModule {}
