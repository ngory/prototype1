import { LandingPage } from '../landing/landing';
import { PageonePage } from '../pageone/pageone';

import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  @ViewChild('username') username;
  @ViewChild('password') password;
  landingPage = LandingPage; 

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }




alert(message: string) {
    this.alertCtrl.create({
      title: 'Hey!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


signIn() {
    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( PageonePage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  	console.log('Would sign in with ', this.username.value, this.password.value);
  } 



}


