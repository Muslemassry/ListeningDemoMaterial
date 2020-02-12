import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService : AuthenticationService,
    private router : Router
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private sideMenu() {
    this.navigate = [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      // {
      //   title : "Login",
      //   url   : "/login",
      //   icon  : "log-in"
      // },
      {
        title : "Add Student",
        url   : "/add-student",
        icon  : "person-add"
      },
      // {
      //   title : "Take Test",
      //   url   : "/take-test",
      //   icon  : "book"
      // },
      {
        title : "Assign to Test",
        url   : "/child-assign-test",
        icon  : "person-add"
      },
      {
        title : "System Tests",
        url   : "/system-tests",
        icon  : "person-add"
      },
    ]
  }

  doLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
