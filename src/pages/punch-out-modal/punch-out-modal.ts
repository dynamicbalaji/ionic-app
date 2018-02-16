import { Component, Renderer } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/**
 * Generated class for the PunchOutModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-punch-out-modal',
  templateUrl: 'punch-out-modal.html',
})
export class PunchOutModalPage {

  firstName: string = "";
  time: string;
  reason: string;
  otherOptionSelected: boolean = false;
  punchMissedCount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController, public renderer: Renderer, public storage: Storage) {
      this.punchMissedCount = this.navParams.get('missedPunchCount');
      console.log("Count: " + this.punchMissedCount);
      this.storage.get('firstName').then((val)=>{
        this.firstName = val;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PunchOutModalPage');
  }

  closeModal() {
    let data = {
      "missedPunchCount": this.punchMissedCount
    }
    this.viewCtrl.dismiss(data);
  }

  punchOut() {
    console.log(this.reason);
    if(this.reason !== undefined && this.time !== undefined){
        //document.getElementById("success").style.display = "inline";
        this.punchMissedCount = this.punchMissedCount - 1;
        console.log("After punch out:" + this.punchMissedCount);
        this.closeModal();
    }
  }

  onOtherSelection(){
      if(this.reason !== undefined && this.reason === "5"){
          this.otherOptionSelected = true;
      }else{
          this.otherOptionSelected = false;
      }
  }

}
