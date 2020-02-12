import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { CommonAppModule } from './../common-app.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule, CommonAppModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
