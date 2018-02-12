//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';

/*
  Generated class for the GeoLocationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeoLocationServiceProvider {

  currentPosition:  Geoposition;
  options: GeolocationOptions;

  constructor(public geolocation: Geolocation) {
    console.log('Hello GeoLocationServiceProvider Provider');
  }


   isWithinLocation(storeLat, storeLong): boolean|string {
      var result;
      this.options = {
        enableHighAccuracy : true
      };
      this.geolocation.getCurrentPosition(this.options).then(
        (position : Geoposition) => {
          this.currentPosition = position;      
          console.log(position.coords);
          console.log(position.timestamp);
          result = this.calcPosition(position.coords.latitude,position.coords.longitude,storeLat,storeLong);

      },(err : PositionError)=>{
          console.log("error : " + err.message);
          result = err.message;
      });

      return result;
   }

   getCurrentLocation(): Coordinates {
      this.options = {
        enableHighAccuracy : true
      };
      let currentCoord: Coordinates;
      this.geolocation.getCurrentPosition(this.options).then(
        (position : Geoposition) => {
          currentCoord = position.coords;      
          console.log(position.coords);
          console.log(position.timestamp);

      },(err : PositionError)=>{
          console.log("error : " + err.message);
      });
      
      return currentCoord;
   }


   calcPosition(lat1, lon1,lat2,lon2): boolean{
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
      console.log("You are"+" "+d+" "+"miles away from gpc")
      var dispresult = "You are currently at Latitude: "+lat1+" Longitude: "+ lon1 +" and you are "+d+" "+"miles away from Store " + " at Latitude: "+ lat2 + " Longitude: " + lon2;
      var time = new Date();
      if(d <= 0.1){
          result = true;
      }
      console.log("Your Result: "+ dispresult + " "+ result);

      return result;
   }

    toRad(coord1) {
      return coord1 * Math.PI / 180;
    }

}
