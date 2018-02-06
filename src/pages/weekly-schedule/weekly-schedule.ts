import { Component, Renderer } from '@angular/core';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklySchedulePage');
  }

  showChangeOptions(){
    let changeShiftModal = this.modalCtrl.create(ChangeShiftModalPage);
    changeShiftModal.present();
  }

}

