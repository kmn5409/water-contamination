import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EmployeePage } from '../pages/employee/employee';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, afAuth: AngularFireAuth, private splashScreen: SplashScreen, 
    private statusBar: StatusBar) {
    const authObserver = afAuth.authState.subscribe( user => {
      if (user) {
        this.rootPage = EmployeePage;
        authObserver.unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}