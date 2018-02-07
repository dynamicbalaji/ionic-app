import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';

//import { ChangeSchedulePage } from '../pages/change-schedule/change-schedule';
//import { GtamenuPage } from '../pages/gtamenu/gtamenu';
import { NewHomePage } from '../pages/new-home/new-home';
import { PersonalDataPage } from '../pages/personal-data/personal-data';
import { ShiftTimes } from './interfaces';
import { ShiftDayPage } from '../pages/shift-day/shift-day';
import { WelcomeLoginPage } from '../pages/welcome-login/welcome-login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PersonalDataPage;

  pages: Array<{title: string, component: any, selected: boolean}>;

  currentShift : ShiftTimes = {
    startTime: '00:00',
    endTime: '00:00',
    breakTime: '00:00',
    mealTime: '00:00',
    startOnTime: false,
    endOnTime: false
  };

  notifications: any[] = [];
  //notificationMinute: number;
  //notifyTime: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public alertCtrl: AlertController, public localNotifications: LocalNotifications) {
    this.initializeApp();
    this.initializeShiftTimes();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'DASHBOARD', component: NewHomePage, selected: true },
      { title: 'PERSONAL DATA', component: PersonalDataPage, selected: false },
      { title: 'TRAINING', component: NewHomePage, selected: false },
      { title: 'PERFORMANCE', component: NewHomePage, selected: false },
      { title: 'BENEFITS & REWARDS', component: NewHomePage, selected: false },
      //{ title: 'Change Schedule', component: ChangeSchedulePage, selected: false },
      //{ title: 'GTAMenu', component: GtamenuPage, selected: false },
      { title: 'Shift Day', component: ShiftDayPage, selected: false }
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
    this.nav.setRoot(page.component, {'shiftTimes': this.currentShift});
    for(let p of this.pages) {
      p.selected = (p.title == page.title) ? true : false;
    }
  }

  initializeShiftTimes(){
    this.currentShift.startTime = moment().add(2, 'minutes').format('hh:mm A');
    //let notificationTime = new Date();
    //notificationTime.setMinutes((new Date().getMinutes() + 2), 0,0);
    this.addNotification(2, 'You have entered the Walmart store. Please login and start your shift.');

    this.currentShift.mealTime = moment().add(10,'minutes').format('hh:mm A');
    this.addNotification(5, 'Your Meal break is coming up in 5 minutes, kindly take the needed break. Enjoy your meal! ');

    this.currentShift.breakTime = moment().add(12,'minutes').format('hh:mm A');
    this.currentShift.endTime = moment().add(15,'minutes').format('hh:mm A');
    this.addNotification(16, 'You have not yet ended your shift.'); // Delayed to show crossed time

    console.log("Initialized new shift times: "+ this.currentShift.startTime + ", "+ 
            this.currentShift.endTime + this.currentShift.breakTime + ", "+ this.currentShift.mealTime);

    //this.notifyTime = moment(new Date()).format();
    
    console.log('Default Notification time: '+ moment(new Date()).format());
    console.log('Moment adding 2 mins: '+ moment().add(2, 'minutes').toLocaleString());

    this.scheduleNotifications();
    
  }

  addNotification(notifyid: number, msg: string){

    let notification = {
        id: notifyid,
        title: 'Hi, Emily!',
        text: msg,
        at: new Date().setMinutes((new Date().getMinutes() + notifyid),0,0)
    };

    this.notifications.push(notification);
    console.log("Notifications to be scheduled: ", this.notifications);
  }

  scheduleNotifications(){

    // let firstNotificationTime = new Date();
    // firstNotificationTime.setMinutes(this.notificationMinute);

    // let notification = {
    //     id: firstNotificationTime.getDay(),
    //     title: 'Hi, Emily!',
    //     text: 'You have entered the Walmart store. Please login and start your shift.',
    //     at: firstNotificationTime
    // };

    // this.notifications.push(notification);
  
    
 
    if(this.platform.is('cordova')){
 
        // Cancel any existing notifications
        this.localNotifications.cancelAll().then(() => {
 
            // Schedule the new notifications
            this.localNotifications.schedule(this.notifications);
            console.log("Notifications are scheduled: "+ this.notifications);
            this.notifications = [];
 
            // let alert = this.alertCtrl.create({
            //     title: 'Notifications set',
            //     buttons: ['Ok']
            // });
 
            // alert.present(); 
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