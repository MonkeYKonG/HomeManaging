import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { CreateShopListPage } from './subpages/create-shop-list';

/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html',
})
export class ShopListPage {

    items: FirebaseListObservable<any[]>;
    newItem: string;
    
    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public firebaseProvider: FirebaseProvider) {
	this.items = this.firebaseProvider.getItems("shop-list");
	console.log(this.items);
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad ShopListPage');
    }
    
    addItem() {
	this.firebaseProvider.addItem(this.newItem);
    }
    
    removeItem(id) {
	this.firebaseProvider.removeItem(id);
    }

    testFct() {
	this.navCtrl.push(CreateShopListPage);
    }
}
