import { BarPage } from '../bar/bar';

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';




/**
 * Generated class for the PageonePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pageone',
  templateUrl: 'pageone.html',
})
export class PageonePage {
   barPage = BarPage;


email: string;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

    this.email = fire.auth.currentUser.email;




  }






}





//   ionViewDidLoad() {
//     console.log('ionViewDidLoad PageonePage');
//   }