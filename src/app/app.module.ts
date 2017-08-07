
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, AlertController, ToastController } from 'ionic-angular';
import { MyApp } from './app.component';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule, FirebaseObjectObservable } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage'; 



import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/Home/Home';
import { LandingPage } from '../pages/landing/landing';
import { PageonePage } from '../pages/pageone/pageone';
import { BarPage } from '../pages/bar/bar';
import { TestPage } from '../pages/test/test';




const firebaseAuth = {
    apiKey: "AIzaSyCWwFeMgoN5mFqXzksNVo2k2EU7vWvPaKo",
    authDomain: "yourday-f2e71.firebaseapp.com",
    databaseURL: "https://yourday-f2e71.firebaseio.com",
    projectId: "yourday-f2e71",
    storageBucket: "yourday-f2e71.appspot.com",
    messagingSenderId: "1073629492556"
  };





//cloudsettings (***)
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '7ea43225'
  }
};
//cloudsettings (***)
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    PageonePage,
    BarPage,
    TestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    PageonePage,
    BarPage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    [{provide: ErrorHandler, useClass: IonicErrorHandler}]
  ]
})
export class AppModule {}

