import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';

import { WeeklySchedulePage } from '../weekly-schedule/weekly-schedule';
import { PunchMissedPage } from '../punch-missed/punch-missed';
import * as moment from 'moment';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
//import { GeoLocationServiceProvider } from '../../providers/geo-location-service/geo-location-service';

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
  lat = 36.365025; 
  lon = -94.214577;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,
  public alertCtrl: AlertController, public localNotifications: LocalNotifications, 
  public geolocation: Geolocation) {

    this.addNotification(2, 'You have entered the Walmart store. Please login and start your shift.');
    this.addNotification(5, 'Your Meal break is coming up in 5 minutes, kindly take the needed break. Enjoy your meal! ');
    this.addNotification(16, 'You have not yet ended your shift.'); // Delayed to show crossed time

    console.log('Default Notification time - from HOME: '+ moment(new Date()).format());

    this.scheduleNotifications();
    this.getAssocPosition();
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
  
              /* let alert = this.alertCtrl.create({
                  title: 'Notifications setup success!',
                  buttons: ['OK']
              }); */
  
              //alert.present(); 
          });
  
    }else{
      //console.log("Not a Cordova platform: "+ this.notifications);
            // let alert = this.alertCtrl.create({
            //     title: 'Notifications not set !',
            //     buttons: ['OK']
            // });
 
            // alert.present(); 
    }
  }
 
  cancelAll(){
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
  
   getAssocPosition(){
      this.options = {
        enableHighAccuracy : true
      };
      this.geolocation.getCurrentPosition(this.options).then(
        (position : Geoposition) => {
          this.currentPosition = position;    
          console.log(position.coords);
          this.calcPosition(position.coords.latitude,position.coords.longitude,this.lat,this.lon);

      },(err : PositionError)=>{
          console.log("error : " + err.message);
      });

   }

   calcPosition(lat1,lon1,lat2,lon2): boolean{
      var result: boolean = false;
      var R = 3958.75; // radius in mi
      var x1 = lat2-lat1;
      var dLat = this.toRad(x1);  
      var x2 = lon2-lon1;
      var dLon = this.toRad(x2); 
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
              Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);  
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; 
      console.log("You are"+" "+d+" "+"miles away from gpc");
      var dispresult = "You are currently at Latitude: "+lat1+" Longitude: "+ lon1 +" and you are "+d+" "+"miles away from Store " + " at Latitude: "+ lat2 + " Longitude: " + lon2;
      //var time = new Date();
      if(d <= 0.5){
          result = true;
          this.addNotification(0, 'You have entered the Walmart store. Please login and start your shift.');
      }
      console.log("Your Result: "+ dispresult + " "+ result);

      return result;
   }

    toRad(coord1) {
      return coord1 * Math.PI / 180;
    }

}
