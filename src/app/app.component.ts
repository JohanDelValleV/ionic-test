import { Component, NgZone } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";


@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  constructor(
    private nav:NavController,
    private zone: NgZone,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  // Android
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      if (this.router.url === "/tabs/planets") {
        navigator["app"].exitApp();
      }
      else if (this.router.url === '/tabs/people') {
        this.zone.run(async () => {
          await this.nav.back();
        })
      }
      else if (this.router.url === '/tabs/starships') {
        this.zone.run(async () => {
          await this.nav.back();
        })
      }
    });
  }
}
