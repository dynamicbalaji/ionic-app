import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangeScheduleDonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-change-schedule-done',
  templateUrl: 'change-schedule-done.html',
})
export class ChangeScheduleDonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeScheduleDonePage');
    document.getElementById("one").className = "spinnerCenter";
    document.getElementById("one").className += "my-label";
    document.getElementById("one").style.margin = "0 auto";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
    setTimeout(function () {  
        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "inline";
        document.getElementById("two").className = "spinnerCenter";
        document.getElementById("two").className += "my-label";
        document.getElementById("two").style.margin = "0 auto";
    }, 6000); 
    setTimeout(function () {  
        document.getElementById("two").style.display = "none"; 
        document.getElementById("three").style.display = "inline";
        document.getElementById("three").className = "spinnerCenter"; 
        document.getElementById("three").className += "my-label";
        document.getElementById("three").style.margin = "0 auto";
    }, 12000);
  }

}
