import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as moment from 'moment';

import { ChangeSchedulePage } from '../pages/change-schedule/change-schedule';
import { GtamenuPage } from '../pages/gtamenu/gtamenu';
import { NewHomePage } from '../pages/new-home/new-home';
import { PersonalDataPage } from '../pages/personal-data/personal-data';
import { ShiftTimes } from './interfaces';
import { ShiftDayPage } from '../pages/shift-day/shift-day';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NewHomePage;

  pages: Array<{title: string, component: any}>;
  newShift : ShiftTimes = {
    startTime: '00:00',
    endTime: '00:00',
    breakTime: '00:00',
    mealTime: '00:00'
  };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
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
  }
}