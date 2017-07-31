//import { PageonePage } from '../pageone/pageone';

import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
//pageonePage = PageonePage;
@ViewChild('username') username;
@ViewChild('password') password;
  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController) {
  
}

alert(message: string) {
    this.alertCtrl.create({
      title: 'Hey!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }



registerUser() {
  this.fire.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
  .then(data => { 
  console.log('got data ', data);
  this.alert('Success! You\'re now registered');

})
.catch(error => {
  console.log('got an error ', error);
  this.alert(error.message);
});
console.log('Would register with ', this.username.value, this.password.value)
  

}
}
// ionViewDidLoad() {
//     console.log('ionViewDidLoad LandingPage');
//   }
// public navCtrl: NavController, public navParams: NavParams