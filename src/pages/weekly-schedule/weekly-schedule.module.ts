import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeeklySchedulePage } from './weekly-schedule';

@NgModule({
  declarations: [
    WeeklySchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(WeeklySchedulePage),
  ],
})
export class WeeklySchedulePageModule {}
