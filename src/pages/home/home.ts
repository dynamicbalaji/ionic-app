import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChangeSchedulePage } from '../change-schedule/change-schedule';

export interface Actions {
  action: string;
  icon: string;
  title1?: string;
  title2?: string;
  subTitle1?: string;
  subTitle2?: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allActions: Actions[] = [
    {action:'Clocked Hours', icon:'clock', title1:'22 hours', subTitle1: '15th-31th Jan 2018'},
    {action:'Schedule for next 7 days', icon:'calendar', title1:'Today', subTitle1: '7am-4pm', title2:'Tomorrow', subTitle2: '11am-8pm'},
    {action:'Punches Missed', icon:'card', title1:'2 days'},
    {action:'Available Shifts', icon:'alarm', title1:'15th Jan', subTitle1: '7am-4pm', title2:'16th Jan', subTitle2: '11am-8pm'},
    {action:'Pay Stubs', icon:'cash'}
  ];

  constructor(public navCtrl: NavController) {

  }

  openAction(action) {
      this.navCtrl.push(ChangeSchedulePage, action);
  }

}
