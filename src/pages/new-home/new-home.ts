import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';

import { WeeklySchedulePage } from '../weekly-schedule/weekly-schedule';
import { PunchMissedPage } from '../punch-missed/punch-missed';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';
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
  notificationMinute: number;
  notifyTime: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
              public localNotifications: LocalNotifications, public platform: Platform) {

      this.notifyTime = moment(new Date()).format();
      this.notificationMinute = new Date().getMinutes()+2 // adding 2 mins;
      console.log('Default Notification time: '+ this.notifyTime);
      this.addNotification();

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


  addNotification(){
    let firstNotificationTime = new Date();
    firstNotificationTime.setMinutes(this.notificationMinute);

    /* let notification = {
        id: firstNotificationTime.getDay,
        title: 'Hey!',
        text: 'You just got notified :)',
        at: firstNotificationTime
    };

    this.notifications.push(notification); */
  
    console.log("Notifications to be scheduled: ", this.notifications);
 
    if(this.platform.is('cordova')){
 
        // Cancel any existing notifications
        this.localNotifications.cancelAll().then(() => {
 
            // Schedule the new notifications
            this.localNotifications.schedule(this.notifications);
 
            this.notifications = [];
 
            /* let alert = this.alertCtrl.create({
                title: 'Notifications set',
                buttons: ['Ok']
            });
 
            alert.present(); */
 
        });
 
    }
  }

  postponeNotifications(){

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
