import { Component } from '@angular/core'
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ModalController
} from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth'
import { NotyProvider } from '../../providers/noty/noty'
import { FoldersPage } from '../../pages/folders/folders'
import { LoginPage } from '../../pages/login/login'

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  email: string
  password: string

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public noty: NotyProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) {}

  /**
   *  Signup function that utilizes Firebase's auth module
   *  Displays an error if Firebase complains about the inputs
   */
  async signup() {
    const loader = this.loadingCtrl.create()
    loader.present()

    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(
        this.email,
        this.password
      )
      loader.dismiss()
      this.navCtrl.push(FoldersPage)
    } catch (err) {
      await loader.dismiss()
      this.noty.error(null, err.message)
    }
  }

  /**
   *  Allows the user to open the Login page in a modal
   */
  async goToLogin() {
    const modal = this.modalCtrl.create(LoginPage)
    modal.present()

    modal.onDidDismiss(async data => {
      if (data && data.continue) {
        this.navCtrl.push(FoldersPage)
      }
    })
  }
}
