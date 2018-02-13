import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { Associate } from '../../app/interfaces';
//import { AssociateService } from '../../services/associate.service.mock';
import { ApiProvider } from '../../providers/api/api';
import { DashboardService } from '../../services/dashboard.service';

/**
 * Generated class for the PersonalDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-personal-data',
  templateUrl: 'personal-data.html',
})
export class PersonalDataPage {

  associate: Associate;
  dataForm: FormGroup;
  errorMsg: string;
  dob = '03/21/1982';
  maritalStatus: string = "2";

  editMode: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider
    , public dashboardService: DashboardService,  public formBuilder: FormBuilder) {
    this.dataForm = formBuilder.group({
      fName: ['', Validators.compose([Validators.required])],
      lName: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      maritalStatus: ['', Validators.compose([Validators.required])],
      addr1: ['', Validators.compose([Validators.required])],
      addr2: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])]
    });
    this.associate = {
      fName: '',
      lName: '',
      dob: '',
      maritalStatus: '',
      addr1: '',
      addr2: '',
      city: '',
      state: '',
      country: '',
      phone: '',
      email: ''
    };
    //this.ascService.getAsc().then(data => {console.log(JSON.stringify(data));this.associate = <Associate>data});
    this.getAssociateData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalDataPage');
  }

  toggleButton(action){
    if(action === 'Edit'){
      this.editMode = true;
    }else{
      this.editMode = false;
    }
    
  }

  getAssociateData(){
      this.dashboardService.fechAssociateInfo().then(val => {
        let a = JSON.stringify(val);
        let b = JSON.parse(a);
        console.log(b);
        this.associate.fName =  b[0].first_Name;
        this.associate.lName =  b[0].last_Name;
        this.associate.dob = b[0].date_Of_Birth;
        this.associate.dob = moment(this.associate.dob).format('MM/DD/YYYY');
        if(b[0].marital_Status=='S'){
          this.associate.maritalStatus = "Single"; 
        }else{
          this.associate.maritalStatus = "Married";
        }
        this.associate.addr1 = b[0].addr_01;
        this.associate.addr2 = b[0].addr_02;
        let phoneNbr = b[0].phone_Nbr;
        let telNbr = "("+phoneNbr.substring(0,3)+")-"+phoneNbr.substring(3,6)+"-"+phoneNbr.substring(6,10);
        
        this.associate.phone = telNbr;
        this.associate.email = b[0].email_Id;
        this.associate.city = b[0].city;
        this.associate.state = b[0].state;
        this.associate.country = b[0].country;
        this.patchValueToForm();
      });
  }

  onSubmit(value: any): void {
    if (!this.dataForm.valid) {
      this.errorMsg = "Please fill all fields.";
    }
    else {
      this.editMode = false;
      this.errorMsg = "";
      this.associate.fName = value.fName;
      this.associate.lName =  value.lName;
      this.associate.dob = value.dob;
      this.associate.maritalStatus = value.maritalStatus;
      this.associate.addr1 =  value.addr1;
      this.associate.addr2 = value.addr2;
      this.associate.phone = value.phone;
      this.associate.email =  value.email;
      this.associate.city = value.city;
      this.associate.state =  value.state;
      this.associate.country = value.country;
      this.patchValueToForm();
    }
  }

  patchValueToForm() {
    this.dataForm.patchValue({
      fName: this.associate.fName,
      lName: this.associate.lName,
      dob: this.associate.dob,
      maritalStatus: this.associate.maritalStatus,
      addr1: this.associate.addr1,
      addr2: this.associate.addr2,
      city: this.associate.city,
      state: this.associate.state,
      country: this.associate.country,
      phone: this.associate.phone,
      email: this.associate.email
    });
  }
  

}
