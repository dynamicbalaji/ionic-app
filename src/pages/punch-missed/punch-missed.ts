import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { PunchOutModalPage } from '../punch-out-modal/punch-out-modal';

/**
 * Generated class for the PunchMissedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-punch-missed',
  templateUrl: 'punch-missed.html',
})
export class PunchMissedPage {

  punchMissed: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public modalCtrl: ModalController) {
    this.punchMissed = [
      //{punchDate: 'Friday, 28 Jan 2018', punchTime: '1:30 AM'},
      {punchDate: 'Saturday, 29 Jan 2018', punchTime: '1:30 AM'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PunchMissedPage');
  }

  showPunchOut() {
    let punchOutModal = this.modalCtrl.create(PunchOutModalPage);
    punchOutModal.present();
  }

}
