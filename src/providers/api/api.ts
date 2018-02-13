import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { ENV } from '../../config/config';
import {Schedule, ShiftTimes, ScheduleNew} from '../../app/interfaces';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { Http, Response } from '@angular/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
 
  thisWkSchedule: ScheduleNew[] = [];
  nextWkSchedule: ScheduleNew[] = [];

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
    this.initializeSchedules(true);
    this.initializeSchedules(false);
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

      let addDays =  isCurrentWk ? 0 : 5; 

      for(let i = 0; i<5; i++){
          let schedule = new ScheduleNew();
          let newShift: moment.Moment;
          newShift = moment().add(addDays, 'days');
          //schedule.date = newShift.format('MMM')+'-'+newShift.date();
          schedule.calDay = newShift.date();
          schedule.month = newShift.format('MMM');
          if(isCurrentWk && moment().format('dddd') === newShift.format('dddd')){
              schedule.day = 'TODAY, '+newShift.format('dddd');
          }else if(isCurrentWk && moment().add(1,'days').format('dddd') === newShift.format('dddd')){
              schedule.day = 'TOMORROW, '+newShift.format('dddd');
          }else{
              schedule.day = newShift.format('dddd');
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
          }else{
              this.nextWkSchedule.push(schedule);
          }
          
          //this.scheduleMap.set(0, schedule);
      }
      console.log(this.thisWkSchedule);
      console.log(this.nextWkSchedule);
      
  }

}
