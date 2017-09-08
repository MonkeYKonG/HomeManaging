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
  templateUrl: 'shop-list-description.html',
})
export class ShopListDescriptionPage {

    title: string;
    description: string;
    items: FirebaseListObservable<any[]>;
    test = [
	{name: "banane", quantity: 4, isCheck: true},
	{name: "chocolat", quantity: 12, isCheck: false}
    ];

    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public firebaseProvider: FirebaseProvider) {
	this.items = this.firebaseProvider.getItems("shop-list/liste de test");
	// ajouter le chemain restant en utilisant le nom de la liste passer en argument

	// DEBUG
	this.title = "bonjour le monde";
	this.description = "je suis la description";
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad CreateShopListPage');
    }

    createNewShopList() {
	
    }
}
