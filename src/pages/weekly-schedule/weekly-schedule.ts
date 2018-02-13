import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChangeShiftModalPage } from '../change-shift-modal/change-shift-modal';
import { ApiProvider } from '../../providers/api/api';
import { ScheduleNew } from '../../app/interfaces';

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
  thisWkSchedule: ScheduleNew[];
  nextWkSchedule: ScheduleNew[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, 
    public api: ApiProvider) {
      this.thisWkSchedule = api.thisWkSchedule;
      this.nextWkSchedule = api.nextWkSchedule;
      console.log(this.thisWkSchedule + " && " + this.nextWkSchedule);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklySchedulePage');
  }

  showChangeOptions(val){
    console.log(val);
    this.toggleBtn = "./assets/imgs/OUT_toggle.png";
    let changeShiftModal = this.modalCtrl.create(ChangeShiftModalPage);
    changeShiftModal.present();
  }

}

