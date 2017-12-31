import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { AngularFireAuth } from 'angularfire2/auth'
import { LandingPage } from '../pages/landing/landing'
import { FoldersPage } from '../pages/folders/folders'
import { SignupPage } from '../pages/signup/signup'
import 'rxjs/add/operator/take'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // Start the app on a basic landing page
  rootPage: any = LandingPage

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public afAuth: AngularFireAuth
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault()
      this.splashScreen.hide()

      // After Firebase responds with whether or not the user is logged in,
      // decide which page to start the app on
      this.afAuth.authState.take(1).subscribe(auth => {
        this.rootPage = auth ? FoldersPage : SignupPage
      })
    })
  }
}
