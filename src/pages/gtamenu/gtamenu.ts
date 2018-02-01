import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the GtamenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gtamenu',
  templateUrl: 'gtamenu.html',
})
export class GtamenuPage {

  activeMenuColor: string = "secondary";
  inactiveMenuColor: string = "inactive";
  startTime: string = "--:--";
  endTime: string = "--:--";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GtamenuPage');
  }

  onStartClick(){
    this.startTime = moment().format('hh:mm A');
  }

  onEndClick(){
    this.endTime = moment().format('hh:mm A');
  }

}
