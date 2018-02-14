import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { NewHomePage } from '../new-home/new-home';

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
    console.log(this.reason);
    if(this.reason !== undefined){
        this.delayedShiftout = false;
        this.currentShiftPercent = 100;
        //this.viewCtrl.dismiss();
        //console.log(this.currentShiftPercent);
        document.getElementById("success").style.display = "inline";
        //this.shiftChangeComplete = true;
        //this.closeModal();
    }
  }

  closeModal(){
    this.viewCtrl.dismiss();
    //this.navCtrl.push(NewHomePage);
  }

  onOtherSelection(){
      if(this.reason !== undefined && this.reason === "5"){
          this.otherOptionSelected = true;
      }else{
          this.otherOptionSelected = false;
      }
  }
}
