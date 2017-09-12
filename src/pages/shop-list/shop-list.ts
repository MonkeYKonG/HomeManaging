import { FirebaseProvider } from './../../providers/firebase/firebase';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, ModalController } from 'ionic-angular';

import { ShopListItem } from '../../assets/class/shopList-item';
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
    
    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public modalCtrl: ModalController,
		public firebaseProvider: FirebaseProvider) {
	this.shopLists = this.firebaseProvider.getItems("shop-list");
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
			this.firebaseProvider.addItem({title: data.title}, "shop-list/")
			    .then(data => {
				this.navCtrl.push(ShopListDescriptionPage, data.key);
			    })
			    .catch (error => {
				console.error("An error ocured when creating new shop-list", error);
			    });
		    }           
		}	      
	    ]
	});
	prompt.present();
    }

    openShopList(shop_list) {
	this.navCtrl.push(ShopListDescriptionPage, shop_list.$key);
    }
}
