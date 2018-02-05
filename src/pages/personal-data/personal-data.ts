import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Associate } from '../../app/interfaces';
import { AssociateService } from '../../services/associate.service.mock';

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

  associate: Associate;
  dob: string = "03/21/1982";
  maritalStatus: string = "0";

  constructor(public navCtrl: NavController, public navParams: NavParams, public ascService: AssociateService) {
    this.ascService.getAsc().then(data => {console.log(JSON.stringify(data));this.associate = <Associate>data});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalDataPage');
  }

}
