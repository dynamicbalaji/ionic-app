import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Storage } from '@ionic/storage';

import { ENV } from '../config/config';
import { UserDetails } from '../app/interfaces';

@Injectable()
export class DashboardService {

    public missedPunchCount: number = 0;
    empNbr: number = 600600602;

    constructor(public http: Http, public storage: Storage) {
        this.storage.get('empNbr').then((val) => {
            this.empNbr = val;
        });
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
        return this.http.post(ENV.API_ENDPOINT + 'enquiry?empId='+this.empNbr, '')
            .map(res => res.json()).toPromise();
    }

    fetchTimeAndAttendanceInfo(): Promise<any> {
        return this.http.post(ENV.API_ENDPOINT + 'getTimeAndAttendance?empId='+this.empNbr, '')
            .map(res => res.json()).toPromise();
    }

    fetchPayrollInfo(): Promise<any> {
        return this.http.post(ENV.API_ENDPOINT + 'getPayroll?empId='+this.empNbr, '')
            .map(res => res.json()).toPromise();
    }

    fechAssociateInfo(): Promise<any> {
        return this.http.post(ENV.API_ENDPOINT + 'fetchAssocInfo?empId='+this.empNbr, '')
            .map(res => res.json()).toPromise();
    }

    updatePersonalInfo(userInfo: UserDetails): Promise<any> {
        userInfo.empNbr = this.empNbr;
        return this.http.post(ENV.API_ENDPOINT + 'savePersonalDetails', userInfo)
            .map(res => res.json()).toPromise();
    }

}
