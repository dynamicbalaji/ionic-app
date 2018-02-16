import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { NewHomePage } from '../pages/new-home/new-home';
import { PersonalDataPage } from '../pages/personal-data/personal-data';
import { ShiftDayPage } from '../pages/shift-day/shift-day';
import { WelcomeLoginPage } from '../pages/welcome-login/welcome-login';
import { LNotificationProvider } from '../providers/l-notification/l-notification';
import { BenefitsPage } from '../pages/benefits/benefits';
import { PerformancePage } from '../pages/performance/performance';
import { TrainingPage } from '../pages/training/training';
import { LogoutPage } from '../pages/logout/logout';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomeLoginPage;
  firstName: string = "Debra";
  lastName: string = "Jackson";
  imgSrc: string = "";
  jobTitle: string = "";

  pages: Array<{title: string, component: any, selected: boolean}>;
 
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  public lNotifications: LNotificationProvider, public events: Events, public storage: Storage) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'DASHBOARD', component: NewHomePage, selected: true },
      { title: 'PERSONAL DATA', component: PersonalDataPage, selected: false },
      { title: 'TRAINING', component: TrainingPage, selected: false },
      { title: 'PERFORMANCE', component: PerformancePage, selected: false },
      { title: 'BENEFITS & REWARDS', component: BenefitsPage, selected: false },
      { title: 'SHIFT DAY', component: ShiftDayPage, selected: false },
    ];
    events.subscribe('user:created', (empNbr, firstName, lastName) => {
      console.log(lastName);
      this.firstName = firstName;
      this.lastName = lastName;
      this.setJobTitleImg(firstName);
    });
  }

  setJobTitleImg(firstName: string) {
    if(firstName == "John"){
      this.jobTitle = "Loader";
      this.imgSrc = "./assets/imgs/John_Circle.png";
    }
    else if(firstName == "Julio"){
      this.jobTitle = "Cashier";
      this.imgSrc = "./assets/imgs/Julio_Circle.png";
    }
    else {
      this.jobTitle = "Cashier";
      this.imgSrc = "./assets/imgs/Emily_chat.png";
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    //   this.lNotifications.platform.ready().then((readySource) => {
    //   this.lNotifications.localNotifications.on('click', (notification, state) => {
    //     let json = JSON.parse(notification);
    //     console.log("Notification Clicked.." + json);
    //     this.lNotifications.clearNotification(notification.id);
    //     this.openPage(ShiftDayPage);
    //   })
    // });

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

  showRatingPage(){
    this.storage.clear();
    this.nav.setRoot(WelcomeLoginPage);
  }
  
}