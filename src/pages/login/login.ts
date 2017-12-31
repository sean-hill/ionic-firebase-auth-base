import { Component } from '@angular/core'
import {
  IonicPage,
  NavController,
  ViewController,
  NavParams,
  LoadingController
} from 'ionic-angular'
import { NotyProvider } from '../../providers/noty/noty'
import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string
  password: string

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public noty: NotyProvider,
    public afAuth: AngularFireAuth
  ) {}

  /**
   *  Login function that utilizes Firebase's auth module
   *  Displays an error if Firebase complains about the inputs
   */
  async login() {
    const loader = this.loadingCtrl.create()
    loader.present()

    try {
      await this.afAuth.auth.signInWithEmailAndPassword(
        this.email,
        this.password
      )
      loader.dismiss()
      this.viewCtrl.dismiss({ continue: true })
    } catch (err) {
      await loader.dismiss()
      this.noty.error(null, err.message)
    }
  }
}
