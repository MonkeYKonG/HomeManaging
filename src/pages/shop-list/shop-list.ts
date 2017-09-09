import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, ModalController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { ShopListDescriptionPage } from './subpages/shop-list-description';

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

    shopLists: FirebaseListObservable<any[]>;
    localShopLists = [
	{key: "test"},
	{key: "test2"}
    ];
    listIsLoad: boolean;
    
    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public modalCtrl: ModalController,
		public firebaseProvider: FirebaseProvider) {
	this.listIsLoad = false;
	this.shopLists = this.firebaseProvider.getItems("shop-list");
	this.shopLists.subscribe(() => this.listIsLoad = true)
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad ShopListPage');
    }
    
    removeItem(id) {
	this.firebaseProvider.removeItem(id);
    }

    promptNewTitle() {
	let prompt = this.alertCtrl.create({
	    title: 'Nouvelle liste',
	    inputs: [
		{
		    name: 'title',
		    placeholder: 'Titre'
		},
	    ],
	    buttons: [
		{
		    text: 'Annuler'
		},
		{
		    text: 'Créer la liste',
		    handler: data => {
			console.log(data);
			this.navCtrl.push(ShopListDescriptionPage, {title: data.title, newList: true});
		    }           
		}	      
	    ]
	});
	prompt.present();
    }

    openShopList(shop_list) {
	if (shop_list.key)
	    this.navCtrl.push(ShopListDescriptionPage, shop_list.key);
	else
	    this.navCtrl.push(ShopListDescriptionPage, shop_list.$key);
    }
}
