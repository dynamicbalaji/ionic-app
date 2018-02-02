import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import * as moment from 'moment';
import {ShiftTimes} from 'ShiftTimes';

/**
 * Generated class for the GtamenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gtamenu',
  templateUrl: 'gtamenu.html',
})
export class GtamenuPage {

  startTime: string = "--:--";
  endTime: string = "--:--";
  startShift: boolean = false;
  endShift: boolean = false;
  mealTime: boolean = false;
  breakTime: boolean = false;
  // Initialized as part of startup
  shiftTimes: ShiftTimes;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.startShift = true;
    this.shiftTimes = navParams.get('shiftTimes');
    console.log(this.shiftTimes);

    // Enable shift if matches
    if(this.checkTimeMatch(this.shiftTimes.startTime, moment().format('hh:mm A'))){
      console.log("Shift started.. Enabling checkin button");
      this.startShift = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GtamenuPage');
  }

  onButtonClick(action){
    console.log("Action : "+ action);
    if (action === 'start'){
      this.startTime = moment().format('hh:mm A');
      if(this.checkTimeMatch(this.shiftTimes.startTime, this.startTime)){
        console.log ("Started shift on time! ");
        this.showAlert("Your Shift started successfully. Have a wonderful day!");
        // Redirect to home screen
      }else{ 
        this.showAlert("Your Shift started with delay!");
      }
      this.startShift = false;
      //this.mealTime = true;
    }else if (action === 'meal'){
      this.mealTime = false;
      this.breakTime = true;
    }else if (action === 'break'){
      this.breakTime = false;
      this.endShift = true;
    }else if (action === 'end'){
      this.endTime = moment().format('hh:mm A');
      this.endShift = false;
    }
    
  }


  showAlert(msg: string) {
    let alert = this.alertCtrl.create({
      title: 'Hi Emily!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  

  checkTimeMatch(clockinTime: string, shiftTime: string) : boolean{
    return (clockinTime === shiftTime);    
  }
}
