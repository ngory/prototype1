import { BarPage } from '../bar/bar';
import { Profile } from '../../models/profile';

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';








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
   profileData: FirebaseObjectObservable<Profile>
   barPage = BarPage;
   items: any;
   email: string;

   


  constructor(private toast: ToastController, private fire: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.doRefresh(0);
    this.email = fire.auth.currentUser.email;
  };

ionViewWillLoad() {
this.fire.authState.take(1).subscribe(data => { 
  if (data && data.email && data.uid) {
    this.toast.create({
      message: `Welcome to homepage, ${data.email}`,
      duration: 3000
    }).present();

   this.profileData = this.afDatabase.object(`profile/${data.uid}`)
  }
  else {
    this.toast.create({
      message: `Could not find authentication details.`,
      duration: 3000
    }).present();
  }
})
}

clearData() {
  this.storage.clear();
}


doRefresh(refresher){
    this.storage.get('myStore').then((data) => {
      this.items = data;
 
      if(refresher != 0)
         refresher.complete();
    }); 
};
  save(val){
    console.log('data added '+val);
    this.storage.get('myStore').then((data) => {
      if(data != null)
      {
        data.push(val);
        this.storage.set('myStore', data);
      }
      else
      {
        let array = [];
        array.push(val);
        this.storage.set('myStore', array);
      }
    });
  };
}


// getData(){ this.storage.get('myStore').then((val) => {
//     console.log('Your age is', val);

//   });










// // import { Storage } from '@ionic/storage';
// // public storage: Storage, 

