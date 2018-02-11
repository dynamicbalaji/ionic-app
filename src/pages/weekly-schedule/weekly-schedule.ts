import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChangeShiftModalPage } from '../change-shift-modal/change-shift-modal';

/**
 * Generated class for the WeeklySchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weekly-schedule',
  templateUrl: 'weekly-schedule.html',
})
export class WeeklySchedulePage {

  toggleBtn: string = "./assets/imgs/IN_toggle.png";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklySchedulePage');
  }

  showChangeOptions(){
    this.toggleBtn = "./assets/imgs/OUT_toggle.png";
    let changeShiftModal = this.modalCtrl.create(ChangeShiftModalPage);
    changeShiftModal.present();
  }

}

