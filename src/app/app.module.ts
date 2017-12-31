import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { MyApp } from './app.component'
import { LandingPage } from '../pages/landing/landing'
import { FoldersPage } from '../pages/folders/folders'
import { SignupPage } from '../pages/signup/signup'
import { LoginPage } from '../pages/login/login'
import { firebaseCredentials } from './app.environment'
import { NotyProvider } from '../providers/noty/noty'

@NgModule({
  declarations: [MyApp, LandingPage, FoldersPage, SignupPage, LoginPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCredentials),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LandingPage, FoldersPage, SignupPage, LoginPage],
  providers: [
    StatusBar,
    SplashScreen,
    NotyProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
