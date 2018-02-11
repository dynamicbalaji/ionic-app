import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VoiceEnablePage } from '../voice-enable/voice-enable';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeLoginPage');
    setTimeout(function () {  
      document.getElementById("greeting").style.display = "none";
      document.getElementById("login").style.display = "inline";
  }, 6000); 
  }

  NextPage() {
    this.navCtrl.push(VoiceEnablePage);
    this.navCtrl.setRoot(VoiceEnablePage);
    }
}
