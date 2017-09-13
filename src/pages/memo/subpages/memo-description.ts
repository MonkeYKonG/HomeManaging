import { FirebaseProvider } from './../../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memo',
  templateUrl: 'memo-description.html',
})
export class MemoDescriptionPage {
    rootPath: string;
    data: FirebaseObjectObservable<any[]>;
    text: string;

    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public firebaseProvider: FirebaseProvider) {
	this.rootPath = "memo/" + navParams.data + "/";
	this.data = this.firebaseProvider.getObject(this.rootPath);
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad CreateMemoPage');
    }

    test() {
	console.log("test");
    }
}
