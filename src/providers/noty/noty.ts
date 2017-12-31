import { Injectable } from '@angular/core'
import { ToastController } from 'ionic-angular'

@Injectable()
export class NotyProvider {
  constructor(public toastCtrl: ToastController) {}

  /**
   *  Displays an error message at the top of the screen
   */
  error(title, message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
      cssClass: 'noty-error'
    })
    return toast.present()
  }
}
