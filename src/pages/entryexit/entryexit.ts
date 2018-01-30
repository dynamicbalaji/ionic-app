import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntryexitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entryexit',
  templateUrl: 'entryexit.html',
})
export class EntryexitPage {

  checkin: boolean = false;
  checkout: boolean = false;
  breaktime: boolean = false;
  scheduledTime: string = "00:00";
  myTime: string = "00:00";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.scheduledTime = "19:00";
     this.myTime = "19:00";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryexitPage');
  }

}
