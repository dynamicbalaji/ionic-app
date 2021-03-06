import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

import { ChangeScheduleDonePage } from '../change-schedule-done/change-schedule-done';

/**
 * Generated class for the ChangeSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-change-schedule',
  templateUrl: 'change-schedule.html',
})
export class ChangeSchedulePage {

  date: string;
  startTime: string;
  endTime: string;
  scheduleDate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scheduleDate = moment().format('dddd, Do MMM YYYY');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeSchedulePage');
  }

  showSuccess() {
    this.navCtrl.push(ChangeScheduleDonePage);
  }

}
