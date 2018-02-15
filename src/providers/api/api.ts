import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { ENV } from '../../config/config';
import {ShiftTimes, ScheduleNew} from '../../app/interfaces';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { Http, Response } from '@angular/http';
import { LNotificationProvider } from '../l-notification/l-notification';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
 
  thisWkSchedule: ScheduleNew[] = [];
  nextWkSchedule: ScheduleNew[] = [];
  todayShiftTimes: ShiftTimes = new ShiftTimes();

  constructor(public http: Http, public lNotification: LNotificationProvider) {
    console.log('Hello ApiProvider Provider');
    this.initializeShiftTimes();
  }

  getAssociatePersonalData(){
     return this.http.get('assets/data/mock-associate.json')
                     .map((response:Response) => response.json());
  }

  fetchTimeAndAttendanceInfo(): Promise<any> {
      return this.http.post(ENV.API_ENDPOINT + 'getTimeAndAttendance?empId=600600602', '')
      .map(res => res.json()).toPromise();
  }

  initializeSchedules(isCurrentWk){
     let loopCnt = 0;
     let addDays = 0;
     if (isCurrentWk){
        loopCnt = (6 - moment().day());
     }else{
        loopCnt = 7;
        addDays = (6 - moment().day());
     }
      //let loopCnt =  isCurrentWk ? (6 - moment().day())  : 6;

      for(let i = 0; i<loopCnt; i++){
          let schedule = new ScheduleNew();
          let newShift: moment.Moment;
          newShift = moment().add(addDays, 'days');
          //schedule.date = newShift.format('MMM')+'-'+newShift.date();
          // check if its Firday as its end of the week and skip all steps
            schedule.calDay = newShift.date();
            schedule.month = newShift.format('MMM');
            if(isCurrentWk && moment().format('dddd') === newShift.format('dddd')){
                schedule.day = 'TODAY, '+(newShift.format('dddd')).toLocaleUpperCase();
            }else if(isCurrentWk && moment().add(1,'days').format('dddd') === newShift.format('dddd')){
                schedule.day = 'TOMORROW, '+(newShift.format('dddd')).toLocaleUpperCase();
            }else{
                schedule.day = newShift.format('dddd').toLocaleUpperCase();
            }
            
            if(newShift.format('dddd') === 'Sunday'){
                schedule.shiftIn = '00:00';
                schedule.shiftOut = '00:00';
                schedule.isWeeklyOff = true;
            }else{
                schedule.shiftIn = newShift.format('hh:mm A');
                schedule.shiftOut = newShift.add(8, 'hours').format('hh:mm A');
                schedule.isWeeklyOff = false;
            }
            schedule.isOptedLOA = false;
            addDays = addDays + 1;

            if(isCurrentWk){
                this.thisWkSchedule.push(schedule);
            }
            else{
                this.nextWkSchedule.push(schedule);
            }
      }

      if(isCurrentWk){
          console.log(this.thisWkSchedule);
      }else{
          console.log(this.nextWkSchedule);
      }
      
  }

  initializeShiftTimes(){
    this.todayShiftTimes.startTime = moment().add(2, 'minutes').format('hh:mm A');
    this.todayShiftTimes.breakTime1 = moment().add(5,'minutes').format('hh:mm A');
    this.todayShiftTimes.mealTime = moment().add(12,'minutes').format('hh:mm A');
    this.todayShiftTimes.breakTime2 = moment().add(14,'minutes').format('hh:mm A');
    this.todayShiftTimes.endTime = moment().add(17,'minutes').format('hh:mm A');

    console.log("Initialized new shift times: "+ this.todayShiftTimes);

    // Initialize schedules for current and next week
    this.initializeSchedules(true);
    this.initializeSchedules(false);

    this.lNotification.addNotification(2, 'You have entered the Walmart store. Please login and start your shift.');
    this.lNotification.addNotification(7, 'Your Meal break is coming up in 5 minutes, kindly take the needed break. Enjoy your meal! ');
    this.lNotification.addNotification(18, 'You have not yet ended your shift.'); // Delayed to show crossed time
    //console.log('Default Notification time - from HOME: ' + moment(new Date()).format());
    this.lNotification.scheduleNotifications();
    
  }

}
