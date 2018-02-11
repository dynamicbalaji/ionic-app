import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';

import { ChangeSchedulePage } from '../change-schedule/change-schedule';
import { LocalNotifications } from '@ionic-native/local-notifications';

export interface Actions {
  action: string;
  icon: string;
  title1?: string;
  title2?: string;
  subTitle1?: string;
  subTitle2?: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // notifications: any[] = [];
  // notificationMinute: number;
  // notifyTime: any;

  allActions: Actions[] = [
    {action:'Clocked Hours', icon:'clock', title1:'22 hours', subTitle1: '15th-31th Jan 2018'},
    {action:'Schedule for next 7 days', icon:'calendar', title1:'Today', subTitle1: '7am-4pm', title2:'Tomorrow', subTitle2: '11am-8pm'},
    {action:'Punches Missed', icon:'card', title1:'2 days'},
    {action:'Available Shifts', icon:'alarm', title1:'15th Jan', subTitle1: '7am-4pm', title2:'16th Jan', subTitle2: '11am-8pm'},
    {action:'Pay Stubs', icon:'cash'}
  ];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    public localNotifications: LocalNotifications, public platform: Platform) {

      //this.notifyTime = moment(new Date()).format();
      //this.notificationMinute = new Date().getMinutes()+2 // adding 2 mins;
      //console.log('Default Notification time: '+ this.notifyTime);
      //this.addNotification();
    
  }

  openAction(action) {
      this.navCtrl.push(ChangeSchedulePage, action);
  }

  // addNotification(){
  //   let firstNotificationTime = new Date();
  //   firstNotificationTime.setMinutes(this.notificationMinute);

  //   let notification = {
  //       id: firstNotificationTime.getDay,
  //       title: 'Hey!',
  //       text: 'You just got notified :)',
  //       at: firstNotificationTime
  //   };

  //   this.notifications.push(notification);
  
  //   console.log("Notifications to be scheduled: ", this.notifications);
 
  //   if(this.platform.is('cordova')){
 
  //       // Cancel any existing notifications
  //       this.localNotifications.cancelAll().then(() => {
 
  //           // Schedule the new notifications
  //           this.localNotifications.schedule(this.notifications);
 
  //           this.notifications = [];
 
  //           let alert = this.alertCtrl.create({
  //               title: 'Notifications set',
  //               buttons: ['Ok']
  //           });
 
  //           alert.present();
 
  //       });
 
  //   }
  // }

  // postponeNotifications(){

  // }
 
  // cancelAll(){
  //   this.localNotifications.cancelAll();
 
  //   let alert = this.alertCtrl.create({
  //       title: 'Notifications cancelled',
  //       buttons: ['Ok']
  //   });
 
  //   alert.present();
  // }

}
