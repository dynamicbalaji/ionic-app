import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { WeeklySchedulePage } from '../weekly-schedule/weekly-schedule';
import * as moment from 'moment';
/**
 * Generated class for the NewHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-home',
  templateUrl: 'new-home.html',
})
export class NewHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewHomePage');
  }

  viewSchedule(){
    this.navCtrl.push(WeeklySchedulePage);
  }

}
