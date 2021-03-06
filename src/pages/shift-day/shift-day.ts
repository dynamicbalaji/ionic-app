import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import * as moment from 'moment';

import { ShiftStatus } from '../../app/enums';
import {LateShiftEndmodalPage} from '../late-shift-endmodal/late-shift-endmodal';
import { NewHomePage } from '../new-home/new-home';
import { LNotificationProvider } from '../../providers/l-notification/l-notification';

/**
 * Generated class for the ShiftDayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shift-day',
  templateUrl: 'shift-day.html',
})
export class ShiftDayPage {

  shiftPercent: number = 0;
  curStatus : number;
  ShiftStatus: typeof ShiftStatus = ShiftStatus;
  shiftStartTime: string = "--:-- ";
  shiftEndTime: string = "--:-- ";
  title : string = "GOOD START";
  subTitle : string = "Keep it up";
  titleColor: string = "#1A75CF";
  subtitleColor: string = "#1A75CF";
  titleFontSize: string = "16";
  subtitleFontSize: string = "10";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
      public lNotification: LNotificationProvider) {
    this.curStatus = ShiftStatus.start;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShiftDayPage');
  }

  updateShift() {
    if(this.curStatus === ShiftStatus.start) {
      this.curStatus = ShiftStatus.inprogress;
      this.shiftPercent = 15;
      this.shiftStartTime = moment(new Date()).format('hh:mm A');
      this.shiftEndTime = moment(new Date()).add(8,'hours').format('hh:mm A');
    }
    else if(this.curStatus === ShiftStatus.inprogress && this.shiftPercent === 15){
      this.curStatus = ShiftStatus.mealbreak;
      this.shiftPercent = 30;
      this.title = "GOOD GOING SO FAR!"
    }
    else if(this.curStatus === ShiftStatus.mealbreak){
      this.curStatus = ShiftStatus.breakinprogress;
      this.shiftPercent = 40;
    }
    else if(this.curStatus === ShiftStatus.breakinprogress && this.shiftPercent === 40){
      this.curStatus = ShiftStatus.resume;
      this.shiftPercent = 50;
    }
    else if(this.curStatus === ShiftStatus.resume && this.shiftPercent === 50){
      this.curStatus = ShiftStatus.inprogress;
      this.shiftPercent = 65;
    }
    else if(this.curStatus === ShiftStatus.inprogress && this.shiftPercent === 65){
      this.curStatus = ShiftStatus.coffeebreak;
      this.shiftPercent = 70;
    }
    else if(this.curStatus === ShiftStatus.coffeebreak){
      this.curStatus = ShiftStatus.breakinprogress;
      this.shiftPercent = 75;
    }
    else if(this.curStatus === ShiftStatus.breakinprogress && this.shiftPercent === 75){
      this.curStatus = ShiftStatus.resume;
      this.shiftPercent = 80;
    }
    else if(this.curStatus === ShiftStatus.resume && this.shiftPercent === 80){
      this.curStatus = ShiftStatus.inprogress;
      this.shiftPercent = 85;
    }
    else if(this.curStatus === ShiftStatus.inprogress && this.shiftPercent === 85){
      this.curStatus = ShiftStatus.finish;
      this.shiftPercent = 100;
      //this.title = "YOU'VE NOT YET ENDED<br/> YOUR SHIFT"
      this.subTitle = "Logout on time and earn more points";
      console.log("ShftDay: "+ this.shiftPercent);
    }else if (this.curStatus === ShiftStatus.finish && this.shiftPercent === 100){
      //this.title = "YOU'VE NOT YET ENDED YOUR SHIFT"
      //this.subTitle = "Logout on time and earn more points";
      this.shiftEndTime = moment(new Date()).add(8,'hours').add(2,'minutes').format('hh:mm A');
      let endShiftModal = this.modalCtrl.create(LateShiftEndmodalPage, {shftProgress: this.shiftPercent});
      endShiftModal.present();
      this.navCtrl.setRoot(NewHomePage);
    }
  }
}
