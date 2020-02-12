import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainDashBoardPageRoutingModule } from './main-dash-board-routing.module';

import { MainDashBoardPage } from './main-dash-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainDashBoardPageRoutingModule
  ],
  declarations: [MainDashBoardPage]
})
export class MainDashBoardPageModule {}
