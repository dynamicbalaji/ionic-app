import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import * as moment from 'moment';

import { ShiftStatus } from '../../app/enums';
import {LateShiftEndmodalPage} from '../late-shift-endmodal/late-shift-endmodal';
import { NewHomePage } from '../new-home/new-home';

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
  shiftStartTime: string = "--:-- PM";
  shiftEndTime: string = "--:-- AM";
  title : string = "GOOD GOING SO FAR";
  subTitle : string = "Keep it up";
  titleColor: string = "#1A75CF";
  subtitleColor: string = "#1A75CF";
  titleFontSize: string = "16";
  subtitleFontSize: string = "8";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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
      /* setTimeout(function () {  
        alert('murugan');
        this.curStatus = ShiftStatus.mealbreak;
        this.shiftPercent = 30;
      }, 5000); */
    }
    else if(this.curStatus === ShiftStatus.inprogress && this.shiftPercent === 15){
      this.curStatus = ShiftStatus.mealbreak;
      this.shiftPercent = 30;
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
      console.log("ShftDay: "+ this.shiftPercent);
    }else if (this.curStatus === ShiftStatus.finish && this.shiftPercent === 100){
      this.shiftEndTime = moment(new Date()).add(8,'hours').format('hh:mm A');
      let endShiftModal = this.modalCtrl.create(LateShiftEndmodalPage, {shftProgress: this.shiftPercent});
      endShiftModal.present();
      this.navCtrl.push(NewHomePage);
    }
  }
}
