import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-folders',
  templateUrl: 'folders.html'
})
export class FoldersPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
