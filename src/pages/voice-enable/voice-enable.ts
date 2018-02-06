import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewHomePage } from '../new-home/new-home';

/**
 * Generated class for the VoiceEnablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-voice-enable',
  templateUrl: 'voice-enable.html',
})
export class VoiceEnablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoiceEnablePage');
  }

  NextPage1() { 
    this.navCtrl.push(NewHomePage);
    this.navCtrl.setRoot(NewHomePage);
   }
}
