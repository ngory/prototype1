import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageonePage } from '../pageone/pageone';
import { GreenPage } from '../green/green';
import { RedPage } from '../red/red';



/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 


viewprofilePage() {
  this.navCtrl.push(PageonePage);
}


viewGreenPage() {
  this.navCtrl.push(GreenPage);
}

viewRedPage() {
  this.navCtrl.push(RedPage);
}







  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
