import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { App } from 'ionic-angular';

/**
 * Generated class for the EntryexitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entryexit',
  templateUrl: 'entryexit.html',
})
export class EntryexitPage {

  checkin: boolean = false;
  checkout: boolean = false;
  breaktime: boolean = false;
  // Testing purpose
  scheduledTime: string = "00:00";
  myTime: string = "00:00";
  buttonColor: string = "primary";
  showMessage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
     this.scheduledTime = moment().format('HH:mm');
     this.myTime = moment().format('HH:mm');
     console.log(moment().format('HH:mm'));
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryexitPage');
  }

  validate(){
    if(this.scheduledTime === this.myTime){
      console.log("Matched scheduled time: "+ this.scheduledTime + ", "+ this.myTime);
      this.buttonColor = "secondary";
      this.showMessage = true;
    }else{
      this.buttonColor = "danger";
    }

    this.app.getActiveNav().popToRoot();
  }

}
