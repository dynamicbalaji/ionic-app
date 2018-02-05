import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeShiftModalPage } from './change-shift-modal';

@NgModule({
  declarations: [
    ChangeShiftModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeShiftModalPage),
  ],
})
export class ChangeShiftModalPageModule {}
