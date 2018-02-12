import { Component, Renderer } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController, public renderer: Renderer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PunchOutModalPage');
  }

}
