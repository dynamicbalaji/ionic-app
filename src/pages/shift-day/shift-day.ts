import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ShiftStatus } from '../../app/enums';

/**
 * Generated class for the ShiftDayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shift-day',
  templateUrl: 'shift-day.html',
})
export class ShiftDayPage {

  shiftPercent: number = 33;
  curStatus : number;
  ShiftStatus: typeof ShiftStatus = ShiftStatus;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.curStatus = ShiftStatus.inprogress;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShiftDayPage');
  }

}
