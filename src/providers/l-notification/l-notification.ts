//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/*
  Generated class for the LNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LNotificationProvider {

  notifications: any[] = [];

  constructor(public platform: Platform,public alertCtrl: AlertController, 
              public localNotifications: LocalNotifications) {
    console.log('Hello LNotificationProvider Provider');
  }

  addNotification(notifyid: number, msg: string) {

    let notification = {
      id: notifyid,
      title: 'Hi, Debra!',
      text: msg,
      at: new Date().setMinutes((new Date().getMinutes() + notifyid), 0, 0)
    };

    this.notifications.push(notification);
    console.log("Notification added to array: ", notification);
  }

  scheduleNotifications() : boolean {

    let isScheduled: boolean = false;

    if (this.platform.is('cordova')) {
      // Cancel any existing notifications
      this.localNotifications.cancelAll().then(() => {

        // Schedule the new notifications
        this.localNotifications.schedule(this.notifications);
        console.log("Notifications are scheduled: " + this.notifications);
        this.notifications = [];
      });

      isScheduled = true;

    } else {
      console.log("Not a Cordova platform: "+ this.notifications);
      isScheduled = false;
    }

    return isScheduled;
  }

  scheduleNotification(notification) : boolean {

    let isScheduled: boolean = false;

    if (this.platform.is('cordova')) {
      // Cancel any existing notifications
      //this.localNotifications.cancelAll().then(() => {

        // Schedule the new notifications
        this.localNotifications.schedule(notification);
        console.log("Notifications are scheduled: " + notification);
        //this.notifications = [];
      //});

      isScheduled = true;

    } else {
      console.log("Not a Cordova platform: "+ this.notifications);
      isScheduled = false;
    }

    return isScheduled;
  }


  cancelAll() {
    this.localNotifications.cancelAll();

    /* let alert = this.alertCtrl.create({
        title: 'Notifications cancelled',
        buttons: ['Ok']
    }); */

    //alert.present();
  }

  clearNotification(notificationId: number){
      return this.localNotifications.clear(notificationId);
  }
  

}
