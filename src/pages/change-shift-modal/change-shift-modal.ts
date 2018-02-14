import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ScheduleNew } from '../../app/interfaces';

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
  selectedSchedule: ScheduleNew;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public viewCtrl: ViewController, public renderer: Renderer) {
    this.changeOptionModal = true;
    this.shiftSelection = false;
    this.selectedSchedule = this.navParams.get('toChgSchedule');
  }
  
  ionViewWillEnter() {
    let myValue: ScheduleNew = this.navParams.get('toChgSchedule');
    console.log(myValue);
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

      // Split the new shift time and set in existing schedule sent for modification
      let newShift = this.newOption.split('-');
      console.log("Splitted shifts: "+ newShift[0] + ", "+ newShift[1]);
      this.selectedSchedule.shiftIn = newShift[0].trim();
      this.selectedSchedule.shiftOut = newShift[1].trim();

      setTimeout(function () {  
        document.getElementById("progress").style.display = "none";
        document.getElementById("success").style.display = "inline";
        //this.shiftChangeComplete = true;
        //this.closeModal();
      }, 5000);
    }else if(optionId === 'LOA'){
      // Assoc Opted for LOA option so turn off the shift
      this.selectedSchedule.isOptedLOA = true;
      this.shiftChangeComplete = false;
      this.closeModal();
    }else{
      this.shiftChangeComplete = false;
      this.closeModal();
    }
  }

}
