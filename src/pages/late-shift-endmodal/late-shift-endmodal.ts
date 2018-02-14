import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the LateShiftEndmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-late-shift-endmodal',
  templateUrl: 'late-shift-endmodal.html',
})
export class LateShiftEndmodalPage {

  delayedShiftout: boolean = true
  reason: string;
  otherOptionSelected: boolean = false;
  currentShiftPercent: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
      this.currentShiftPercent = this.navParams.get("shftProgress");
      console.log(this.currentShiftPercent);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LateShiftEndmodalPage');
  }

  submitReason(){
    if(this.reason !== undefined){
        this.currentShiftPercent = 100;
        this.viewCtrl.dismiss();
        console.log(this.currentShiftPercent);
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
