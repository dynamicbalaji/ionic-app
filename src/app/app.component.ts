import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';

import { ChangeSchedulePage } from '../pages/change-schedule/change-schedule';
import { GtamenuPage } from '../pages/gtamenu/gtamenu';
import { NewHomePage } from '../pages/new-home/new-home';
import { PersonalDataPage } from '../pages/personal-data/personal-data';
import { ShiftTimes } from './interfaces';
import { ShiftDayPage } from '../pages/shift-day/shift-day';
import { VoiceEnablePage } from '../pages/voice-enable/voice-enable';
import { WelcomeLoginPage } from '../pages/welcome-login/welcome-login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomeLoginPage;

  pages: Array<{title: string, component: any}>;
  newShift : ShiftTimes = {
    startTime: '00:00',
    endTime: '00:00',
    breakTime: '00:00',
    mealTime: '00:00'
  };

  notifications: any[] = [];
  notificationMinute: number;
  notifyTime: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public alertCtrl: AlertController, public localNotifications: LocalNotifications) {
    this.initializeApp();
    this.initializeShiftTimes();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'DASHBOARD', component: NewHomePage },
      { title: 'PERSONAL DATA', component: PersonalDataPage },
      { title: 'TRAINING', component: NewHomePage },
      { title: 'PERFORMANCE', component: NewHomePage },
      { title: 'BENEFITS & REWARDS', component: NewHomePage },
      { title: 'Change Schedule', component: ChangeSchedulePage },
      { title: 'GTAMenu', component: GtamenuPage },
      { title: 'Shift Day', component: ShiftDayPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {'shiftTimes': this.newShift});
  }

  initializeShiftTimes(){
    this.newShift.startTime = moment().format('hh:mm A');
    this.newShift.mealTime = moment().add(5,'minutes').format('hh:mm A');
    this.newShift.breakTime = moment().add(10,'minutes').format('hh:mm A');
    this.newShift.endTime = moment().add(15,'minutes').format('hh:mm A');

    console.log("Initialized new shift times: "+ this.newShift.startTime + ", "+ 
            this.newShift.endTime + this.newShift.breakTime + ", "+ this.newShift.mealTime);

    this.notifyTime = moment(new Date()).format();
    this.notificationMinute = new Date().getMinutes() + 2 // adding 2 mins;
    console.log('Default Notification time: '+ this.notifyTime);
    this.addNotification();
  }

  addNotification(){
    let firstNotificationTime = new Date();
    firstNotificationTime.setMinutes(this.notificationMinute);

    let notification = {
        id: firstNotificationTime.getDay,
        title: 'Hey!',
        text: 'You just got notified :)',
        at: firstNotificationTime
    };

    this.notifications.push(notification);
  
    console.log("Notifications to be scheduled: ", this.notifications);
 
    if(this.platform.is('cordova')){
 
        // Cancel any existing notifications
        this.localNotifications.cancelAll().then(() => {
 
            // Schedule the new notifications
            this.localNotifications.schedule(this.notifications);
 
            this.notifications = [];
 
            let alert = this.alertCtrl.create({
                title: 'Notifications set',
                buttons: ['Ok']
            });
 
            alert.present();
 
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