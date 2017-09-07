import { FirebaseProvider } from './../../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-list',
  templateUrl: 'create-shop-list.html',
})
export class CreateShopListPage {

    title: string;
    subTitle: string;
    description: string;
    items: FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public firebaseProvider: FirebaseProvider) {
	this.items = this.firebaseProvider.getItems("shop-list");
	// ajouter le chemain restant en utilisant le nom de la liste passer en argument
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad CreateShopListPage');
    }

    createNewShopList() {
	
    }
}
