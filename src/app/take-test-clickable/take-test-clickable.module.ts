import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from './../material.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { TakeTestClickablePageRoutingModule } from './take-test-clickable-routing.module';
import { TakeTestClickablePage } from './take-test-clickable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeTestClickablePageRoutingModule, MaterialModule
  ],
  declarations: [TakeTestClickablePage],
  providers: [
    ScreenOrientation
  ]
})
export class TakeTestClickablePageModule {}
