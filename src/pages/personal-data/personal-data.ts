import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Associate } from '../../app/interfaces';
//import { AssociateService } from '../../services/associate.service.mock';
import { ApiProvider } from '../../providers/api/api';

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
  dob = '03/21/1982';
  maritalStatus: string = "2";

  editMode: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    // this.dob = "03/21/1982";
    // this.maritalStatus = "2";
    // this.associate = {
    //   fName: 'Emily',
    //   lName: 'Holmes',
    //   dob: '03/21/1982',
    //   maritalStatus: '2',
    //   addr1: '',
    //   addr2: '',
    //   city: '',
    //   state: '',
    //   country: '',
    //   phone: '',
    //   email: ''
    // };
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
      this.api.getAssociatePersonalData()
        .subscribe((response)=> {
            this.associate = response
            console.log(this.associate);
        });
  }
  

}
