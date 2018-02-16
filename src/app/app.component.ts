import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Geofence } from '@ionic-native/geofence';
import * as moment from 'moment';
import { Events } from 'ionic-angular';

import { NewHomePage } from '../pages/new-home/new-home';
import { PersonalDataPage } from '../pages/personal-data/personal-data';
import { ShiftTimes } from './interfaces';
import { ShiftDayPage } from '../pages/shift-day/shift-day';
import { WelcomeLoginPage } from '../pages/welcome-login/welcome-login';
import { LNotificationProvider } from '../providers/l-notification/l-notification';
import { BenefitsPage } from '../pages/benefits/benefits';
import { PerformancePage } from '../pages/performance/performance';
import { TrainingPage } from '../pages/training/training';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomeLoginPage;
  firstName: string = "Debra";
  lastName: string = "Jackson";

  pages: Array<{title: string, component: any, selected: boolean}>;
 
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  public lNotifications: LNotificationProvider, public events: Events) {
    this.initializeApp();
    //this.initializeShiftTimes();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'DASHBOARD', component: NewHomePage, selected: true },
      { title: 'PERSONAL DATA', component: PersonalDataPage, selected: false },
      { title: 'TRAINING', component: TrainingPage, selected: false },
      { title: 'PERFORMANCE', component: PerformancePage, selected: false },
      { title: 'BENEFITS & REWARDS', component: BenefitsPage, selected: false },
      { title: 'SHIFT DAY', component: ShiftDayPage, selected: false }
    ];
    events.subscribe('user:created', (empNbr, firstName, lastName) => {
      console.log(lastName);
      this.firstName = firstName;
      this.lastName = lastName;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.lNotifications.platform.ready().then((readySource) => {
      this.lNotifications.localNotifications.on('click', (notification, state) => {
        let json = JSON.parse(notification);
        console.log("Notification Clicked.." + json);
        this.lNotifications.clearNotification(notification.id);
        this.openPage(ShiftDayPage);
      })
    });

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    for(let p of this.pages) {
      p.selected = (p.title == page.title) ? true : false;
    }
  }


  // initializeShiftTimes(){
  //   this.currentShift.startTime = moment().add(2, 'minutes').format('hh:mm A');
  //   //let notificationTime = new Date();
  //   //notificationTime.setMinutes((new Date().getMinutes() + 2), 0,0);
  //   //this.addNotification(2, 'You have entered the Walmart store. Please login and start your shift.');

  //   this.currentShift.mealTime = moment().add(10,'minutes').format('hh:mm A');
  //   //this.addNotification(5, 'Your Meal break is coming up in 5 minutes, kindly take the needed break. Enjoy your meal! ');

  //   this.currentShift.breakTime1 = moment().add(12,'minutes').format('hh:mm A');
  //   this.currentShift.endTime = moment().add(15,'minutes').format('hh:mm A');
  //   //this.addNotification(16, 'You have not yet ended your shift.'); // Delayed to show crossed time

  //   console.log("Initialized new shift times: "+ this.currentShift.startTime + ", "+ 
  //           this.currentShift.mealTime + ", "+ this.currentShift.breakTime1 + ", "+ this.currentShift.endOnTime);    
  //   console.log('Default Notification time: '+ moment(new Date()).format());
  //   //console.log('Moment adding 2 mins: '+ moment().add(2, 'minutes').toLocaleString());
    
  // }
  
}