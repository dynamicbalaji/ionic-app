import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ENV } from '../config/config';

@Injectable()
export class DashboardService {

    constructor(public http: Http) {
    }

    getAsc() {
        return Promise.resolve();
    }

    getLoginInfo(userName: string, password: string): Promise<any> {
        return this.http.post(ENV.API_ENDPOINT + 'login?userId=' + userName + '&passWord=' + password, '')
            .map(res => res.json())
            .toPromise();
    }

    getDashboardInfo(): Promise<any> {
        return this.http.post(ENV.API_ENDPOINT + 'enquiry?empId=600600602', '')
            .map(res => res.json()).toPromise();
    }

    fetchTimeAndAttendanceInfo(): Promise<any> {
        return this.http.post(ENV.API_ENDPOINT + 'getTimeAndAttendance?empId=600600602', '')
        .map(res => res.json()).toPromise();
    }

    fetchPayrollInfo(): Promise<any> {
      return this.http.post(ENV.API_ENDPOINT+'getPayroll?empId=600600602', '')
      .map(res => res.json()).toPromise();
    }

    fechAssociateInfo(): Promise<any> {
        return this.http.post(ENV.API_ENDPOINT+'fetchAssocInfo?empId=600600602','')
        .map(res => res.json()).toPromise();
      }

}
