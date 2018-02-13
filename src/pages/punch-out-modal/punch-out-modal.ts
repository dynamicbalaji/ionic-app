import { Component, Renderer } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/**
 * Generated class for the PunchOutModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-punch-out-modal',
  templateUrl: 'punch-out-modal.html',
})
export class PunchOutModalPage {

  time: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController, public renderer: Renderer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PunchOutModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  punchOut() {
    this.closeModal();
  }

}
