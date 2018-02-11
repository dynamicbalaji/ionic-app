//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import {  } from 'module';
//import {ShiftTimes, Schedule, Associate} from '../../app/interfaces';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getAssociatePersonalData(){
     return this.http.get('assets/data/mock-associate.json')
                     .map((response:Response) => response.json());
  }

}
