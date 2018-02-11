import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ENV } from '../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

//import associate from './mock-associate';
//import { Associate } from '../app/interfaces';

@Injectable()
export class AssociateService {

    constructor(public http: Http) {
    }

    getAsc() {
        return Promise.resolve();
    }

    getLoginInfo(userName: string, password: string): Promise<any> {
        return this.http.post(ENV.API_ENDPOINT+'login?userId='+ userName + '&passWord='+ password, '')
        .map(res => res.json())
        .toPromise();
    }

    /* private extractData(res: Response) {
        let body = res.json();
        return body;
    } */

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

}
