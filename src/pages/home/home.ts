import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChangeSchedulePage } from '../change-schedule/change-schedule';

export interface Actions {
  action: string;
  icon: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allActions: Actions[] = [
    {action:'Clocked Hours', icon:'clock.png'},
    {action:'Schedule for next 7 days', icon:'schedule.png'},
    {action:'Punches Missed', icon:'schedule.png'},
    {action:'Available Shifts', icon:'shifts.jpg'},
    {action:'Pay Stubs', icon:'payslip.png'}
  ];

  constructor(public navCtrl: NavController) {

  }

  openAction(action) {
      this.navCtrl.push(ChangeSchedulePage, action);
  }

}
