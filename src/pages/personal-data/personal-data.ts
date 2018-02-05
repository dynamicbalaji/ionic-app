import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonalDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-personal-data',
  templateUrl: 'personal-data.html',
})
export class PersonalDataPage {

  dob: string = "03/21/1982";
  maritalStatus: string = "0";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalDataPage');
  }

}
