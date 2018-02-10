import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ChangeShiftModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-shift-modal',
  templateUrl: 'change-shift-modal.html',
})
export class ChangeShiftModalPage {

  changeOptionModal: boolean;
  shiftSelection: boolean;
  shiftChangeComplete: boolean;
  newOption: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public viewCtrl: ViewController, public renderer: Renderer) {
    this.changeOptionModal = true;
    this.shiftSelection = false;
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeShiftModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  modifySchedule(optionId){
    console.log("Selected option: "+ optionId);
    //this.closeModal();
    if(optionId === 'AS'){ // Alternate Shift
      this.changeOptionModal = false;
      this.shiftSelection = true;
    }else if (optionId === 'SNT') { // Selected New Time
      this.shiftSelection = false;
      this.shiftChangeComplete = true;
      console.log("Selected alternate time: "+ this.newOption);
      setTimeout(function () {  
        document.getElementById("progress").style.display = "none";
        document.getElementById("success").style.display = "inline";
      }, 6000);
    }else{
      this.shiftChangeComplete = false;
      this.closeModal();
    }
  }

}
