import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { VoiceEnablePage } from '../voice-enable/voice-enable';
import { AssociateService } from '../../services/associate.service';

/** 
 * Generated class for the WelcomeLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome-login',
  templateUrl: 'welcome-login.html',
})
export class WelcomeLoginPage {

  loginForm: FormGroup;
  loginErrorMsg : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public ascService: AssociateService
    , public storage: Storage, public events: Events) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeLoginPage');
    setTimeout(function () {
      document.getElementById("greeting").style.display = "none";
      document.getElementById("login").style.display = "inline";
    }, 3000);
  }

  login() {
    this.navCtrl.push(VoiceEnablePage);
    this.navCtrl.setRoot(VoiceEnablePage);
  }

  onSubmit(value: any): void {
    if (this.loginForm.valid) {
      this.ascService.getLoginInfo(value.username, value.password).then(data => {
        //data.validUser = true; // REMOVE THIS after local testing
        if (data.validUser) {
          this.storage.set("empNbr",data.empNbr);
          this.storage.set("firstName",data.firstName);
          this.storage.set("lastName",data.lastName);
          this.events.publish('user:created', data.empNbr, data.firstName, data.lastName);
          this.navCtrl.push(VoiceEnablePage);
          this.navCtrl.setRoot(VoiceEnablePage);
        }
        else {
          this.loginErrorMsg = data.message;
        }
      }
      );
    }
  }
}
