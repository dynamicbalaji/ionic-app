import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewHomePage } from '../new-home/new-home';
import { Storage } from '@ionic/storage';

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

  firstName: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public storage: Storage) {
      this.storage.get('firstName').then((val)=>{
        this.firstName = val;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoiceEnablePage');
  }

  NextPage1() { 
    this.navCtrl.push(NewHomePage);
    this.navCtrl.setRoot(NewHomePage);
   }
}
