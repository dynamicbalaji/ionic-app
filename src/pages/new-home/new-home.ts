import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';

import { WeeklySchedulePage } from '../weekly-schedule/weekly-schedule';
import { PunchMissedPage } from '../punch-missed/punch-missed';
import * as moment from 'moment';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
//import { GeoLocationServiceProvider } from '../../providers/geo-location-service/geo-location-service';
import { DashboardService } from '../../services/dashboard.service';
import { ScheduleNew } from '../../app/interfaces';
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
  currentPosition: Geoposition;
  options: GeolocationOptions;
  //lat = 36.365025;
  //lon = -94.214577;
  lat = 36.350115;
  lon = -94.185172;
  clockedHours: string = "0";
  punchesMissedCount: string = "0";
  payPeriodDate: any = "";
  pastMonthDate: any = "";
  todayDate: any = "";
  tomorrowDate: any = "";
  todayScheduleShift: string = "05:00 - 14:00";
  tomorrowScheduleShift: string = "05:00 - 14:00";
  currentPayPeriod: string = "";
  previousCurrentPayPeriod1: string = "";
  previousCurrentPayPeriod2: string = "";
  speakerEnabled = 'true';
  points: any = "50";

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
    public alertCtrl: AlertController, public localNotifications: LocalNotifications,
    public geolocation: Geolocation, public dashboardService: DashboardService) {

    this.addNotification(2, 'You have entered the Walmart store. Please login and start your shift.');
    this.addNotification(5, 'Your Meal break is coming up in 5 minutes, kindly take the needed break. Enjoy your meal! ');
    this.addNotification(16, 'You have not yet ended your shift.'); // Delayed to show crossed time

    console.log('Default Notification time - from HOME: ' + moment(new Date()).format());
    this.populateAllDetails();
    this.todayDate = moment().format('ll');
    this.tomorrowDate = moment().add(1, 'days').format('ll');
    this.pastMonthDate = moment().subtract(45, 'days').format('ll');
    this.scheduleNotifications();
    this.getAssocPosition();
  }

  populateAllDetails() {
    this.dashboardService.fetchTimeAndAttendanceInfo().then(data => {
      let a = JSON.stringify(data);
      let b = JSON.parse(a);
      console.log(b)
      this.clockedHours = b[0].clockedHoursCW + b[0].clockedHoursLW;
      this.punchesMissedCount = b[0].punchesMissedLastMonth;
      this.points = b[0].leaderboardPoints;
      this.fetchSceduleShift(b[0].schedule as ScheduleNew[]);
    });

    this.dashboardService.fetchPayrollInfo().then(data => {
      console.log(data)
      let payPeriodEndDate: Date = new Date(data[0].currentPayperiodEndDate);
      this.payPeriodDate = moment(payPeriodEndDate).format('ll');
      this.currentPayPeriod = moment(payPeriodEndDate).subtract(13, 'days').format('ll') + " - " + moment(payPeriodEndDate).format('ll');
      this.previousCurrentPayPeriod1 = moment(payPeriodEndDate).subtract(27, 'days').format('ll') + " - " + moment(payPeriodEndDate).subtract(14, 'days').format('ll')
      this.previousCurrentPayPeriod2 = moment(payPeriodEndDate).subtract(41, 'days').format('ll') + " - " + moment(payPeriodEndDate).subtract(28, 'days').format('ll');
    });
  }

  fetchSceduleShift(schedule: ScheduleNew[]) {
    for (let sec of schedule) {

      if (sec.date === this.todayDate) {
        this.todayScheduleShift = sec.shiftIn + " - " + sec.shiftOut;
      }
      if (sec.date === this.tomorrowDate) {
        this.tomorrowScheduleShift = sec.shiftIn + " - " + sec.shiftOut;
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewHomePage');
  }

  viewSchedule() {
    this.navCtrl.push(WeeklySchedulePage);
  }


  viewPunchMissed() {
    this.navCtrl.push(PunchMissedPage);
  }


  addNotification(notifyid: number, msg: string) {

    let notification = {
      id: notifyid,
      title: 'Hi, Emily!',
      text: msg,
      at: new Date().setMinutes((new Date().getMinutes() + notifyid), 0, 0)
    };

    this.notifications.push(notification);
    console.log("Notification added to array: ", notification);
  }

  scheduleNotifications() {

    if (this.platform.is('cordova')) {
      // Cancel any existing notifications
      this.localNotifications.cancelAll().then(() => {

        // Schedule the new notifications
        this.localNotifications.schedule(this.notifications);
        console.log("Notifications are scheduled: " + this.notifications);
        this.notifications = [];

        /* let alert = this.alertCtrl.create({
            title: 'Notifications setup success!',
            buttons: ['OK']
        }); */

        //alert.present(); 
      });

    } else {
      //console.log("Not a Cordova platform: "+ this.notifications);
      // let alert = this.alertCtrl.create({
      //     title: 'Notifications not set !',
      //     buttons: ['OK']
      // });

      // alert.present(); 
    }
  }

  cancelAll() {
    this.localNotifications.cancelAll();

    /* let alert = this.alertCtrl.create({
        title: 'Notifications cancelled',
        buttons: ['Ok']
    }); */

    //alert.present();
  }

  //  getCurrentLocation() {
  //      var currCoord = this.geolocation.getCurrentLocation();

  //      if(currCoord !== undefined && currCoord !== null){
  //         console.log("Current latitude: " + currCoord.latitude);
  //         console.log("Current longitude: " + currCoord.longitude);

  //         let alert = this.alertCtrl.create({
  //           title: 'Your Current Latitude: ' + currCoord.latitude + ' Longitude: ' + currCoord.longitude,
  //           buttons: ['Ok']
  //         });
  //           alert.present();
  //      }

  //      //"latitude":"36.368173","longitude":"-94.224844"
  //      var lat = 36.365025; 
  //      var lon = -94.214577;
  //      var result = this.geoLocService.isWithinLocation(lat, lon);
  //      var msg = '';
  //      if(result){
  //        msg = 'You are within the GPC location !'
  //      }else{
  //        msg = 'Sorry! You are not near the GPC location !'
  //      }

  //      let alert1 = this.alertCtrl.create({
  //       title: msg,
  //       buttons: ['Ok']
  //      });
  //      alert1.present();
  //  }

  getAssocPosition() {
    this.options = {
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(this.options).then(
      (position: Geoposition) => {
        this.currentPosition = position;
        console.log(position.coords);
        this.calcPosition(position.coords.latitude, position.coords.longitude, this.lat, this.lon);

      }, (err: PositionError) => {
        console.log("error : " + err.message);
      });

  }

  WatchAssocPosition(){
    const subscription = this.geolocation.watchPosition()
                               //.filter((p) => p.coords !== undefined) //Filter Out Errors
                               .subscribe(position => {
          console.log('WATCHED POSITION: ' + position.coords.longitude + ' ' + position.coords.latitude);
    });


  }

  calcPosition(lat1, lon1, lat2, lon2): boolean {
    var result: boolean = false;
    var R = 3958.75; // radius in mi
    var x1 = lat2 - lat1;
    var dLat = this.toRad(x1);
    var x2 = lon2 - lon1;
    var dLon = this.toRad(x2);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    console.log("You are" + " " + d + " " + "miles away from gpc");
    var dispresult = "You are currently at Latitude: " + lat1 + " Longitude: " + lon1 + " and you are " + d + " " + "miles away from Store " + " at Latitude: " + lat2 + " Longitude: " + lon2;
    //var time = new Date();
    if (d <= 0.5) {
      result = true;
      this.addNotification(0, 'You have entered the Walmart store. Please login and start your shift.');
    }
    console.log("Your Result: " + dispresult + " " + result);

     let alert = this.alertCtrl.create({
     title: dispresult,
     buttons: ['Ok']
     });
     alert.present();

    return result;
  }

  toRad(coord1) {
    return coord1 * Math.PI / 180;
  }

}
