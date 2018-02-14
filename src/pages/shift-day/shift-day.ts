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

  shiftPercent: number = 0;
  curStatus : number;
  ShiftStatus: typeof ShiftStatus = ShiftStatus;
  shiftStartTime: string = "--:-- PM";
  shiftEndTime: string = "--:-- AM";
  title : string = "GOOD GOING SO FAR";
  subTitle : string = "Keep it up";
  titleColor: string = "#1A75CF";
  subtitleColor: string = "#1A75CF";
  titleFontSize: string = "16";
  subtitleFontSize: string = "8";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.curStatus = ShiftStatus.start;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShiftDayPage');
  }

}
