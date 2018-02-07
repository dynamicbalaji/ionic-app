import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';

import { WeeklySchedulePage } from '../weekly-schedule/weekly-schedule';
import { PunchMissedPage } from '../punch-missed/punch-missed';
import * as moment from 'moment';

import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Generated class for the NewHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-home',
  templateUrl: 'new-home.html',
})
export class NewHomePage {

  notifications: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
  public alertCtrl: AlertController, public localNotifications: LocalNotifications) {

    this.addNotification(2, 'You have entered the Walmart store. Please login and start your shift.');
    this.addNotification(5, 'Your Meal break is coming up in 5 minutes, kindly take the needed break. Enjoy your meal! ');
    this.addNotification(16, 'You have not yet ended your shift.'); // Delayed to show crossed time

    console.log('Default Notification time - from HOME: '+ moment(new Date()).format());

    this.scheduleNotifications();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewHomePage');
  }

  viewSchedule(){
    this.navCtrl.push(WeeklySchedulePage);
  }


  viewPunchMissed(){
    this.navCtrl.push(PunchMissedPage);
  }


  addNotification(notifyid: number, msg: string){

    let notification = {
        id: notifyid,
        title: 'Hi, Emily!',
        text: msg,
        at: new Date().setMinutes((new Date().getMinutes() + notifyid),0,0)
    };

    this.notifications.push(notification);
    console.log("Notification added to array: ", notification);
  }

  scheduleNotifications(){  
 
    if(this.platform.is('cordova')){
        // Cancel any existing notifications
        this.localNotifications.cancelAll().then(() => {
 
            // Schedule the new notifications
            this.localNotifications.schedule(this.notifications);
            console.log("Notifications are scheduled: "+ this.notifications);
            this.notifications = [];
 
            let alert = this.alertCtrl.create({
                title: 'Notifications setup success!',
                buttons: ['OK']
            });
 
            alert.present(); 
        });
 
    }else{
      console.log("Not a Cordova platform: "+ this.notifications);
            // let alert = this.alertCtrl.create({
            //     title: 'Notifications not set !',
            //     buttons: ['OK']
            // });
 
            // alert.present(); 
    }
  }
 
  cancelAll(){
    this.localNotifications.cancelAll();
 
    let alert = this.alertCtrl.create({
        title: 'Notifications cancelled',
        buttons: ['Ok']
    });
 
    alert.present();
  }


}
