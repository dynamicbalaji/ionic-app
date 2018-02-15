import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ChangeShiftModalPage } from '../change-shift-modal/change-shift-modal';
import { ApiProvider } from '../../providers/api/api';
import { ScheduleNew } from '../../app/interfaces';

/**
 * Generated class for the WeeklySchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  showShiftChangeOptions(schedule: ScheduleNew){
    console.log(schedule);
    //console.log(document.getElementById('imgCWId'+val));
    if(schedule != undefined && (!schedule.isOptedLOA && !schedule.isWeeklyOff)){
      let changeShiftModal = this.modalCtrl.create(ChangeShiftModalPage, 
                {toChgSchedule: schedule}, { enableBackdropDismiss: true });
      changeShiftModal.present();

      changeShiftModal.onDidDismiss((data) => {
          console.log(data);
      });
    }else{
      console.log("OptedLOA or Weekly off and cannot be modified!");
    }

    //let imgTag = document.getElementById('imgCWId'+val) as HTMLImageElement;
    //imgTag.src = "./assets/imgs/OUT_toggle.png"

  }

}

